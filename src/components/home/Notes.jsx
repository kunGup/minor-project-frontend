import { Typography, Stack } from "@mui/material";
import React from 'react'
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllNotes } from "../../redux/actions";

function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    useEffect(() => {
      dispatch(getAllNotes());
    }, []);
  return (
    <>
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

export default Notes