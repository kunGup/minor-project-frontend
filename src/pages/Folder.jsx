import { IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import Note from "../components/home/Note";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes, getAllFolders, editFolderTitle } from "../api";
import { useParams } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Delete from "../components/home/Delete";
function Folder() {
  const { token } = isAuthenticated();
  const { id } = useParams();
  const [folder, setFolder] = useState(null);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const run = useSelector((state) => state.run);
  function loadFolder() {
    getAllFolders(token).then((folders) => {
      let folder = folders.filter((folder) => folder._id === id)[0];
      setFolder(folder);
      setTitleValue(folder.title)
    });
  }

  useEffect(() => {
    loadFolder();
  }, [run]);

  // function getNotes(){
  //   const res = notes.filter(note=>{
  //     return folder.notes.find(note._id);
  //   })
  //   return res
  // }
  const [title,setTitle] = useState(false)
  const [titleValue,setTitleValue] = useState("")

  const editTitle = () => {
    editFolderTitle({ folderId:folder._id, title: titleValue }, token).then(() => {
      console.log("title changed");
      setTitle(false);
      setFolder({ ...folder, title: titleValue });
    });
  };
  return (
    <>
      {folder === null ? (
        <>
          <h2>Loading...</h2>
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
                <IconButton sx={{ color: "green" }} onClick={() => editTitle()}>
                  <CheckIcon />
                </IconButton>
              </>
            ) : (
              <Typography variant="h4" gutterBottom>
                {folder.title}
              </Typography>
            )}
            <Stack
              sx={{
                flexDirection: "row",
              }}
            >
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
                item={folder}
                itemType="folder"
                redirect={true}
              />
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

export default Folder;
