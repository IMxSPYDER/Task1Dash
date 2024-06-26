import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Box, Button, Checkbox, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
// const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     menu: {
//       marginTop: theme.spacing(2),
//     },
//   }));
  
  const AssociatesFilter = () => {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          aria-controls="associate-menu"
          aria-haspopup="true"
          onClick={handleClick}
        //   className={classes.button}
        >
          Associates
        </Button>
        <Menu
          id="associate-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        //   className={classes.menu}
        >
          <MenuItem onClick={handleClose}>Yogesh Jadhav</MenuItem>
          <MenuItem onClick={handleClose}>Sneha Wani</MenuItem>
          <MenuItem onClick={handleClose}>Manoj Jaiswal</MenuItem>
        </Menu>
      </div>
    );
  }
  
  export default AssociatesFilter;