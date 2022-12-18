import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import A from "@mui/material/Link";
import { useDispatch } from 'react-redux'; 
import { useEffect,useState } from 'react';
import { addNoteToFolder } from '../api';
// import { getAllNotes } from '../redux/actions';
import { getAllNotes,getAllFolders } from '../api';
import FolderButton from '../components/FolderButton';

function Note() {
  const {id} = useParams()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [note,setNote] = useState(null)
  const [folders, setFolders] = useState([]);
  const loadSingleNote = () => {
    getAllNotes().then(notes=>{
      setNote(notes.find(note=>id===note._id))
    })
  }
  const loadAllFolders = () => {
    getAllFolders().then((data) => {
      setFolders(data);
    });
  };
  useEffect(()=>{
    loadSingleNote()
    loadAllFolders()
  },[])
  
  const addToFolder = (folderId) => {
    addNoteToFolder(folderId, note._id).then(() => {
      console.log("hurray");
      handleClose();
    });
  };


  return (
    <>
      {note===null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {note.title}
            </Typography>
            <Stack
              sx={{
                flexDirection: "row",
              }}
            >
              <FolderButton folders={folders} addToFolder={addToFolder} />
              <Tooltip title="Edit title">
                <IconButton aria-label="Edit title" sx={{}}>
                  <CreateIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete note">
                <IconButton aria-label="Delete note" sx={{}}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={note.pic} style={{ width: "100%" }} />
              <A href={note.url} underline="hover" color="inherit">
                Go to video <OpenInNewIcon />
              </A>
            </Box>
            <Box
              sx={{
                flex: "3",
                // background: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50%",
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ padding: "20px", pt: "0" }}>
                  {note.text}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
}

export default Note