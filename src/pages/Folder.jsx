import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import React,{useEffect} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Note from '../components/home/Note';
import {useDispatch,useSelector} from 'react-redux'
import { getAllNotes } from '../redux/actions';
import {useParams} from 'react-router-dom'
function Folder() {
  const dispatch = useDispatch()
  const notes = useSelector(state=>state.notes)
  // useEffect(()=>{
  //   dispatch(getAllNotes())
  // })
  const {id} = useParams()
  const folders = useSelector(state=>state.folders)
  const folder = folders.filter(folder=>folder._id===id)[0]
  function getNotes(){
    const res = notes.filter(note=>{
      return folder.notes.find(note._id);
    })
    return res
  }
  return (
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
        {getNotes().map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </Stack>
    </>
  );
}

export default Folder