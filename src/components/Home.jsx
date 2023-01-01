import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack,Modal, LinearProgress } from "@mui/material";
import NewFolder from "./home/NewFolder"
import Folder from "./home/Folder"
import Note from "./home/Note";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect,useState } from "react";
// import { getAllFolders, getAllNotes } from "../redux/actions";
import { getAllFolders,getAllNotes } from "../api";
import { isAuthenticated } from "../auth";

function Home() {
  const dispatch = useDispatch();
  const { token, user } = isAuthenticated();
  const run = useSelector(state=>state.run)
  const [folders,setFolders] = useState([])
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)
  const loadAllFolders = (token) => {
    getAllFolders(token).then((data) => {
      setFolders(data);
      
    });
  };
  const loadAllItems = (token) => {
    getAllNotes(token).then((notes) => {
      setNotes(notes);
      getAllFolders(token).then((folders) => {
        setFolders(folders);
        setLoading(false)
      });
    });
  };
  useEffect(() => {
    loadAllItems(token)
  }, [run,token]);

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
        {loading ? (
          <>
            <h3>Loading...</h3>
            <LinearProgress />
          </>
        ) : folders.length == 0 ? (
          <Typography variant="subtitle1">
            Currently there are no folders...
          </Typography>
        ) : (
          folders.map((folder) => <Folder key={folder._id} folder={folder} />)
        )}
      </Stack>
      <Typography variant="h4" gutterBottom>
        My Notes
      </Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap", gap: "20px" }}>
        {loading ? (
          <>
            <h3>Loading...</h3>
            <LinearProgress />
          </>
        ) : notes.length == 0 ? (
          <Typography variant="subtitle1">
            Currently there are no notes...
          </Typography>
        ) : (
          notes.map((note) => (
            <Note key={note._id} note={note} folders={folders} />
          ))
        )}
      </Stack>
    </>
  );
}

export default Home;
