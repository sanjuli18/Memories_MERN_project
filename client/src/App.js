import React, {useState,useEffect} from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import {AppBar, Typography, Grow, Grid, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';


import useStyles from './styles.js';
import memories from './images/memories.jpg';
const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);



    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant = "h2" align ="centre">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
                </AppBar> 
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container  justify= "space-between" alignItems="stretch" spacing ={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} >

                                </Posts>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                            </Grid>

                        </Grid>
                    </Container>
                </Grow> 
        </Container>
    );
}

export default App;