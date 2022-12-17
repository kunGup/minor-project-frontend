import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack,Modal } from "@mui/material";
import NewFolder from "./home/NewFolder"
import Folder from "./home/Folder"
import Note from "./home/Note";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { getAllFolders, getAllNotes } from "../redux/actions";
import {Link} from 'react-router-dom'
import Folders from "./home/Folders";
import Notes from "./home/Notes";

function Home() {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders);
  const notes = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getAllFolders());
    dispatch(getAllNotes());
  }, [dispatch]);
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
        {folders.map((folder) => (
          <Folder key={folder._id} folder={folder} />
        ))}
      </Stack>
      <Typography variant="h4" gutterBottom>
        My Notes
      </Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap", gap: "20px" }}>
        {notes.map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </Stack>
    </>
  );
}

export default Home;
