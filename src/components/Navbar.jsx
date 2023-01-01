import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { isAuthenticated, signout } from "../auth";
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate()
  const {user} = isAuthenticated()
  return (
    <AppBar position="sticky" sx={{ height: "60px", textAlign: "center" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Summarizer
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="kemy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAuthenticated() && (
                <MenuItem onClick={()=>navigate('/home')}>
                  <Typography textAlign="center">
                    Dashboard
                  </Typography>
                </MenuItem>
              )}
              {isAuthenticated() && (
                <MenuItem onClick={()=>{signout(() => navigate("/"));}}>
                  <Typography textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              )}
              {!isAuthenticated() && (
                <MenuItem onClick={()=>navigate('/signin')}>
                  <Typography textAlign="center">
                    Signin
                  </Typography>
                </MenuItem>
              )}
              {!isAuthenticated() && (
                <MenuItem onClick={()=>navigate('/signup')}>
                  <Typography textAlign="center">
                    Signup
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
