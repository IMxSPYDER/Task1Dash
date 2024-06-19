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
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




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
    role: 'Manager',
    designation: 'Designer',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Yogesh Jadhav',
    email: 'Jyogesh19@gmail.com',
    role: 'Manager',
    designation: 'Designer',
    status: 'Active',
  },
];

function MyTeam() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

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
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: "200px",maxWidth: "200px", height: "35px", background: '#f3f3f3', border: '1px solid #f3f3f3', borderRadius: 18 }} md={{width: "100%"}}>
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
                />
              </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap:"wrap", gap: 1, alignItems: 'center', justifyContent: "center"}}>
              <Box sx={{color: "#191919", fontSize: '19px'}}>Filters:</Box>
              <FormControl sx={{ m: 1, maxWidth: "111px", minWidth: "111px", height:"35px" }} size="small">
                <InputLabel>by Role</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="by Role" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: "177px", minWidth: "177px", height:"35px" }} size="small">
                <InputLabel>by Designation</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="by Designation" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, maxWidth: "129px", minWidth: "129px", height:"35px" }} size="small">
                <InputLabel>by Status</InputLabel>
                <Select
                  sx={{borderRadius: 25, backgroundColor: "#f3f3f3"}}
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="by Status" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
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
                  {tableData.map((row) => (
                    <TableRow sx={{cursor:"pointer"}} key={row.id} onClick={() => handleRowClick(row)}>
                      <TableCell>
                        <img
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                          alt=""
                          style={{ width: 33, height: 33, border: '1px solid #9F9F9F', borderRadius: '50%', opacity: 1 }}
                        />
                      </TableCell>
                      <TableCell sx={{fontSize: "18px", color: "#474747"}}>{row.name}</TableCell>
                      <TableCell sx={{fontSize: "18px", color: "#474747"}}>{row.email}</TableCell>
                      <TableCell sx={{fontSize: "18px", color: "#474747"}}>{row.role}</TableCell>
                      <TableCell sx={{fontSize: "18px", color: "#474747"}}>{row.designation}</TableCell>
                      <TableCell sx={{fontSize: "18px", color: "#474747"}}>{row.status}</TableCell>
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
              <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', gap: 2 }}>
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                  alt=""
                  style={{ width: 63, height: 63, borderRadius: '50%' }}
                />
                <Box>
                  <Typography variant="h6" color="primary">{selectedRow.name}</Typography>
                  <Typography>ID: {selectedRow.id}</Typography>
                </Box>
              </Box>
              <Box sx={{width: "70%", display: "flex", flexDirection: "column",alignItems:"left", gap: "1rem"}}>
              <Box sx={{display: "flex", flexDirection: "row",
              width: "100%", alignItems: "left"}}>
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
    </Box>
  );
}

export default MyTeam;
