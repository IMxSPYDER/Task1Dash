import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roles = ['Manager', 'Developer', 'Designer'];
const designations = ['Designer', 'Developer', 'Tester'];
const statuses = ['Active', 'Inactive'];

const names = [
  'Designer',
  'Artist',
  'Team Lead',
  'Manger',
];

const tableData = [
  {
    id: 1,
    name: 'Manoj Jaiswal',
    email: 'Hellomj007@gmail.com',
    role: 'Developer',
    designation: 'Tester',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Yogesh Jadhav',
    email: 'Jyogesh19@gmail.com',
    role: 'Manager',
    designation: 'Designer',
    status: 'Inactive',
  },
];

function MyTeam() {
  const [selectedRow, setSelectedRow] = useState(null);
  // const [personName, setPersonName] = useState([]);

  const [roleFilter, setRoleFilter] = useState([]);
  const [designationFilter, setDesignationFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editRowData, setEditRowData] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    designation: '',
    status: '',
  });


  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setDesignationFilter(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleEditClick = (row) => {
    setEditRowData(row);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditDialogSave = () => {
    // Here you would save the changes to your data store
    // For simplicity, this example just closes the dialog
    setEditDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(typeof value === 'string' ? value.split(',') : value);
  // };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const filteredData = tableData.filter((row) => {
    return (
      (roleFilter.length === 0 || roleFilter.includes(row.role)) &&
      (designationFilter.length === 0 || designationFilter.includes(row.designation)) &&
      (statusFilter.length === 0 || statusFilter.includes(row.status)) &&
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Box sx={{ maxWidth:"1380", margin: '1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid sx={{width: "100%"}} container spacing={2}>
        <Grid sx={{width: "60%", padding:"1rem"}} item xs={12} md={7}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained">Add New</Button>
            </Box>
            <Box sx={{ width:"100%", display: 'flex', gap: 0, alignItems: 'center', justifyContent:"space-between"
            , flexWrap: "wrap" }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', '@media (max-width: 780px)': {width:'100%'}}}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: "200px",maxWidth: "200px", height: "35px", background: '#f3f3f3', border: '1px solid #f3f3f3', borderRadius: 18,
              '@media (max-width: 780px)': {width:'100%', maxWidth: '800px'}, }}>
                <input
                  placeholder='Search'
                  style={{
                    width: '90%',
                    border: 'none',
                    backgroundColor: 'transparent',
                    textAlign: 'left',
                    fontSize: 19,
                    color: '#191919',
                    opacity: 0.54,
                  }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap:"wrap", gap: 1, alignItems: 'center', justifyContent: "center",
              '@media (max-width: 500px)': {width:'100%', flexDirection: 'column'}}}>
              <Box sx={{color: "#191919", fontSize: '19px'}}>Filters:</Box>
              <FormControl sx={{ m: 1, maxWidth: "111px", minWidth: "111px", height:"35px", '@media (max-width: 580px)': {width:'100%', maxWidth: "580px"} }} size="small">
                <InputLabel>by Role</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={roleFilter}
                  onChange={handleRoleChange}
                  input={<OutlinedInput label="by Role" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      <Checkbox checked={roleFilter.indexOf(role) > -1} />
                      <ListItemText primary={role} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: "177px", minWidth: "177px", height:"35px",
              '@media (max-width: 580px)': {width:'100%', maxWidth: "580px"} }} size="small">
                <InputLabel>by Designation</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={designationFilter}
                  onChange={handleDesignationChange}
                  input={<OutlinedInput label="by Designation" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {designations.map((designation) => (
                    <MenuItem key={designation} value={designation}>
                      <Checkbox checked={designationFilter.indexOf(designation) > -1} />
                      <ListItemText primary={designation} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: "129px", minWidth: "129px", height:"35px", '@media (max-width: 580px)': {width:'100%', maxWidth: "580px"} }} size="small">
                <InputLabel>by Status</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={statusFilter}
                  onChange={handleStatusChange}
                  input={<OutlinedInput label="by Status" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      <Checkbox checked={statusFilter.indexOf(status) > -1} />
                      <ListItemText primary={status} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{textAlign: "center", backgroundColor: "#f3f3f3", fontSize: "19px", letterSpacing: "0px", color: "#191919"}}>
                    <TableCell sx={{}}>
                       <Box sx={{border:"1px solid #707070", height: "15px", padding: "1.9px", width: "14px", borderRadius: "50%", display:"flex", alignItems: "center", justifyContent:"center"}}>
                        <Box sx={{border:"1px solid #707070", height: "10px", width: "10px", backgroundColor: "#474747",
                        borderRadius: "50%"}}>

                        </Box>
                       </Box>
                    </TableCell>
                    <TableCell sx={{fontSize: "19px", letterSpacing: "0px", color: "#191919" }}>Name</TableCell>
                    <TableCell sx={{fontSize: "19px", letterSpacing: "0px", color: "#191919" }}>Email</TableCell>
                    <TableCell sx={{fontSize: "19px", letterSpacing: "0px", color: "#191919" }}>Role</TableCell>
                    <TableCell sx={{fontSize: "19px", letterSpacing: "0px", color: "#191919" }}>Designation</TableCell>
                    <TableCell sx={{fontSize: "19px", letterSpacing: "0px", color: "#191919" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {filteredData.map((row) => (
                    <TableRow key={row.id} onClick={() => handleRowClick(row)} sx={{cursor:"pointer"}}>
                      <TableCell>
                        <img
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                          alt=""
                          style={{ width: 33, height: 33, borderRadius: '50%' }}
                        />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.designation}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid sx={{width: "40%", backgroundColor: "#f9f9f9",}} item xs={12} md={5}>
          {selectedRow && (
            <Box sx={{ p:2, background: '#F9F9F9', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: "100%", display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 63, height: 63, borderRadius: '50%' }}
                />
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems:'center', gap: 8, justifyContent: 'space-between'}}>
                  <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography variant="h6" color="primary">{selectedRow.name}</Typography>
                    <Typography>ID: {selectedRow.id}</Typography>
                  </Box>
                  <Box>
                    <Button variant="outlined" onClick={() => handleEditClick(selectedRow)} startIcon={< DriveFileRenameOutlineIcon />} size='small'>
                      Edit
                    </Button>
                  </Box>
                </Box>
              </Box>


              <Box sx={{width: "70%", display: "flex", flexDirection: "column",alignItems:"left", gap: "1rem"}}>
              <Box sx={{display: "flex", flexDirection: "col", width: "100%", alignItems: "left", maxWidth: '400px' ,maxWidth: '400px'}}>
                
                  <Typography sx={{paddingInlineEnd: "143px"}}>Name</Typography>
                  <Typography>{selectedRow.name}</Typography>
                
                
              </Box>

              <Box sx={{display: "flex", flexDirection: "row",
              width: "100%", alignItems: "left"}}>
                <Typography sx={{paddingInlineEnd: "143px"}}>Email</Typography>
                <Typography>{selectedRow.email}</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",
                width: "100%", alignItems: "left"}}>
                <Typography sx={{paddingInlineEnd: "150px"}}>Role</Typography>
                <Typography>{selectedRow.role}</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",
              width: "100%", alignItems: "left"}}>
                <Typography sx={{paddingInlineEnd: "100px"}}>Designation</Typography>
                <Typography>{selectedRow.designation}</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "row",
              width: "100%", alignItems: "left", justifyContent: "initial"}}>
                <Typography sx={{paddingInlineEnd: "143px"}}>Status</Typography>
                <Typography>{selectedRow.status}</Typography>
              </Box>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={editRowData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={editRowData.email}
            onChange={handleInputChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={editRowData.role}
              onChange={handleInputChange}
              input={<OutlinedInput label="Role" />}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Designation</InputLabel>
            <Select
              name="designation"
              value={editRowData.designation}
              onChange={handleInputChange}
              input={<OutlinedInput label="Designation" />}
            >
              {designations.map((designation) => (
                <MenuItem key={designation} value={designation}>
                  {designation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={editRowData.status}
              onChange={handleInputChange}
              input={<OutlinedInput label="Status" />}
            >
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditDialogSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default MyTeam;
