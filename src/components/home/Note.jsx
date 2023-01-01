import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import Delete from "./Delete";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToFolder } from "../../api";
import { useEffect, useState } from "react";
import moment from "moment";
import FolderButton from "../FolderButton";
import { isAuthenticated } from "../../auth";
function shorten(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

function Note({ note, folders, showAddToFolderButton = true }) {
  const {token,user} = isAuthenticated()
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToFolder = (folderId,token) => {
    
    addNoteToFolder(folderId, note._id,token).then(() => {
      console.log("hurray");
      handleClose();
    });
  };

  const showFolderButton = () => {
    return (
      showAddToFolderButton && (
        <FolderButton folders={folders} addToFolder={addToFolder} />
      )
    );
  };
  
  const navigate = useNavigate()
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
          background: "#c1c3c7",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          position: "relative",
        }}
        onClick={() => navigate(`/note/${note._id}`)}
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
        <Typography variant="h6">{shorten(note.title, 30)}</Typography>
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
        <Typography variant="body2">
          {moment(note.createdAt).fromNow()}
        </Typography>
        <Box>
          {showFolderButton()}
          <Tooltip title="Delete">
            <IconButton aria-label="delete" sx={{}} onClick={handleDeleteOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Delete
            deleteOpen={deleteOpen}
            handleClose={handleDeleteClose}
            item={note}
            itemType="note"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Note;
