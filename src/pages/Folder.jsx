import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React,{useEffect,useState} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Note from '../components/home/Note';
import {useDispatch,useSelector} from 'react-redux'
import { getAllNotes,getAllFolders } from '../api';
import {useParams} from 'react-router-dom'
function Folder() {
  const {id} = useParams()
  const [folder,setFolder] = useState(null)
  const dispatch = useDispatch()
  const run = useSelector(state=>state.run)
  function loadFolder(){
    getAllFolders()
      .then(folders=>{
        setFolder(folders.filter((folder) => folder._id === id)[0]);
      })
  }

  useEffect(()=>{
    loadFolder()
  },[run])

  // function getNotes(){
  //   const res = notes.filter(note=>{
  //     return folder.notes.find(note._id);
  //   })
  //   return res
  // }

  return (
    <>
      {folder === null ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {folder.title}
            </Typography>
            <Stack
              sx={{
                flexDirection: "row",
              }}
            >
              <Tooltip title="Edit">
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
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: "20px" }}>
            {folder.notes.length == 0 && (
              <Typography variant="subtitle1">
                Currently there are no notes...
              </Typography>
            )}
            {folder.notes.map((note) => (
              <Note key={note._id} note={note} showAddToFolderButton={false} />
            ))}
          </Stack>
        </>
      )}
    </>
  );
}

export default Folder