import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const AddTaskForm = (props) => {

  return (
    <Box
    component="form"
    sx={{
      '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
    }}
    onSubmit={props.submit}
  >
<div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
      <TextField
          required
          name="priority"
          label="Priority"
          InputLabelProps={{ shrink: true }}
          select
          defaultValue={"High"}
          onChange={(event) => props.change(event)}
        >
            <MenuItem key="High" value="High">High</MenuItem>
            <MenuItem key="Medium" value="Medium">Medium</MenuItem>
            <MenuItem key="Low" value="Low">Low</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
  </Box>
  )
};

export default AddTaskForm;