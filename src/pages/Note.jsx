import {
  Box,
  IconButton,
  LinearProgress,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import A from "@mui/material/Link";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addNoteToFolder, editNote } from "../api";
// import { getAllNotes } from '../redux/actions';
import { getAllNotes, getAllFolders } from "../api";
import FolderButton from "../components/FolderButton";
import { isAuthenticated } from "../auth";
import Delete from "../components/home/Delete";

function Note() {
  const { id } = useParams();
  const {user,token} = isAuthenticated()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [note, setNote] = useState({});
  const [titleValue,setTitleValue] = useState("")
  const [folders, setFolders] = useState([]);
  const loadSingleNote = () => {
    getAllNotes(token).then((notes) => {
      let note = notes.find((note) => id === note._id);
      setNote(note);
      setTitleValue(note.title)
    });
  };
  const loadAllFolders = () => {
    getAllFolders(token).then((data) => {
      setFolders(data);
    });
  };
  useEffect(() => {
    loadSingleNote()
    loadAllFolders();
  }, []);

  const addToFolder = (folderId) => {
    addNoteToFolder(folderId, note._id,token).then(() => {
      console.log("hurray");
      handleClose();
    });
  };

  const editNoteTitle = () => {
    editNote({ ...note, title: titleValue },token).then(() => {
      console.log("title changed");
      setTitle(false);
      setNote({ ...note, title: titleValue });
    });
  }
  const [title, setTitle] = useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  return (
    <>
      {note === null ? (
        <>
          <h1>Loading...</h1>
          <LinearProgress />
        </>
      ) : (
        <>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            {title ? (
              <>
                <TextField
                  variant="standard"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  fullWidth
                />
                <IconButton
                  sx={{ color: "green" }}
                  onClick={() => editNoteTitle()}
                >
                  <CheckIcon />
                </IconButton>
              </>
            ) : (
              <Typography variant="h4" gutterBottom>
                {note.title}
              </Typography>
            )}

            <Stack
              sx={{
                flexDirection: "row",
              }}
            >
              <FolderButton folders={folders} addToFolder={addToFolder} />
              {!title ? (
                <Tooltip title="Edit title">
                  <IconButton
                    aria-label="Edit title"
                    sx={{}}
                    onClick={() => setTitle(true)}
                  >
                    <CreateIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Cancel Edit title">
                  <IconButton
                    sx={{ color: "red" }}
                    onClick={() => setTitle(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="Delete note">
                <IconButton
                  aria-label="Delete note"
                  sx={{}}
                  onClick={handleDeleteOpen}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Delete
                deleteOpen={deleteOpen}
                handleClose={handleDeleteClose}
                item={note}
                itemType="note"
                redirect={true}
              />
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

export default Note;
