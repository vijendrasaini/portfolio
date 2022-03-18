import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  console.log(theme);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: " var(--primaryFont)",
      fontStyle: " normal",
      fontWeight: " normal",
      fontSize: " 24px",
      background: theme.secondary,
      overflow: "hidden",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: theme.primary,
      position: "absolute",
      right: 40,
      top: 40,
      transition: "color 0.1s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "2rem auto",
      borderRadius: "78.8418px",
      background: theme.secondary,
      color: theme.primary,
      width: "85%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: theme.primary,
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "80%",
      fontSize: "1.2rem",
      fontWeight: 600,

      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
    drawerIcon: {
      fontSize: "2.5rem",
      display: "flex",
      alignItems: "center",
      // margin: "0 0.8px",
      [t.breakpoints.down("sm")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: "white" }}>Vijendra Saini</h1>

        <IoMenuSharp className={classes.navMenu} onClick={handleDrawerOpen} />
      </div>

      {/* ////////////////             Navbar Top                ////////////////////// */}

      {/* <div>
        <div className="navLink__container2">
          <Fade left>
            <NavLink
              to="/#home"
              smooth={true}
              spy="true"
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <IoHomeSharp className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>Home</span>
              </div>
            </NavLink>
          </Fade>
          <Fade left>
            <NavLink
              to="/#projects"
              smooth={true}
              spy="true"
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <FaFolderOpen className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>Projects</span>
              </div>
            </NavLink>
          </Fade>
          <Fade left>
            <NavLink
              to="/#about"
              smooth={true}
              spy="true"
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <FaUser className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>About</span>
              </div>
            </NavLink>
          </Fade>

          <Fade left>
            <NavLink
              to="/#resume"
              smooth={true}
              spy="true"
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <HiDocumentText className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>Education</span>
              </div>
            </NavLink>
          </Fade>

          <Fade left>
            <NavLink
              to="/#services"
              smooth={true}
              spy="true"
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <BsFillGearFill className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>Hobbies</span>
              </div>
            </NavLink>
          </Fade>

          <Fade left>
            <NavLink
              to="/#blog"
              smooth={true}
              spy="true"
              duration={2000}
              style={{ textDecoration: "none" }}
            >
              <div className={classes.drawerItem}>
                <FaFolderOpen className={classes.drawerIcon} />
                <span className={classes.drawerLinks}>Blog</span>
              </div>
            </NavLink>
          </Fade>
        </div>
      </div> */}

      {/* ////////////////////////////////////// */}

      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="right"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            className={classes.closebtnIcon}
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <Fade left>
              <NavLink to="/#home" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#about" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#skills" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Skills</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#projects" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Projects</span>
                </div>
              </NavLink>
            </Fade>

            {/* <Fade left>
              <NavLink to="/#resume" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Education</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#services" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Hobbies</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Blog</span>
                </div>
              </NavLink>
            </Fade> */}

            <Fade left>
              <NavLink to="/#contacts" smooth={true} spy="true" duration={500}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;