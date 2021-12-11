import React, {useEffect} from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import {AppBar, Typography, Grow, Grid, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';


import useStyles from './styles.js';
import memories from './images/memories.jpg';
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);



    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant = "h2" align ="centre">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="100" />
                </AppBar> 
                <Grow in>
                    <Container>
                        <Grid container justify content = "space-between" alignItems="stretch" spaceing ={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts>

                                </Posts>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Form></Form>
                            </Grid>

                        </Grid>
                    </Container>
                </Grow> 
        </Container>
    );
}

export default App;