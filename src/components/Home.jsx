import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack,Modal } from "@mui/material";
import NewFolder from "./home/NewFolder"
import Folder from "./home/Folder"
import Note from "./home/Note";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect,useState } from "react";
// import { getAllFolders, getAllNotes } from "../redux/actions";
import { getAllFolders,getAllNotes } from "../api";

function Home() {
  const dispatch = useDispatch();
  // const folders = useSelector((state) => state.folders);
  // const notes = useSelector((state) => state.notes);
  // const [run,setRun] = useState(false)
  const run = useSelector(state=>state.run)
  const [folders,setFolders] = useState([])
  const [notes,setNotes] = useState([])
  const loadAllFolders = () => {
    getAllFolders().then(data=>{
      setFolders(data)
    })
  }
  const loadAllNotes = () => {
    getAllNotes().then(data=>{
      setNotes(data)
    })
  }
  useEffect(() => {
    loadAllFolders()
    loadAllNotes()
  }, [run]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Folders
      </Typography>
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", gap: "20px", marginBottom: "80px" }}
      >
        <NewFolder />
        {folders.length == 0 && (
          <Typography variant="subtitle1">
            Currently there are no folders...
          </Typography>
        )}
        {folders.map((folder) => (
          <Folder key={folder._id} folder={folder} />
        ))}
      </Stack>
      <Typography variant="h4" gutterBottom>
        My Notes
      </Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap", gap: "20px" }}>
        {notes.length == 0 && (
          <Typography variant="subtitle1">
            Currently there are no notes...
          </Typography>
        )}
        {notes.map((note) => (
          <Note
            key={note._id}
            note={note}
            folders={folders}
          />
        ))}
      </Stack>
    </>
  );
}

export default Home;
