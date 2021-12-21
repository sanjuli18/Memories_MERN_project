import React from "react";
import { Grow, Grid, Container, Paper} from '@material-ui/core';
import Form from "../Form/Form"
import Posts from "../Posts/Posts";
import Pagination from '../Pagination/Pagination';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import {useState,useEffect} from "react";
//import useStyles from './styles.js';


const Home = () =>{ 
    
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    //const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);
    return(
        <Grow in>
            <Container>
                <Grid  container  justify= "space-between" alignItems="stretch" spacing ={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} >

                        </Posts>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId}></Form>

                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Grow> 
    )};

export default Home;