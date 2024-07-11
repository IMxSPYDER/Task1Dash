import React, {useEffect, useState} from "react";
import { PublicClientApplication, acquireTokenSilent, InteractionType } from '@azure/msal-browser';
import { MsalProvider, MsalAuthenticationTemplate, useMsal, } from '@azure/msal-react';

// export const OneDrive = (props) => {
//      const [app, setApp] = useState(null);

//     const baseUrl = "https://onedrive.live.com/picker";
//     // const authority = "https://login.microsoftonline.com/consumers";
//     // const redirectUri = "localhost:3000" ; // your web url
//     // const clientId = "<your-client-id>;"; //your app id

//     const msalConfig = {
//     auth: {
//       clientId: 'ee29132d-63b2-4c05-9f9b-ab17bf0a582b',
//       authority: 'https://login.microsoftonline.com/d1f14348-f1b5-4a09-ac99-7ebf213cbc81',
//     //   redirectUri: 'http://localhost:3000', // Adjust as needed
//       multiSelect: true, // Set to true if you want to allow multiple file selection
//       advanced: {
//         redirectUri: 'http://localhost:3000', // Replace with your redirect URI
//       },
//       success: (files) => {
//         console.log('Files picked:', files);
//       },
//       cancel: () => {
//         console.log('User canceled the picker.');
//       },
//       error: (error) => {
//         console.error('Error:', error);
//       },
//     },

//     cache: {
//       cacheLocation: "localStorage",
//       storeAuthStateInCookie: false
//     }
//   };

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://alcdn.msauth.net/browser/2.19.0/js/msal-browser.min.js";
//         script.async = true;
//         script.onload = apiLoaded;
//         document.body.appendChild(script);
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//      const apiLoaded = () => {
//         setApp(new PublicClientApplication(msalConfig));
//     };

//     const uploadFiles = (commandData) => {
        
//         let data = commandData.items[0];
//         let tokenObj = getToken();
      
//         let url = `${data["@sharePoint.endpoint"]}drives/${data.parentReference.driveId}/items/${data.id}`;
      
//         tokenObj.then(token => {
//             const headers = {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-Type": "image/jpeg"
//             };
//             fetch(url, {
//                 method: "GET",
//                 headers
//             }).then(response => {
//                 const reader = response.body.getReader();
//                 const decoder = new TextDecoder("utf-8");
//                 let chunk = "";
//                 return reader.read().then(function processResult(result) {
//                     if (result.done) {
//                         return JSON.parse(chunk);
//                     }
//                     chunk += decoder.decode(result.value, {stream: true});
//                     return reader.read().then(processResult);
//                 });
//             }).then(data => {
//                 processSelectedFile(data);
//             }).catch(err => {
//                 console.log(" some error occured ",err);
//             });
//         });
       
//     };

//     const processSelectedFile = (fileObj) => {
//         let link = fileObj["@content.downloadUrl"];
//     };

//  const params = {
//         sdk: "8.0",
//         entry: {
//             oneDrive: {
//                 files: {}
//             }
//         },
//         authentication: {},
//         messaging: {
//             origin: "localhost:3000",
//             channelId: "27"
//         },
//         typesAndSources: {
//             mode: "files",
//             pivots: {
//                 oneDrive: true,
//                 recent: true
//             }
//         }
//     };

//     let win = null;
//     let port = null;

//     function combine(...paths) {
//         return paths
//             .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
//             .join("/")
//             .replace(/\\/g, "/");
//     }

//     async function launchPicker(e) {

//         e.preventDefault();

//         win = window.open("", "Picker", "height=600,width=600");

//         const authToken = await getToken();

//         const queryString = new URLSearchParams({
//             filePicker: JSON.stringify(params)
//         });

//         const url = `${baseUrl}?${queryString}`;  
//         console.log(url)   

//         const form = win.document.createElement("form");
//         console.log(form)
//         form.setAttribute("action", url);
//         form.setAttribute("method", "POST");
//         win.document.body.append(form);

//         const input = win.document.createElement("input");
//         console.log(input)

//         input.setAttribute("type", "hidden");
//         input.setAttribute("name", "access_token");
//         input.setAttribute("value", authToken);

//         form.appendChild(input);

//         form.submit();
//         console.log(form.submit())
//         console.log('nahi hoat')
//         console.log(e)

//         window.addEventListener("message", (event) => {
//             console.log('Hi')

//             if (event.source && event.source === win) {

//                 const message = event.data;

//                 if (message.type === "initialize" && message.channelId === params.messaging.channelId) {

//                     port = event.ports[0];

//                     port.addEventListener("message", messageListener);

//                     port.start();

//                     port.postMessage({
//                         type: "activate"
//                     });
//                 }
//             }
//         });
//     }
    
//    async function messageListener(message) {
//         switch (message.data.type) {

//             case "notification":
//                 console.log(`notification: ${message.data}`);
//                 break;

//             case "command":

//                 port.postMessage({
//                     type: "acknowledge",
//                     id: message.data.id
//                 });

//                 const command = message.data.data;

//                 switch (command.command) {

//                     case "authenticate":

//                         // getToken is from scripts/auth.js
//                         const token = await getToken();

//                         if (typeof token !== "undefined" && token !== null) {

//                             port.postMessage({
//                                 type: "result",
//                                 id: message.data.id,
//                                 data: {
//                                     result: "token",
//                                     token
//                                 }
//                             });

//                         } else {
//                             console.error(`Could not get auth token for command: ${JSON.stringify(command)}`);
//                         }

//                         break;

//                     case "close":

//                         win.close();
//                         break;

//                     case "pick":

     
//                         uploadFiles(command);

//                         port.postMessage({
//                             type: "result",
//                             id: message.data.id,
//                             data: {
//                                 result: "success"
//                             }
//                         });

//                         win.close();

//                         break;

//                     default:

//                         console.warn(`Unsupported command: ${JSON.stringify(command)}`, 2);

//                         port.postMessage({
//                             result: "error",
//                             error: {
//                                 code: "unsupportedCommand",
//                                 message: command.command
//                             },
//                             isExpected: true
//                         });
//                         break;
//                 }

//                 break;
//         }
//     }

//   async function getToken() {
//         let accessToken = "";

//         let authParams = { scopes: ["OneDrive.ReadWrite"] };
    
//         try {
    
//             // see if we have already the idtoken saved
//             const resp = await app.acquireTokenSilent(authParams);
//             accessToken = resp.accessToken;
    
//         } catch (e) {
    
//             // per examples we fall back to popup
            
//             // const resp = await app.loginPopup(authParams);
//             // app.setActiveAccount(resp.account);
    
//             // if (resp.idToken) {
    
//             //     const resp2 = await app.acquireTokenSilent(authParams);
//             //     accessToken = resp2.accessToken;
    
//             // }
//         }
    
//         return accessToken;
//     }
//     return (
//         <span id="original-tab-id">
           
//             <button onClick={(e) => {
//                 launchPicker(e); 
//             }}>One drive</button>
//         </span>
//     ); 
// };

export const OneDrive = () => {
    const [app, setApp] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const baseUrl = "https://onedrive.live.com/picker";
    const msalConfig = {
        auth: {
            clientId: 'ee29132d-63b2-4c05-9f9b-ab17bf0a582b',
            authority: 'https://login.microsoftonline.com/d1f14348-f1b5-4a09-ac99-7ebf213cbc81',
            multiSelect: true,
            advanced: {
                redirectUri: 'http://localhost:3000',
            },
            success: (files) => console.log('Files picked:', files),
            cancel: () => console.log('User canceled the picker.'),
            error: (error) => console.error('Error:', error),
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: false
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

    const apiLoaded = () => setApp(new PublicClientApplication(msalConfig));

    const uploadFiles = (commandData) => {
        let data = commandData.items[0];
        let tokenObj = getToken();
        let url = `${data["@sharePoint.endpoint"]}drives/${data.parentReference.driveId}/items/${data.id}`;

        tokenObj.then(token => {
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "image/jpeg"
            };
            fetch(url, { method: "GET", headers })
                .then(response => response.body.getReader().read())
                .then(result => new TextDecoder("utf-8").decode(result.value))
                .then(chunk => processSelectedFile(JSON.parse(chunk)))
                .catch(err => console.log(" some error occured ", err));
        });
    };

    const processSelectedFile = (fileObj) => {
        let link = fileObj["@content.downloadUrl"];
        setSelectedFiles(prevFiles => [...prevFiles, { name: fileObj.name, link }]);
    };

    const params = {
        sdk: "8.0",
        entry: { oneDrive: { files: {} } },
        authentication: {},
        messaging: { origin: "localhost:3000", channelId: "27" },
        typesAndSources: { mode: "files", pivots: { oneDrive: true, recent: true } }
    };

    let win = null;
    let port = null;

    async function launchPicker(e) {
        e.preventDefault();

        const authToken = await getToken();
        const queryString = new URLSearchParams({ filePicker: JSON.stringify(params) });
        const url = `${baseUrl}?${queryString}`;
        win = window.open(url, "Picker", "height=600,width=600");

        window.addEventListener("message", (event) => {
            if (event.origin === "https://onedrive.live.com") {
                const message = event.data;
                if (message.type === "initialize" && message.channelId === params.messaging.channelId) {
                    port = event.ports[0];
                    port.addEventListener("message", messageListener);
                    port.start();
                    port.postMessage({ type: "activate" });
                    port.postMessage({ type: "authenticate", token: authToken });
                }
            }
        });
    }

    async function messageListener(message) {
        switch (message.data.type) {
            case "notification":
                console.log(`notification: ${message.data}`);
                break;

            case "command":
                port.postMessage({ type: "acknowledge", id: message.data.id });
                const command = message.data.data;

                switch (command.command) {
                    case "authenticate":
                        const token = await getToken();
                        if (token) {
                            port.postMessage({ type: "result", id: message.data.id, data: { result: "token", token } });
                        } else {
                            console.error(`Could not get auth token for command: ${JSON.stringify(command)}`);
                        }
                        break;

                    case "close":
                        win.close();
                        break;

                    case "pick":
                        uploadFiles(command);
                        port.postMessage({ type: "result", id: message.data.id, data: { result: "success" } });
                        win.close();
                        break;

                    default:
                        console.warn(`Unsupported command: ${JSON.stringify(command)}`, 2);
                        port.postMessage({
                            result: "error",
                            error: { code: "unsupportedCommand", message: command.command },
                            isExpected: true
                        });
                        break;
                }
                break;
        }
    }

    async function getToken() {
        let accessToken = "";
        let authParams = { scopes: ["OneDrive.ReadWrite"] };

        try {
            const resp = await app.acquireTokenSilent(authParams);
            accessToken = resp.accessToken;
        } catch (e) {
            console.error(e);
        }

        return accessToken;
    }

    return (
        <div>
            <span id="original-tab-id">
                <button onClick={launchPicker}>One drive</button>
            </span>
            <ul>
                {selectedFiles.map((file, index) => (
                    <li key={index}>
                        <a href={file.link} target="_blank" rel="noopener noreferrer">{file.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OneDrive;