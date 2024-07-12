import { Box, Button, Grid, Popover, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import Drive from "./images/Drive-removebg-preview.png";
import DropBox from "./images/DropBox-removebg-preview.png";
import OneDrive from "./images/OneDrive-removebg-preview.png";
import Boxx from "./images/Box-removebg-preview.png";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import DropboxChooser from "react-dropbox-chooser";
import pdfIcon from './images/PDFicon.png'
import wordIcon from './images/WordIcon.png' 
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const APP_KEY_DROPBOX = "z3ns9zvjpdn136u";




const NewUploadFile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          uploadDate: new Date().toLocaleDateString(),
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  function handleSuccess(files) {
    setFiles(files);
    console.log(files);
  }

  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.href = file.preview;
    link.setAttribute("download", file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllFiles = () => {
    const zip = new JSZip();
    files.forEach((file) => {
      zip.file(
        file.name,
        fetch(file.preview).then((res) => res.blob())
      );
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "attachments.zip");
    });
  };


  const renderFilePreview = (file) => {
    const fileType = file.type;
    
    if (fileType.startsWith('image/')) {
      return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={file.preview} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <VisibilityOutlinedIcon
            onClick={() => viewFile(file)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate( -150%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
          <DeleteOutlineOutlinedIcon
            onClick={() => removeFile(file.name)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(50%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
        </Box>
      );
    } else if (fileType === 'application/pdf') {
      return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={pdfIcon} alt="PDF Icon" style={{ width: '100%', height: '100%' }} />
          <VisibilityOutlinedIcon
            onClick={() => viewFile(file)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate( -150%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
          <DeleteOutlineOutlinedIcon
            onClick={() => removeFile(file.name)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(50%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
        </Box>
      );
    } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={wordIcon} alt="Word Icon" style={{ width: '100%', height: '100%' }} />
          <VisibilityOutlinedIcon
            onClick={() => viewFile(file)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate( -150%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
          <DeleteOutlineOutlinedIcon
            onClick={() => removeFile(file.name)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(50%, -50%)',
              height: '15px',
              width: '15px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}
          />
        </Box>
      );
    } else {
      return <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {file.name}
      <VisibilityOutlinedIcon
        onClick={() => viewFile(file)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate( -150%, -50%)',
          height: '15px',
          width: '15px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '50%',
          padding: '5px',
          cursor: 'pointer'
        }}
      />
      <DeleteOutlineOutlinedIcon
        onClick={() => removeFile(file.name)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(50%, -50%)',
          height: '15px',
          width: '15px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '50%',
          padding: '5px',
          cursor: 'pointer'
        }}
      />
    </Box>; // Fallback for other file types
    }
  };

  const viewFile = (file) => {
    // Implement view logic here
    window.open(file.preview, '_blank');
  };

  const truncateFileName = (name) => {
    if (name.length > 18) {
      return name.substring(0, 10) + '...';
    }
    return name;
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpenPopUP = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickClosePopUP = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'upload-document-popup' : undefined;




  return (
    <Box sx={{ width: "776px", margin: "auto" }}>
    <Box>
    {
        files.length > 0 && (
          <div className="attachments" sty>
            <h3
              style={{ fontSize: "15px", color: "#191919", textAlign: "left" }}
            >
              Attachments
            </h3>
        </div>

    )}
      <Box
        onClick={handleClick}
        // style={{ cursor: "pointer" }}
        sx={{
          fontFamily: "Montserrat",
          p: 5,
          widht: "100%",
          height: "auto",
          backgroundColor: "#F9F9F9",
          border: "1px solid #EDEDED",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >

      {
        files.length > 0 ? (
            <Box sx={{
                display:'flex',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between',
                gap:4
            }}>
            <Box
              onClick={downloadAllFiles}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 2,
                width: "250px",
                mt: 1,
                cursor: "pointer"
              }}
            >
              <CloudDownloadOutlinedIcon />
              Download All
            </Box>

            <Box
              sx={{
                width: "182px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                border: "1px dashed #707070",
                borderRadius: "5px",
                fontFamily: "Montserrat",
                color: "#707070",
                fontSize: "12px",
                cursor: "pointer",
                p: 0,
                m: 0,
              }}
              onClick={handleClickOpenPopUP}
            >
              <BackupOutlinedIcon />
              <p>Upload Document</p>
            </Box>

            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClickClosePopUP}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', paddingTop: 2,paddingLeft: 3, paddingRight: 3, paddingBottom: 2}}>
            <Box
            {...getRootProps()}
            onClose={handleClickClosePopUP}

             sx={{
                width: '100%',
                backgroundColor:'#ECF1FE',
                borderRadius: '5px',
                textAlign:'center',
                color: '#131523',
                fontSize: '12px',
                padding: '11px',
                cursor:'pointer'
            }}>
            <input {...getInputProps()} />
            <Typography>
                Upload media from System
            </Typography>

                
            </Box>
          <p>Or</p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              marginTop: "3px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={Drive}
                alt="Google"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>Google Drive</p>
            </Box>

            <DropboxChooser
              appKey={APP_KEY_DROPBOX}
              success={handleSuccess}
              cancel={() => console.log("Cancel")}
              multiselect={true}
              extensions={[
                ".mp4",
                ".pdf",
                ".doc",
                ".docx",
                ".txt",
                ".jpg",
                ".png",
              ]}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                <img
                  src={DropBox}
                  alt="DropBox"
                  style={{ height: "50px", widht: "50px" }}
                />
                <p>Dropbox</p>
              </Box>
            </DropboxChooser>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={OneDrive}
                alt="OneDrive"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>OneDrive</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={Boxx}
                alt="Box"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>BOX</p>
            </Box>
          </Box>
        </Box>
      </Popover>




        </Box>
        ) : (
            <Box
          sx={{
            widht: "100%",
            height: "auto",
            display: "flex",
            flexDirection: files.length > 0 ? "row" : "column",
            alignItems: files.length > 0 ? "center" : "center",
            justifyContent: files.length > 0 ? "space-between" : "center",
            gap: 4,
          }}
        >
          <Box
            {...getRootProps()}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: files.length > 0 ? "flex-start" : "center",
              textAlign: files.length > 0 ? "left" : "center",
              justifyContent: "center",
              gap: 3,
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            <Box
              sx={{
                width: "182px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                border: "1px dashed #707070",
                borderRadius: "5px",
                fontFamily: "Montserrat",
                color: "#707070",
                fontSize: "12px",
                p: 0,
                m: 0,
              }}
            >
              <BackupOutlinedIcon />
              <p>Upload Document</p>
            </Box>
            <Box
              sx={{ letterspacing: "0px", color: "#6A6A6A", fontSize: "10px" }}
            >
              Click or drag file to this area to upload from local drive
            </Box>
          </Box>




          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              marginTop: "3px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={Drive}
                alt="Google"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>Google Drive</p>
            </Box>

            <DropboxChooser
              appKey={APP_KEY_DROPBOX}
              success={handleSuccess}
              cancel={() => console.log("Cancel")}
              multiselect={true}
              extensions={[
                ".mp4",
                ".pdf",
                ".doc",
                ".docx",
                ".txt",
                ".jpg",
                ".png",
              ]}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                <img
                  src={DropBox}
                  alt="DropBox"
                  style={{ height: "50px", widht: "50px" }}
                />
                <p>Dropbox</p>
              </Box>
            </DropboxChooser>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={OneDrive}
                alt="OneDrive"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>OneDrive</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <img
                src={Boxx}
                alt="Box"
                style={{ height: "50px", widht: "50px" }}
              />
              <p>BOX</p>
            </Box>
          </Box>
        </Box>
        )
      }
        


        {files.length > 0 && (
          <div className="attachments">
            {/* <h3
              style={{ fontSize: "12px", color: "#6A6A6A", textAlign: "left" }}
            >
              Attachments
            </h3> */}
            <Box sx={{display:'flex', flexWrap:'wrap', gap:2}}>
              {files.map((file, index) => (
                <Box sx={{
                    maxWidth: '100px',
                    minWidth: '100px',
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent:'left',
                    gap: 2
                }}>
                <Box sx={{
                    width: '100%',
                    height: '98px',
                    alignItems: "center",
                    border: '1px solid #707070',
                    borderRadius: '5px'
                }}>
                    {renderFilePreview(file)}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'left',
                    justifyContent: 'left',
                    textAlign: 'left'
                }}>
                    <Typography sx={{ fontSize: "10px", color: "#131523" }}>
                        {truncateFileName(file.name)}
                      </Typography>
                      <Typography sx={{ fontSize: "9px", color: "#7E84A3" }}>
                        Added on <br></br> {file.uploadDate}
                      </Typography>
                      <Box sx={{cursor: "pointer",display:'flex',flexDirection:"row",alignItems:"center",justifyContent:'space-between'}} onClick={() => downloadFile(file)}>
                      
                      <Typography sx={{ fontSize: "10px", color: "#131523" }}>
                        Download
                      </Typography>
                      <CloudDownloadOutlinedIcon />
                    </Box>


                </Box>
                </Box>
              ))}
            </Box>
            
          </div>
        )}
      </Box>
      </Box>
    </Box>
  );
};

export default NewUploadFile;
