import { Box, Grid, Typography } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import Drive from './images/Drive-removebg-preview.png'
import DropBox from './images/DropBox-removebg-preview.png'
import OneDrive from './images/OneDrive-removebg-preview.png'
import Boxx from './images/Box-removebg-preview.png'
import SystemUpdateAltRoundedIcon from '@mui/icons-material/SystemUpdateAltRounded';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './File.css'


const ImageToggle = ({ imageSrc }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

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
    <Box sx={{width:'776px', margin:'auto'}}>

    <Box onClick={handleClick} style={{ cursor: 'pointer' }} sx={{fontFamily: 'Montserrat',p:5, widht: '100%', height: 'auto', backgroundColor:'#F9F9F9', border: '1px dashed #707070', borderRadius:'5px',display:'flex', flexDirection:'column', gap: 3}}>
    

      <Box  sx ={{widht: '100%', height: 'auto', display: 'flex',
          flexDirection: files.length > 0 ? 'row' : 'column',
          alignItems: files.length > 0 ? 'center' : 'center',
          justifyContent: files.length > 0 ? 'space-between' : 'center',
          gap: 4}} >
        
        <Box {...getRootProps()} sx={{display:'flex', flexDirection:'column', alignItems: files.length > 0 ? 'flex-start' : 'center', textAlign: files.length > 0 ? 'left' : 'center',justifyContent: 'center', gap: 3}}>
        <input {...getInputProps()} />
        <Box sx={{width:'182px', display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center', gap: 2, border: '1px solid #707070' ,borderRadius: '5px', fontFamily:'Montserrat' ,color:'#707070', fontSize:'12px', p:0, m: 0}}>
            <BackupOutlinedIcon/>
            <p>Upload Document</p>
        </Box>
        <Box sx={{letterspacing:'0px', color: '#6A6A6A', fontSize: '10px'}}>Click or drag file to this area to upload from local drive</Box>
        </Box>

        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent: 'center', gap: 6, marginTop:'3px'}}>

            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent: 'center', fontSize:'12px', fontWeight:'500'}}>
                <img src={Drive} alt='Google' style={{height:'50px', widht:'50px'}}/>
                <p>Google Drive</p>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent: 'center', fontSize:'12px', fontWeight:'500'}}>
                <img src={DropBox} alt='DropBox'  style={{height:'50px', widht:'50px'}}/>
                <p>Dropbox</p>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent: 'center', fontSize:'12px', fontWeight:'500'}}>
                <img src={OneDrive} alt='OneDrive'  style={{height:'50px', widht:'50px'}}/>
                <p>OneDrive</p>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent: 'center', fontSize:'12px', fontWeight:'500'}}>
                <img src={Boxx} alt='Box'  style={{height:'50px', widht:'50px'}}/>
                <p>BOX</p>
            </Box>
        </Box>

      </Box>
      {files.length > 0 && (
        <div className="attachments">
          <h3 style={{fontSize: '12px', color:'#6A6A6A', textAlign:'left'}}>Attachments</h3>
          <Grid container spacing={2}>
            {files.map((file, index) => (
              <Grid item xs={12} sm={files.length > 3 ? 6 : 12} key={index}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Box sx={{display:'flex', flexDirection:'column',  gap: 0, justifyContent:'center',alignItem:'flex-start', textAlign:'left'}}>
                    <Typography sx={{fontSize:'14px', color:'#7E84A3'}}>{file.name}</Typography>
                    <Typography sx={{fontSize:'9px', color:'#7E84A3'}}>Added on {file.uploadDate}</Typography>
                  </Box>
                  <Box onClick={() => downloadFile(file)}>
                    <CloudDownloadOutlinedIcon/>
                  </Box>
                  
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box onClick={downloadAllFiles} sx={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'flex-start',gap:2, width:'250px',mt: 1}}>
            <CloudDownloadOutlinedIcon/>
            Download All
          </Box>
        </div>
      )}
      
    </Box>
    </Box>

  );
};

export default ImageToggle;