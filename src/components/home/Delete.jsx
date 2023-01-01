import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react'
import { deleteNote,deleteFolder } from '../../api';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../auth';
import { useNavigate } from 'react-router-dom';
function Delete({ deleteOpen, handleClose, item, itemType,redirect }) {
  const {token} = isAuthenticated()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type:"UPDATE_RUN"})
    if(itemType === "note"){
      deleteNote(item,token).then(() => {
        handleClose();
        redirect && navigate('/home')
      });
    }else if(itemType === "folder"){
      deleteFolder(item,token).then(() => {
        handleClose();
        redirect && navigate("/home");
      });
    }
  };
  
  return (
    <Modal open={deleteOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: "10px" }}>
          Are you sure you want to delete?
        </Typography>
        <Stack spacing={2}>
          <Button variant="outlined" color="success" onClick={handleClick}>
            Yes
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            No
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default Delete