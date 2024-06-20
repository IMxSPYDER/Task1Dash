// src/UserProfile.js
import React, { useState } from 'react';
import { Avatar, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Box } from '@mui/system';

const User = () => {
  const initialUserState = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    designation: '',
    status: '',
    addedOn: ''
  };

  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [user, setUser] = useState({
    firstName: 'Manoj',
    lastName: 'Jaiswal',
    email: 'Hollojm007@gmail.com',
    role: 'Manager',
    designation: 'Designer',
    status: 'Active',
    addedOn: '20th May 2024'
  });

  const [newUser, setNewUser] = useState(initialUserState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveNewUser = () => {
    // Assuming you have a function to save new user data to your backend
    // saveNewUser(newUser);
    setUser(newUser);
    setNewUser(initialUserState);
    setAddMode(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 5, p: 3, boxShadow: 3 }}>
      <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} src="https://via.placeholder.com/80" alt="Manoj Jaiswal" />
      <Typography variant="h6" align="center" gutterBottom>{addMode ? "Add New User" : "Manoj Jaiswal"}</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>ID: {addMode ? "New" : "IN007"}</Typography>

      {editMode || addMode ? (
        <>
          <TextField
            label="First Name"
            name="firstName"
            value={addMode ? newUser.firstName : user.firstName}
            onChange={addMode ? handleNewChange : handleChange}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#f0f0f0' }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={addMode ? newUser.lastName : user.lastName}
            onChange={addMode ? handleNewChange : handleChange}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#f0f0f0' }}
          />
          <TextField
            label="Email ID"
            name="email"
            value={addMode ? newUser.email : user.email}
            onChange={addMode ? handleNewChange : handleChange}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#f0f0f0' }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={addMode ? newUser.role : user.role}
              onChange={addMode ? handleNewChange : handleChange}
              sx={{ backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Designation</InputLabel>
            <Select
              name="designation"
              value={addMode ? newUser.designation : user.designation}
              onChange={addMode ? handleNewChange : handleChange}
              sx={{ backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value="Designer">Designer</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Tester">Tester</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={addMode ? newUser.status : user.status}
              onChange={addMode ? handleNewChange : handleChange}
              sx={{ backgroundColor: '#f0f0f0' }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addMode ? handleSaveNewUser : () => setEditMode(false)}
            sx={{ mt: 2 }}
          >
            Save
          </Button>
          <Button
            variant="text"
            fullWidth
            onClick={() => {
              setEditMode(false);
              setAddMode(false);
            }}
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1"><strong>First Name:</strong> {user.firstName}</Typography>
          <Typography variant="body1"><strong>Last Name:</strong> {user.lastName}</Typography>
          <Typography variant="body1"><strong>Email ID:</strong> {user.email}</Typography>
          <Typography variant="body1"><strong>Role:</strong> {user.role}</Typography>
          <Typography variant="body1"><strong>Designation:</strong> {user.designation}</Typography>
          <Typography variant="body1"><strong>Status:</strong> {user.status}</Typography>
          <Typography variant="body1"><strong>Added on:</strong> {user.addedOn}</Typography>
          <Button variant="outlined" fullWidth onClick={() => setEditMode(true)}>Edit</Button>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => setAddMode(true)}>Add New</Button>
        </>
      )}
    </Box>
  );
};

export default User;
