import React, { useState } from 'react';
import { Button, Typography, TextField, Select, MenuItem, Grid } from '@mui/material';


const CampaignsList = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className="campaigns-list">
          <h2>Campaigns List</h2>
          <ul>
            <li>All Campaigns</li>
            <li>My First Campaign</li>
          </ul>
          <div>My Space</div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            style={{
              position: 'elative',
            }}
          >
            +
            <span
              style={{
                content: '',
                position: 'absolute',
                top: '100%',
                right: 0,
                width: 1,
                height: 1,
                backgroundColor: 'transparent',
              }}
            />
          </Button>
          {open && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                transform: 'translate(50px, 100%)',
                backgroundColor: 'white',
                padding: 16,
                border: '1px solid #ddd',
                borderRadius: 4,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                zIndex: 1,
              }}
            >
              <Typography variant="h2">Campaign/Project Name</Typography>
              <TextField label="Type Campaign Name" />
              <Typography variant="h2">Client/Company</Typography>
              <Select label="Select Company">
                <MenuItem value="Internal">Internal</MenuItem>
              </Select>
              <Button variant="contained" color="primary" type="submit">
                Add
              </Button>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default CampaignsList;