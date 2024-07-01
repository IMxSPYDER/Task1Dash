import { Box, Button, Checkbox, Dialog, FormControl, InputLabel, ListItemText, Menu, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

function LeftSideBar() {
    const [activeButton, setActiveButton] = useState(null);
    const [anchorElA, setAnchorElA] = useState(null);
    const [anchorElT, setAnchorElT] = useState(null);
    const [anchorElP, setAnchorElP] = useState(null);
    const [anchorElS, setAnchorElS] = useState(null);


    const [roleFilter, setRoleFilter] = useState([]);
    const [open, setOpen] = useState(false);

    const handleRoleChange = (event) => {
      setRoleFilter(event.target.value);
    };

   

  const roles = ['ABC', 'LMN', 'XYZ'];


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosePop = () => {
    setOpen(false);
  };

  const [selectedAssociates, setSelectedAssociates] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);





  const handleClickA = (event) => {
    const buttonId = 'Associates'
    handleButtonClick(buttonId)
    setAnchorElA(event.currentTarget);
  };

  const handleClickT = (event)=> {
    const buttonId = 'Tags'
    handleButtonClick(buttonId)
    setAnchorElT(event.currentTarget);
  }

  const handleClickP = (event)=> {
    const buttonId = 'Priority'
    handleButtonClick(buttonId)
    setAnchorElP(event.currentTarget);
  }
  
  const handleClickS = (event)=> {
    const buttonId = 'Status'
    handleButtonClick(buttonId)
    setAnchorElS(event.currentTarget);
  }



  const handleClose = () => {
    setAnchorElA(null);
    setAnchorElT(null);
    setAnchorElP(null);
    setAnchorElS(null);

  };


  console.log(selectedAssociates)
  console.log(selectedTags)
  console.log(selectedPriority)
  console.log(selectedStatus)


  const associates = [
    { id: 1, name: 'Yogesh Jadhav' },
    { id: 2, name: 'Sneha Wani' },
    { id: 3, name: 'Manoj Jaiswal' },
  ];

  const tags = [
    {id:1 ,name: 'Tag1'},
    {id:2 ,name: 'Tag2'},
    {id:3 ,name: 'Tag3'},
    {id:4 ,name: 'Tag4'},
    {id:5 ,name: 'Tag5'}

  ];

  const priority = [
    {id:1 ,name: 'High'},
    {id:2 ,name: 'Midium'},
    {id:3 ,name: 'Low'}

  ];

  const status = [
    {id:1, name:'Active'},
    {id:2, name:'Inactive'},
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

 

  const handleCheckboxChangeA = (event, associateId) => {
    if (event.target.checked) {
      setSelectedAssociates([...selectedAssociates, associateId]);
    } else {
      setSelectedAssociates(
        selectedAssociates.filter((id) => id !== associateId),
      );
    }
  };

  
  const handleCheckboxChangeT = (event, tagsId) => {
    if (event.target.checked) {
      setSelectedTags([...selectedTags, tagsId]);
    } else {
      setSelectedTags(
        selectedTags.filter((id) => id !== tagsId),
      );
    }
  };


  
  const handleCheckboxChangeP = (event, priorityId) => {
    if (event.target.checked) {
      setSelectedPriority([...selectedPriority, priorityId]);
    } else {
      setSelectedPriority(
        selectedPriority.filter((id) => id !== priorityId),
      );
    }
  };

  
  const handleCheckboxChangeS = (event, statusId) => {
    if (event.target.checked) {
      setSelectedStatus([...selectedStatus, statusId]);
    } else {
      setSelectedStatus(
        selectedStatus.filter((id) => id !== statusId),
      );
    }
  };

  return (
    <Box sx={{maxWidth:'314px', minWidth: '314px', backgroundColor:'#ECF1FE',
    display:'flex', flexDirection:'column'}}>

        <Box sx={{display:'flex',flexDirection:'column', padding:'15px'}}>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,color:'#191919', cursor:'pointer',borderRadius:'5px',fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'today'? 'active' : ''}
            onClick={() => handleButtonClick('today')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start', marginLeft:'12px'}}>

                <CalendarTodayOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Today</Typography>

            </Box>

            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'today') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>2</Typography>}

            </Box>

                
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'next'? 'active' : ''}
            onClick={() => handleButtonClick('next')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <EventNoteOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Next 7 Days</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>


                {(activeButton === 'next') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
        backgroundColor: '#F9F9F9'
        },
        '&.active': {
        backgroundColor: '#FFFFFF',
        '& > :last-child': {
            content: '"..."'
        }
        }
    }}
            className={activeButton === 'JobQ'? 'active' : ''}
            onClick={() => handleButtonClick('JobQ')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <InboxOutlinedIcon sx={{height:'16px', width:'16px', bacolor:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Job Queue</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>


                {(activeButton === 'JobQ') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

                

            </Box>

                
            
            </Box>

        </Box>

        <Box sx={{display:'flex',flexDirection:'column', padding:'15px'}}>

            <Box onClick={handleClickOpen} sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}>
                <Typography sx={{fontSize: '12px', fontFamily:'Montserrat',color:'#9F9F9F'}}>Campaigns List</Typography>
                <AddBoxOutlinedIcon sx={{height:'16px', width:'16px', color:'#9F9F9F'}}/>

            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,color:'#191919', cursor:'pointer',borderRadius:'5px',fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'AllC'? 'active' : ''}
            onClick={() => handleButtonClick('AllC')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start', marginLeft:'12px'}}>

                <MenuOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>All Campaigns</Typography>

            </Box>

            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>


                {(activeButton === 'AllC') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'MyFC'? 'active' : ''}
            onClick={() => handleButtonClick('MyFC')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>My First Campaign</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'MyFC') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                
            
            </Box>

        </Box>

        <Box sx={{display:'flex',flexDirection:'column', padding:'15px'}}>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Typography sx={{fontSize: '12px', fontFamily:'Montserrat',color:'#9F9F9F'}}>My Space</Typography>

            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,color:'#191919', cursor:'pointer',borderRadius:'5px',fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'MyNote'? 'active' : ''}
            onClick={() => handleButtonClick('MyNote')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start', marginLeft:'12px'}}>

                <MenuOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>My Notes</Typography>

            </Box>

            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'MyNote') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                

            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'MyToDo'? 'active' : ''}
            onClick={() => handleButtonClick('MyToDo')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>My To-Do's</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'MyToDo') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                

            </Box>

        </Box>


        <Box sx={{display:'flex',flexDirection:'column', padding:'15px'}}>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Typography sx={{fontSize: '12px', fontFamily:'Montserrat',color:'#9F9F9F'}}>Filters</Typography>
                <AddBoxOutlinedIcon sx={{height:'16px', width:'16px', color:'#9F9F9F'}}/>

            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,color:'#191919', cursor:'pointer',borderRadius:'5px',fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                color: '#0058FF',
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Associates'? 'active' : ''}
            onClick={handleClickA}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start', marginLeft:'12px'}}>

                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat',}}>Associates</Typography>

            </Box>

            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Associates') ?
                <Box sx={{height:'20px',width: '20px', borderRadius:'50%', backgroundColor:'#F84F4F',color:'#ffffff', textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Typography sx={{fontSize:'14PX', fontFamily:'Montserrat'}}>{selectedAssociates.length}</Typography>
                </Box>

                 ||<ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} /> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

          
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                color: '#0058FF',
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Tags'? 'active' : ''}
            onClick={handleClickT}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Tags</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Tags') ? 
                <Box sx={{height:'20px',width: '20px', borderRadius:'50%', backgroundColor:'#F84F4F',color:'#ffffff', textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Typography sx={{fontSize:'14PX', fontFamily:'Montserrat'}}>{selectedTags.length}</Typography>
                </Box> 
                : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}


            </Box>

                
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                color: '#0058FF',
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Priority'? 'active' : ''}
            onClick={handleClickP}
            >

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Priority</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>


                {(activeButton === 'Priority') ? 
                <Box sx={{height:'20px',width: '20px', borderRadius:'50%', backgroundColor:'#F84F4F',color:'#ffffff', textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Typography sx={{fontSize:'14PX', fontFamily:'Montserrat'}}>{selectedPriority.length}</Typography>
                </Box> 
                : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                
            
            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                color: '#0058FF',
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Status'? 'active' : ''}
            onClick={handleClickS}
            >

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Status</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Status') ? 
                <Box sx={{height:'20px',width: '20px', borderRadius:'50%', backgroundColor:'#F84F4F',color:'#ffffff', textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Typography sx={{fontSize:'14PX', fontFamily:'Montserrat'}}>{selectedStatus.length}</Typography>
                </Box>  
                : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                
            
            </Box>

        </Box>

        <Box sx={{display:'flex',flexDirection:'column', padding:'15px'}}>


            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,color:'#191919', cursor:'pointer',borderRadius:'5px',fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Complated'? 'active' : ''}
            onClick={() => handleButtonClick('Complated')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start', marginLeft:'12px'}}>

                <CheckBoxOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Complated</Typography>

            </Box>

            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Complated') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                

            </Box>

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center',
            gap: 3,
            color:'#191919', cursor:'pointer',
            borderRadius:'5px',
            fontSize: '14px', fontFamily:'Montserrat',
            '&:hover': {
                backgroundColor: '#F9F9F9'
                },
                '&.active': {
                backgroundColor: '#FFFFFF',
                '& > :last-child': {
                    content: '"..."'
                }
                }
            }}
            className={activeButton === 'Trash'? 'active' : ''}
            onClick={() => handleButtonClick('Trash')}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <DeleteOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Trash</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Trash') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

            </Box>

                

            </Box>

        </Box>


        <Menu
        id="simple-menu"
        anchorElA={anchorElA}
        // keepMounted
        open={Boolean(anchorElA)}
        onClose={handleClose}
        sx={{
            left: 300,
            top:-80,
            
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 6px #00000029',
            borderRadius: '5px',
            backgroundColor: '#F9F9F9'
          },
        }}
      >
        {associates.map((associate) => (
          <MenuItem key={associate.id}
           sx={{display:'flex', flexDirection:'row', gap:1, fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedAssociates.includes(associate.id)}
              onChange={(event) => handleCheckboxChangeA(event, associate.id)}
             
            />
            <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 25, height: 25, borderRadius: '50%' }}
                />
            {associate.name}
          </MenuItem>
        ))}
      </Menu>

      <Menu
        id="simple-menu"
        anchorElT={anchorElT}
        keepMounted
        open={Boolean(anchorElT)}
        onClose={handleClose}
        sx={{
            
            width: '205px',
            left: 300,
            top: 'calc(30% + 1px)',
            position: 'absolute',
            right: 'auto !important',
            transition: 'visibility 0s linear 25ms,z-index 0s linear 25ms,opacity 334ms cubic-bezier(0,0,.2,1),25ms',
            visibility: 'visible',
            
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 6px #00000029',
            borderRadius: '5px',
          },
          
        }}
      >
        {tags.map((tags) => (
          <MenuItem key={tags.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedTags.includes(tags.id)}
              onChange={(event) => handleCheckboxChangeT(event, tags.id)}
            />
            <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 25, height: 25, borderRadius: '50%' }}
                />
            {tags.name}
          </MenuItem>
        ))}
      </Menu>


      <Menu
        id="simple-menu"
        anchorElP={anchorElP}
        keepMounted
        open={Boolean(anchorElP)}
        onClose={handleClose}
        sx={{
           
            width: '205px',
           
            left: 300,
            top: 'calc(30% + 1px)',
           
            position: 'absolute',
            right: 'auto !important',
            transition: 'visibility 0s linear 25ms,z-index 0s linear 25ms,opacity 334ms cubic-bezier(0,0,.2,1),25ms',
            visibility: 'visible',
            
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 6px #00000029',
            borderRadius: '5px',
          },
          
        
        }}
      >
     
        {priority.map((priority) => (
          <MenuItem key={priority.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedPriority.includes(priority.id)}
              onChange={(event) => handleCheckboxChangeP(event, priority.id)}
            />
            <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 25, height: 25, borderRadius: '50%' }}
                />
            {priority.name}
          </MenuItem>
        ))}
      </Menu>


      <Menu
        id="simple-menu"
        anchorElS={anchorElS}
        keepMounted
        open={Boolean(anchorElS)}
        onClose={handleClose}
       
        sx={{
        
            width: '205px',
           
            left: 300,
            top: 'calc(30% + 1px)',
           
            position: 'absolute',
            right: 'auto !important',
            transition: 'visibility 0s linear 25ms,z-index 0s linear 25ms,opacity 334ms cubic-bezier(0,0,.2,1),25ms',
            visibility: 'visible',
            
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 6px #00000029',
            borderRadius: '5px',
          },
        }}
      >
        {status.map((status) => (
          <MenuItem key={status.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedStatus.includes(status.id)}
              onChange={(event) => handleCheckboxChangeS(event, status.id)}
            />
            <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 25, height: 25, borderRadius: '50%' }}
                />
            {status.name}
          </MenuItem>
        ))}
      </Menu>


      <Dialog
      anchor="right" 
      BackdropProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        },
      }}
      sx={{
            left: 250,
            top: 'calc(10% + 1px)',
           
            position: 'absolute',
            right: 'auto !important',
            transition: 'visibility 0s linear 25ms,z-index 0s linear 25ms,opacity 334ms cubic-bezier(0,0,.2,1),25ms',
            visibility: 'visible',
          '& .MuiDialog-paper': {
            boxShadow:'none',
            minWidth:'398px', maxWidth:'398px', minHeight:'257px', maxHeight:'257px', padding:'10px 15px',display: 'flex', flexDirection:'column',gap: 2, border: '1px solid #9F9F9F', borderRadius:'5px', alignItems:'center',justifyContent:'center'
          },}}
       open={open} onClose={handleClosePop}>
        
        <FormControl size='samll' sx={{width:'345px',display: 'flex', flexDirection:'column',gap: 2, 
          boxShadow: 'none', borderRadius:'5px'}}>
          <Box sx={{display:'flex', flexDirection:'column', gap: '11px'}}>
          <Typography sx={{fontSize: '14px', fontFamily:'Montserrat', color:'#474747'}}> Campaign / Project Name </Typography>
          <Box sx={{backgroundColor: '#F3F3F3',
                    opacity: '100%',
                    padding:1}}>
          <input
                  placeholder='Type Campaign Name'
                  style={{
                    width: '100%',
                    
                    outline: 0,
                    border: 'none',
                    backgroundColor: '#F3F3F3',
                    textAlign: 'left',
                    fontSize: 14,
                    color: '#474747',
                    padding: '0px',
                    fontFamily:'Montserrat'
                  }}
                  
                />
          </Box>
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', gap: '11px'}}>
          
          <Typography sx={{fontSize: '14px', fontFamily:'Montserrat', color:'#474747'}}>Client / Company</Typography>
          <FormControl sx={{height: '40px', }} size="small">
                <InputLabel sx={{fontFamily: 'Montserrat',fontSize: "14px", textAlign:"left" , color: "#474747"}}>Select Company (Internal by default)</InputLabel>
                <Select
                  sx={{borderRadius: '5px', backgroundColor: "#F3F3F3", height: '40px'}}
                  multiple
                  value={roleFilter}
                  onChange={handleRoleChange}
                  input={<OutlinedInput label="Select Company (Internal by default)" />}
                  renderValue={(selected) => selected.join(', ')}
               
                >
                  {roles.map((role) => (
                    <MenuItem sx={{padding:"3px"}} key={role} value={role}>
                      <Checkbox checked={roleFilter.indexOf(role) > -1} />
                      <ListItemText primary={role} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>
              <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Button onClick={handleClosePop} variant="contained" sx={{backgroundColor: "#0058FF", width: '68px',height: '34px'}}>
                  Add
                </Button>
                <Button onClick={handleClosePop} color="primary">
                  Cancel
                </Button>
              </Box>

        </FormControl>

        
      </Dialog>

  
    </Box>
  )
}

export default LeftSideBar
