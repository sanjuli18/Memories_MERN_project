import React, {useState, useEffect} from "react";
import {Link,useHistory, useLocation} from 'react-router-dom';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import memories from '../../images/memory.png';
import memories1 from '../../images/large.png';
import useStyles from './styles.js';
import decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import './styles.css';



const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        history.push('/');
        setUser(null);
    };
    
    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        //JWT

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);



    return(
    <AppBar className={classes.appBar} position="static" color="inherit" >
        <Link to="/" className={classes.brandContainer}>
            <img src={memories} alt="icon" height="50px" />
            <img className={classes.image} src={memories1} alt="memories1" height="100px" width="300"/>
        </Link>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" color="secondary" className={classes.logout} onClick={logout}>Log Out</Button>
                </div>
            ): (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar> 
    );
};

export default Navbar;