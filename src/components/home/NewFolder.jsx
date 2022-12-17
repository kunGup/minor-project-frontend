import { Box,Button,Modal, TextField } from "@mui/material";
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import {useDispatch} from 'react-redux'
import {addNewFolder} from '../../redux/actions/'

function NewFolder() {
    const dispatch = useDispatch()
    const [newFolderOpen, setNewFolderOpen] = React.useState(false);
    const [text,setText] = React.useState('')
    const handleText = (e)=>{
      setText(e.target.value)

    }
    const handleClick = (e) => {
      e.preventDefault();
      dispatch(addNewFolder(text));
      setText("");
      handleClose();
    };
    const handleOpen = () => setNewFolderOpen(true);
    const handleClose = () => setNewFolderOpen(false);
  return (
    <>
      <Box
        sx={{
          height: "150px",
          width: "100px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          justifyContent: "space-between",
          "&:hover": {
            background: "lightgray",
          },
          borderRadius: "10px",
          cursor: "pointer",
          transition: "background 0.5s 0s ease",
          outline: 0,
        }}
        onClick={handleOpen}
      >
        <Box
          sx={{
            height: "50%",
            border: "1px dashed black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddIcon />
        </Box>

        <Typography variant="button" sx={{ textAlign: "center" }}>
          New Folder
        </Typography>
      </Box>
      <Modal open={newFolderOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <Typography variant="h6" component="h2">
            Enter folder title
          </Typography>
          <TextField sx={{mb:"10px"}} fullWidth variant="standard" onChange={handleText} value={text}/>
          <Button variant="outlined" onClick={handleClick}>Create</Button>
          
        </Box>
      </Modal>
    </>
  );
}

export default NewFolder