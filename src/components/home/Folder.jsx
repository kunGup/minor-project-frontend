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
import {useDispatch} from 'react-redux'
import {deleteFolder} from '../../redux/actions'
import {Link} from 'react-router-dom'

function Folder({folder}) {
  const dispatch = useDispatch()
  
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleOpen = () => setDeleteOpen(true);
  const handleClose = () => setDeleteOpen(false);
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
          onClick={handleOpen}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
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
        <Delete deleteOpen={deleteOpen} handleClose={handleClose} folder={folder}/>
      </Box>
    </Box>
  );
}

export default Folder