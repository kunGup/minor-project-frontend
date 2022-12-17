import { Stack, Typography } from '@mui/material';
import React from 'react'
import Folder from './Folder';
import NewFolder from './NewFolder';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFolders } from "../../redux/actions";

function Folders() {
    const dispatch = useDispatch();
    const folders = useSelector((state) => state.folders);
    useEffect(() => {
      dispatch(getAllFolders());
    }, []);
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
    </>
  );
}

export default Folders