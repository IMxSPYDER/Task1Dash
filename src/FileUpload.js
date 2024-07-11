import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Grid
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const downloadAllFiles = () => {
    const zip = new JSZip();
    files.forEach(file => {
      zip.file(file.name, fetch(file.preview).then(res => res.blob()));
    });

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'attachments.zip');
    });
  };

  return (
    <Box sx={{ border: '2px dashed #ccc', p: 2, textAlign: 'center' }}>
      <Box
        {...getRootProps()}
        sx={{
          cursor: 'pointer',
          mb: 2,
          display: files.length > 0 ? 'flex' : 'block',
          flexDirection: files.length > 0 ? 'row' : 'column',
          alignItems: files.length > 0 ? 'center' : 'flex-start',
          justifyContent: files.length > 0 ? 'space-between' : 'center',
        }}
      >
        <input {...getInputProps()} />
        <Box sx={{ mb: files.length > 0 ? 0 : 2 }}>
          <Button variant="contained" component="span">
            Upload Document
          </Button>
          <Typography variant="body1">
            Click or drag file to this area to upload from local drive
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img src="path/to/google-drive.png" alt="Google Drive" style={{ width: 40, margin: '0 10px' }} />
          <img src="path/to/dropbox.png" alt="Dropbox" style={{ width: 40, margin: '0 10px' }} />
          <img src="path/to/onedrive.png" alt="OneDrive" style={{ width: 40, margin: '0 10px' }} />
          <img src="path/to/box.png" alt="Box" style={{ width: 40, margin: '0 10px' }} />
        </Box>
      </Box>
      {files.length > 0 && (
        <Box>
          <Typography>Attachments</Typography>
          <Grid container spacing={2}>
            {files.map((file, index) => (
              <Grid item xs={12} sm={files.length > 3 ? 6 : 12} key={index}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Box>
                    <Typography variant="body1">{file.name}</Typography>
                    <Typography variant="body2">Added on {file.uploadDate}</Typography>
                  </Box>
                  <Box>
                    <IconButton onClick={() => downloadFile(file)}>
                      <CloudDownloadIcon />
                    </IconButton>
                    <IconButton onClick={() => removeFile(file.name)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={downloadAllFiles}
            sx={{ mt: 2 }}
          >
            Download All
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
