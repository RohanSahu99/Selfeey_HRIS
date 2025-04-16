'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  Fab,
  MenuItem,
  Slider,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const priorities = ['Low', 'Medium', 'High'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function GoalPage() {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState({
    startDate: '',
    name: '',
    dueDate: '',
    priority: '',
    description: '',
    progress: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGoal({
      startDate: '',
      name: '',
      dueDate: '',
      priority: '',
      description: '',
      progress: 0,
    });
  };

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e, newValue) => {
    setGoal({ ...goal, progress: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Goal Submitted:', goal);
    handleClose();
  };

  return (
    <Box >
      <Typography variant="h6"  gutterBottom>
        Your Goals
      </Typography>

      {/* Placeholder */}
      <Paper sx={{ p: 4, borderRadius: 3, textAlign: 'center', color: 'text.secondary' }}>
        No goals yet.
      </Paper>

      {/* FAB */}
      {/* <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <AddIcon />
      </Fab> */}

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box component="form" sx={style} onSubmit={handleSubmit}>
          <Typography variant="h6" mb={2}>
            Add New Goal
          </Typography>

          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            fullWidth
            size="small"
            value={goal.startDate}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Goal Name"
            name="name"
            fullWidth
            size="small"
            value={goal.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            fullWidth
            size="small"
            value={goal.dueDate}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            select
            label="Priority"
            name="priority"
            fullWidth
            size="small"
            value={goal.priority}
            onChange={handleChange}
            sx={{ mb: 2 }}
          >
            {priorities.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Description"
            name="description"
            multiline
            rows={3}
            fullWidth
            value={goal.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <Typography gutterBottom>Progress: {goal.progress}%</Typography>
          <Slider
            value={goal.progress}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            sx={{ mb: 2 }}
          />

          <Button variant="contained" fullWidth type="submit">
            Save Goal
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
