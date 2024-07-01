import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Checkbox,
  Typography,
} from '@mui/material';

const associates = [
  {
    id: 1,
    name: 'Yogesh Jadhav',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 2,
    name: 'Sneha Wani',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    id: 3,
    name: 'Manoj Jaiswal',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

const FilterSelect = () => {
  const [selectedAssociates, setSelectedAssociates] = useState([]);

  const handleCheckboxChange = (event, associateId) => {
    if (event.target.checked) {
      setSelectedAssociates([...selectedAssociates, associateId]);
    } else {
      setSelectedAssociates(
        selectedAssociates.filter((id) => id !== associateId),
      );
    }
  };

  return (
    <div>
      <Typography variant="h6">Associates</Typography>
      <List>
        {associates.map((associate) => (
          <ListItem key={associate.id}>
            <ListItemAvatar>
              <Avatar alt={associate.name} src={associate.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={associate.name}
              secondary={
                <Checkbox
                  checked={selectedAssociates.includes(associate.id)}
                  onChange={(event) => handleCheckboxChange(event, associate.id)}
                />
              }
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">
        {selectedAssociates.length} selected
      </Typography>
    </div>
  );
};

export default FilterSelect;
