import React from 'react';
import { Box, Avatar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../avatar.png';
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    title2: {
        color: "#f4eabd"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="belaid abdelkadir" />

            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed
                    strings={["Bélaid Abdelkadir"]}
                    typeSpeed={40}
                />
            </Typography>
            <br/>
            <Typography className={classes.title2} variant="h5">
                <Typed
                    strings={["Dévloppeur Web"]}
                    typeSpeed={40}
                />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h6">
                <Typed
                    strings={["Java/Spring", "Spring Batch", "Js/React"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
