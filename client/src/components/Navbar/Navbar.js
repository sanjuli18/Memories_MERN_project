import React from "react";
import {Link} from 'react-router-dom';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import memories from '../../images/memories.jpg';
import useStyles from './styles.js';

const Navbar = () => {
    const classes = useStyles();

    const user = null;
    return(
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant = "h2" align ="centre">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="100" />
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" color="secondary" className={classes.logout}>Log Out</Button>
                </div>
            ): (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar> 
    );
};

export default Navbar;