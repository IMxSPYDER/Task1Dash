import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import Drive from './images/Drive-removebg-preview.png'
import DropBox from './images/DropBox-removebg-preview.png'
import OneDrive from './images/OneDrive-removebg-preview.png'
import Boxx from './images/Box-removebg-preview.png'

import {useDropzone} from 'react-dropzone'

const ImageToggle = ({ imageSrc }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Box onClick={handleClick} style={{ cursor: 'pointer' }} sx={{fontFamily: 'Montserrat'}}>
        
      {isActive? 

      <img src={imageSrc} alt="Active Image" /> : 

      <Box sx ={{mx: 3,p: 5, widht: '100%', height: 'auto', backgroundColor:'#F9F9F9', border: '1px dashed #707070', borderRadius:'5px',display:'flex', flexDirection:'column', alignItems:'center',justifyContent: 'center', gap: 3}}>
        <Box sx={{width:'182px', display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center', gap: 2, border: '1px solid #707070' ,borderRadius: '5px', fontFamily:'Montserrat' ,color:'#707070', fontSize:'12px', p:0, m: 0}}>
            <BackupOutlinedIcon/>
            <p>Upload Document</p>
        </Box>
        <Box sx={{letterspacing:'0px', color: '#6A6A6A', fontSize: '10px'}}>Click or drag file to this area to upload from local drive</Box>

        <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent: 'center', gap: 8, marginTop:'3px'}}>

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
      }
    </Box>
  );
};

export default ImageToggle;



// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Typography,
//   Grid,
//   Box,
//   IconButton,
//   Tooltip,
//   Avatar,
// } from "@mui/material";
// import {
//   CloudUploadOutlined,
//   DownloadOutlined,
//   FileCopyOutlined,
//   Google,
// //   Dropbox,
// //   OneDrive,
// } from "@mui/icons-material";

// const UploadDocument = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       setUploadedFiles([...uploadedFiles, selectedFile]);
//       setSelectedFile(null);
//     }
//   };

//   const handleGoogleDriveUpload = () => {
//     // Implement logic to upload file from Google Drive
//     console.log("Uploading from Google Drive");
//   };

//   const handleDropboxUpload = () => {
//     // Implement logic to upload file from Dropbox
//     console.log("Uploading from Dropbox");
//   };

//   const handleOneDriveUpload = () => {
//     // Implement logic to upload file from OneDrive
//     console.log("Uploading from OneDrive");
//   };

//   const handleDownloadAll = () => {
//     // Implement logic to download all uploaded files
//     console.log("Downloading all files");
//   };

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         Upload Document
//       </Typography>
//       {selectedFile ? (
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12}>
//             <TextField
//               label="File Name"
//               value={selectedFile.name}
//               disabled
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<CloudUploadOutlined />}
//             >
//               Upload
//               <input
//                 type="file"
//                 hidden
//                 onChange={handleFileChange}
//               />
//             </Button>
//             <Button variant="contained" onClick={handleFileUpload}>
//               Confirm
//             </Button>
//           </Grid>
//         </Grid>
//       ) : (
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<CloudUploadOutlined />}
//             >
//               Choose File
//               <input
//                 type="file"
//                 hidden
//                 onChange={handleFileChange}
//               />
//             </Button>
//           </Grid>
//           <Grid item xs={12}>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item>
//                 <IconButton
//                   aria-label="upload from Google Drive"
//                   onClick={handleGoogleDriveUpload}
//                 >
//                   <Google />
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <IconButton
//                   aria-label="upload from Dropbox"
//                   onClick={handleDropboxUpload}
//                 >
//                   {/* <Dropbox /> */}
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <IconButton
//                   aria-label="upload from OneDrive"
//                   onClick={handleOneDriveUpload}
//                 >
//                   {/* <OneDrive /> */}
//                 </IconButton>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       )}
//       <Typography variant="h6" gutterBottom>
//         Attachments
//       </Typography>
//       <Grid container spacing={2}>
//         {uploadedFiles.map((file, index) => (
//           <Grid item xs={12} key={index}>
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Box display="flex" alignItems="center">
//                 <Avatar sx={{ mr: 1 }}>
//                   {file.type.startsWith("image") ? (
//                     <FileCopyOutlined />
//                   ) : (
//                     <FileCopyOutlined />
//                   )}
//                 </Avatar>
//                 <Typography variant="body1">{file.name}</Typography>
//               </Box>
//               <Box>
//                 <Tooltip title="Download">
//                   <IconButton aria-label="download">
//                     <DownloadOutlined />
//                   </IconButton>
//                 </Tooltip>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleDownloadAll}
//         fullWidth
//       >
//         Download All
//       </Button>
//     </div>
//   );
// };

// export default UploadDocument;