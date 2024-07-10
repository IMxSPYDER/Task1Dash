import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './File.css'; // Ensure you have this CSS file for styling

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
        uploadDate: new Date().toLocaleDateString()
      }))
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = fileName => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const downloadFile = file => {
    const link = document.createElement('a');
    link.href = file.preview;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`file-upload-container ${files.length > 0 ? 'row' : ''}`}>
      <div {...getRootProps()} className={`dropzone ${files.length > 0 ? 'small' : ''}`}>
        <input {...getInputProps()} />
        <button className="upload-button">Upload Document</button>
        <p>Click or drag file to this area to upload from local drive</p>
        <div className="cloud-services">
          <img src="path/to/google-drive.png" alt="Google Drive" />
          <img src="path/to/dropbox.png" alt="Dropbox" />
          <img src="path/to/onedrive.png" alt="OneDrive" />
          <img src="path/to/box.png" alt="Box" />
        </div>
      </div>
      {files.length > 0 && (
        <div className="attachments">
          <h3>Attachments</h3>
          <ul className={`attachments-list ${files.length > 3 ? 'two-columns' : ''}`}>
            {files.map(file => (
              <li key={file.name}>
                <span>{file.name}</span>
                <span>Added on {file.uploadDate}</span>
                <button onClick={() => downloadFile(file)}>Download</button>
                <button onClick={() => removeFile(file.name)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
