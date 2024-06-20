import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentIcon from "@mui/icons-material/Payment";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import Home from "../home/Home";
import Studentes from "../studentes/Studentes";
import Payments from "../payments/Payments";
import SelectAutoWidth from "../Select/Select";
import Groups from "../groups/Groups";
import Groups1 from "../Groups1/Groups1";
import Attendance from "../Attendance/Attendance";
import Attendance1 from "../Attendance1/Attendance1";
import "./SideNav.css";
import { useSelector } from 'react-redux'
import ThemeMode from "../ThemeMode/ThemeMode";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,

  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #fff 30%, #FFF 90%)",
  },
  title: {
    background: "#F0F2FA",
  },
  bgcolor: { background: "#F0F2FA" },
});

export default function MiniDrawer() {
  const [title, setTitle] = useState(
    window.localStorage.getItem("title") || "Xisobot"
  );
  const [data, setData] = useState(
    window.localStorage.getItem("data") || "students"
  );
  window.localStorage.setItem("title", title);
  window.localStorage.setItem("data", data);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

 

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //language
  const {currentLanguage : language} = useSelector(state => state.language);
  console.log(language);
  const [menu, setMenu] = useState('report')
  useEffect(() => {
    switch (menu) {
      case "report":
        return setTitle(language.report);
      case "students":
        return setTitle(language.students);
      case "groups":
        return setTitle(language.groups);
      case "attendence":
        return setTitle(language.attendence);
      case "payments":
        return setTitle(language.payments);
    }
    
  }, [language])
  //theme
  const isDark = useSelector(state => state.isDark.bool);


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ background: "#fff", color: "#0061F7", fontWidth: "900" }}
        position="fixed"
        open={open}
      >
        <Toolbar className={isDark ? "dark__header" : "light"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon className={classes.title} />
          </IconButton>
          <div className=" d-flex justify-content-between w-100">
            <Typography
              className={`typo ${isDark ? "dark__title" : "light"}`}
              variant="h4"
              noWrap
              component="p"
            >
              {title}
            </Typography>
            <div className="d-flex align-items-center w-25 justify-content-evenly">
              <SelectAutoWidth />
              <ThemeMode />
              <NotificationsNoneIcon className="bell" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className={`drawe__header ${isDark ? "dark" : "light"}`}>
          <AccountBoxIcon className="drawe__header-contact" />
          <p className="drawe__header-p">
            CRM <br />
            PANEL
          </p>
          <IconButton className="IconButton" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          className={isDark ? "dark" : "light"}
          style={{ background: "#2F49D1", height: "100vh", color: "#fff" }}
        >
          <List>
            <ListItemButton className="active">
              <NavLink
                onClick={() => {
                  setTitle(language.report);
                  setMenu("report");
                }}
                to="/"
                className="navlink"
              >
                <HomeIcon style={{ color: "#fff", marginRight: 30 }} />
                {language.report}
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                onClick={() => {
                  setTitle(language.students);
                  setMenu("students");

                  setData("students");
                }}
                to="/studentes"
                className="navlink"
              >
                <SchoolSharpIcon style={{ color: "#fff", marginRight: 30 }} />
                {language.students}
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                onClick={() => {
                  setTitle(language.groups);
                  setMenu("groups");
                  setData("students");
                }}
                to="/groups1"
                className="navlink"
              >
                <GroupsIcon style={{ color: "#fff", marginRight: 30 }} />
                {language.groups}
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                onClick={() => {
                  setMenu("payments");
                  setTitle(language.payments);
                  setData("students");
                }}
                to="/payments"
                className="navlink"
              >
                <PaymentIcon style={{ color: "#fff", marginRight: 30 }} />
                {language.payments}
              </NavLink>
            </ListItemButton>
            <ListItemButton>
              <NavLink
                onClick={() => {
                  setMenu("attendence");
                  setData("students");
                  setTitle(language.attendence);
                }}
                to="/attendance"
                className="navlink"
              >
                <ContactsIcon style={{ color: "#fff", marginRight: 30 }} />
                {language.attendence}
              </NavLink>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <div className={`wrapper ${isDark?"dark__back":"light"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentes" element={<Studentes />} />
          <Route path="/studentes" element={<Studentes />} />
          <Route path="/groups/:id" element={<Groups />} />
          <Route path="/groups1" element={<Groups1/>} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/attendance/" element={<Attendance />} />
          <Route path="/attendance1/:id" element={<Attendance1 />} />
        </Routes>
      </div>
    </Box>
  );
}
