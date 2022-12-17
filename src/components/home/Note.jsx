import React from 'react'
import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import Delete from './Delete';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addNoteToFolder } from '../../redux/actions';
import { useEffect } from 'react';
import { getAllFolders } from "../../redux/actions";
function shorten(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

function Note({note}) {
    const { dispatch } = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);
    
    useEffect(() => {
      // dispatch(getAllFolders());
    }, []);
    
    const folders = useSelector(state=>state.folders)
    const addToFolder = (folderId)=>{
      dispatch(addNoteToFolder(folderId,note._id));
      handleClose()
    }
  return (
    <Box
      sx={{
        height: "300px",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "background 0.5s 0s ease",
      }}
    >
      <Box
        sx={{
          flex: "9",
          background: "#1976D2",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          position: "relative",
        }}
      >
        {note.type === 0 ? (
          <YouTubeIcon
            fontSize="small"
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
            }}
          />
        ) : (
          <LanguageIcon
            fontSize="small"
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
            }}
          />
        )}
        <Link to={`/note/${note._id}`}>
          <Typography variant="h6">{shorten(note.title, 30)}</Typography>
        </Link>

        <img
          src={note.pic}
          style={{
            objectFit: "contain",
            height: "90px",
            width: "100%",
          }}
        />
        <Typography variant="body2">{shorten(note.text, 100)}</Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">2 days ago</Typography>
        <Box>
          <Tooltip title="Add to">
            <IconButton aria-label="add to" sx={{}} onClick={handleClick}>
              <FolderOpenIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {folders.map((folder) => (
              <MenuItem onClick={()=>addToFolder(folder._id)} key={folder._id}>
                {folder.title}
              </MenuItem>
            ))}
          </Menu>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" sx={{}} onClick={handleDeleteOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Delete deleteOpen={deleteOpen} handleClose={handleDeleteClose} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Note