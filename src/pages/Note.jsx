import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import A from "@mui/material/Link";

function Note() {
  const {id} = useParams()
  const notes = useSelector(state=>state.notes)
  const note = notes.filter(note=>note._id===id)[0]
  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {note.title}
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
          }}
        >
          <Tooltip title="Add to">
            <IconButton aria-label="add to" sx={{}}>
              <FolderOpenIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit title">
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
  );
}

export default Note