import React, { useState, useEffect } from 'react';
import { PublicClientApplication, acquireTokenSilent, InteractionType, msal } from '@azure/msal-browser';


export const OneDrive = () => {
  const [app, setApp] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const baseUrl = "https://onedrive.live.com/picker";
  const authority = "https://login.microsoftonline.com/consumers";
  const redirectUri = "localhost:3000"; // your web url
  const clientId = "ac17943a-98cb-48b9-8038-05031caa93cd";
  
  const scopes = ['https://graph.microsoft.com/.default'];

  const msalParams = {
    auth: {
      clientId: 'ac17943a-98cb-48b9-8038-05031caa93cd',
      authority: 'https://login.microsoftonline.com/consumers',
      redirectUri: 'localhost:3000',
    },
    cache: {
      cacheLocation: 'localStorage',
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://alcdn.msauth.net/browser/2.19.0/js/msal-browser.min.js";
    script.async = true;
    script.onload = apiLoaded;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const apiLoaded = () => {
    setApp(new PublicClientApplication(msalParams));
  };

  const params = {
    sdk: "8.0",
    entry: {
      oneDrive: {
        files: {}
      }
    },
    authentication: {},
    messaging: {
      origin: "localhost:3000",
      channelId: "27"
    },
    typesAndSources: {
      mode: "files",
      pivots: {
        oneDrive: true,
        recent: true
      }
    }
  };

  let win = null;
  let port = null;

  function combine(...paths) {
    return paths
      .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
      .join("/")
      .replace(/\\/g, "/");
  }

  async function launchPicker(e) {
    e.preventDefault();
    win = window.open("", "Picker", "height=600,width=1200");
    const authToken = await getToken();
    const queryString = new URLSearchParams({ filePicker: JSON.stringify(params) });
    const url = `${baseUrl}?${queryString}`;
    const form = win.document.createElement("form");
    form.setAttribute("action", url);
    form.setAttribute("method", "POST");
    win.document.body.append(form);
    const input = win.document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "access_token");
    input.setAttribute("value", authToken);
    form.appendChild(input);
    form.submit();
    window.addEventListener("message", (event) => {
      if (event.source && event.source === win) {
        const message = event.data;
        if (message.type === "initialize" && message.channelId === params.messaging.channelId) {
          // Handle file selection
          const files = message.value.files;
          onFileSelect(files);
        }
      }
    });
  }

  async function getToken() {
    if (!app) {
      app = new PublicClientApplication(clientId, authority);
    }
  
    try {
      const account = await app.getAccount();
      if (account) {
        const silentRequest = {
          scopes,
          account: account,
        };
        const response = await app.acquireTokenSilent(silentRequest);
        return response.accessToken;
      } else {
        const interactiveRequest = {
          scopes,
          redirectUri: 'localhost:3000',
        };
        const response = await app.acquireTokenPopup(interactiveRequest);
        return response.accessToken;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function onFileSelect(files) {
    setSelectedFiles(files);
    // Add files to your React list for download
    files.forEach((file) => {
      const fileUrl = `https://api.onedrive.com/v1.0/drive/items/${file.id}/$value`;
      fetch(fileUrl, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = file.name;
          a.click();
        });
    });
  }

  return (
    <div>
      <button onClick={(e) => launchPicker(e)}>Select files from OneDrive</button>
      <ul>
        {selectedFiles.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OneDrive