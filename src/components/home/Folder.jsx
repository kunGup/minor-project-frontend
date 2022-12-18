import React from 'react'
import {
  Box,
  Tooltip,
  IconButton,
  Typography,
  Modal,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from './Delete';
import {Link} from 'react-router-dom'

function Folder({folder,run=undefined,setRun=f=>f}) {
  
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  return (
    <Box
      sx={{
        height: "150px",
        width: "100px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        justifyContent: "space-between",
        "&:hover": {
          background: "lightgray",
        },
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background 0.5s 0s ease",
        position: "relative",
      }}
    >
      <Tooltip title="Delete">
        <IconButton
          aria-label="delete"
          sx={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
          }}
          onClick={handleDeleteOpen}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Delete
        deleteOpen={deleteOpen}
        handleClose={handleDeleteClose}
        item={folder}
        itemType="folder"
      />
      <Box
        sx={{
          height: "100%",
          background: "#1976D2",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`/folder/${folder._id}`}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {folder.title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Folder