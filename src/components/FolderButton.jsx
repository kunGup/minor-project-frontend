import React from 'react'
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function FolderButton({folders,addToFolder}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <Tooltip title="Add to">
        <IconButton aria-label="add to" sx={{}} onClick={handleClick}>
          <FolderOpenIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {folders.map((folder) => (
          <MenuItem onClick={() => addToFolder(folder._id)} key={folder._id}>
            {folder.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default FolderButton