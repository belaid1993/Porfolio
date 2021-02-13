import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core';
import { ArrowBack, AssignmentInd, ContactMail, Home, Apps } from '@material-ui/icons';
import avatar from '../avatar.png';
import { Link } from 'react-router-dom';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tomato"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
];

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open })
    });

    const classes = useStyles()

    const sideList = slider => (
        <Box onClick={toggleSlider(slider, false)} className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="belaid abdelkadir" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>

                ))}

            </List>
        </Box>
    )


    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#f4eabd" }}>Portfolio</Typography>
                        <MobilRightMenuSlider onClose={toggleSlider("right", false)} anchor="left" open={state.right} >
                            {sideList("right")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar
