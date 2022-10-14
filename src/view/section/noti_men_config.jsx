//Si funciona no lo muevan//
import * as React from "react";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Icon } from "atomize";

//Perfil
export function AccountProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* Icon Perfil*/}
        <Tooltip title="Perfil">
          <IconButton
            className="imagenPerfil "
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu-perfil" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 45, height: 45 }}>
              <Icon name="UserSolid" className="icon" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {/* Menu Perfil*/}
      <Menu
        anchorEl={anchorEl}
        id="account-menu-perfil"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => (window.location.href = "/perfil")}>
          <Avatar /> Prefil
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => (window.location.href = "/login")}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar Sesion
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

//Mensaje
export function AccountMessage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* Icon Mensaje*/}
        <Tooltip title="Mensaje">
          <IconButton
            className="btn_icon2"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu-mensaje" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <Icon name="Message" className="icon" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {/* Menu Mensaje*/}
      <Menu
        anchorEl={anchorEl}
        id="account-menu-mensaje"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> {/* Texto de Mensaje */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          <Avatar /> {/* Texto de Mensaje */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          <Avatar /> {/* Texto de Mensaje */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          <Avatar /> {/* Texto de Mensaje */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
//Notificacion
export function AccountNotification() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* Icon Notificacion*/}
        <Tooltip title="Notificacion">
          <IconButton
            className="btn_icon1"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu-notificacion" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <Icon name="Notification" className="icon" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      {/* Menu Notificacion*/}
      <Menu
        anchorEl={anchorEl}
        id="account-menu-notificacion"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          {/* Texto de Notificacion */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          {/* Texto de Notificacion */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          {/* Texto de Notificacion */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
        <MenuItem>
          {/* Texto de Notificacion */}
          <r>Lorem ipsum dolor sit amet</r>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
