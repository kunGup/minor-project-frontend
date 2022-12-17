import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteFolder } from "../../redux/actions";
function Delete({ deleteOpen, handleClose, folder }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteFolder(folder));
    handleClose();
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