import { Box, Checkbox, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
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

  const [selectedAssociates, setSelectedAssociates] = useState({});
  const [selectedTags, setSelectedTags] = useState({});
  const [selectedPriority, setSelectedPriority] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});



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

  const handleSelectA = (associate) => {
    setSelectedAssociates((prevAssociates) => ({
      ...prevAssociates,
      [associate]: !prevAssociates[associate],
    }));
  };

  const handleSelectT = (tags) => {
    setSelectedTags((prevTags) => ({
        ...prevTags,
        [tags]: !prevTags[tags]
    }));
  };

  const handleSelectP = (priority) => {
    setSelectedPriority((prevPriority) => ({
        ...prevPriority,
        [priority]: !prevPriority[priority]
    }));
  }

  const handleSelectS = (status) => {
    setSelectedStatus((prevStatus) => ({
        ...prevStatus,
        [status]: !prevStatus[status]
    }));
  }

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

  return (
    <Box sx={{maxWidth:'314px', minWidth: '314px', maxHeight:'1080px',minHeight:'1080px', backgroundColor:'#ECF1FE',
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

                {/* <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>{activeButton === 'today'? '...' : '2'}</Typography> */}

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

            <Box sx={{width:'280px', height: '40px',display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
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

                {(activeButton === 'Associates') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> ||<ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} /> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

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
            className={activeButton === 'Tags'? 'active' : ''}
            // onClick={() => handleButtonClick('Tags')}
            onClick={handleClickT}>

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Tags</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Tags') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}


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
            className={activeButton === 'Priority'? 'active' : ''}
            // onClick={() => handleButtonClick('Priority')}
            onClick={handleClickP}
            >

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Priority</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>


                {(activeButton === 'Priority') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

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
            className={activeButton === 'Status'? 'active' : ''}
            // onClick={() => handleButtonClick('Status')}
            onClick={handleClickS}
            >

            <Box sx={{width:'80%',display:'flex',flexDirection:'row', gap:3,alignItems:'center',justifyContent:'flex-start',marginLeft:'12px'}}>
                <MenuOpenOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/>
                <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>Status</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',alignItems:'center', justifyContent:'center'}}>

                {(activeButton === 'Status') ? <MoreHorizOutlinedIcon sx={{height:'16px', width:'16px', color:'#474747'}}/> : <Typography sx={{fontSize: '14px', fontFamily:'Montserrat'}}>7</Typography>}

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
        keepMounted
        open={Boolean(anchorElA)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
            // maxWidth:'205px',
            // width:'205px',
          '& .MuiMenu-paper': {
            right: 830,
            left: 'auto !important',
          },
          
        //   position: 'absolute',
        //   top: '50%',
        //   right: 830,
        //   transform: 'translateY(-50%)',
        }}
      >
       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
    <ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} />
  </Box> */}
        {associates.map((associate) => (
          <MenuItem key={associate.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedAssociates[associate.name]}
              onChange={() => handleSelectA(associate.name)}
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
            // maxWidth:'205px',
            // width:'205px',
          '& .MuiMenu-paper': {
            right: 830,
            left: 'auto !important',
          },
          
        //   position: 'absolute',
        //   top: '50%',
        //   right: 830,
        //   transform: 'translateY(-50%)',
        }}
      >
       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
    <ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} />
  </Box> */}
        {tags.map((tags) => (
          <MenuItem key={tags.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedAssociates[tags.name]}
              onChange={() => handleSelectT(tags.name)}
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
            // maxWidth:'205px',
            // width:'205px',
          '& .MuiMenu-paper': {
            right: 830,
            left: 'auto !important',
          },
          
        //   position: 'absolute',
        //   top: '50%',
        //   right: 830,
        //   transform: 'translateY(-50%)',
        }}
      >
       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
    <ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} />
  </Box> */}
        {priority.map((priority) => (
          <MenuItem key={priority.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedAssociates[priority.name]}
              onChange={() => handleSelectP(priority.name)}
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
            // maxWidth:'205px',
            // width:'205px',
          '& .MuiMenu-paper': {
            right: 830,
            left: 'auto !important',
          },
          
        //   position: 'absolute',
        //   top: '50%',
        //   right: 830,
        //   transform: 'translateY(-50%)',
        }}
      >
       {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
    <ArrowLeftOutlinedIcon sx={{ fontSize: 20, color: '#474747' }} />
  </Box> */}
        {status.map((status) => (
          <MenuItem key={status.id}
           sx={{display:'flex', flexDirection:'row', gap:1,fontSize:'14px',fontFamily:'Montserrat'}}>
            <Checkbox
              checked={selectedAssociates[status.name]}
              onChange={() => handleSelectS(status.name)}
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

            




    </Box>
  )
}

export default LeftSideBar
