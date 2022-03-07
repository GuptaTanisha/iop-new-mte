import React,{useEffect,useState} from 'react';
import useStyles from './styles';
import {CssBaseline } from '@material-ui/core';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import Form from '../components/Form/Form';
import { getPlacesData } from '../api';
import {setGlobalPlaces} from '../actions/places';
import {Grid,Card,Button,CardMedia,Typography, CardActions,Divider,AppBar, Toolbar, CardContent ,makeStyles} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { getHosts } from '../actions/hosts';

const Hostscreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getHosts());
   },[dispatch])

    const hostsFromState = useSelector((state) => state.hosts);
    var {hosts} = hostsFromState;
    console.log({hosts});

    return(
        <>
        <CssBaseline />
        <Header home={false} />
        <Grid container spacing={3} style={{ width: '100%'}}>
    {
    hosts?.length ? (hosts.map((host,i) => (
    <Grid item xs={12} md={3} key={host._id} >
        <Card sx={{ minWidth: 275 }} elevation={6} key={host._id} >
              <CardContent>
              <Typography variant="body2" color="text.secondary">Host's Unique Id: {host._id} </Typography>
              <br />
               <Typography align="center" children="node" color="textSecondary" gutterBottom><i class="fa-solid fa-phone"></i> {host.PhoneNumber}</Typography>
               <br />
              <Typography align="center" variant="h4" component="div"><i class="fa-solid fa-user"></i>{" "}{host.Name}</Typography>
              <br />
              <Typography align="center" color="textSecondary" variant="h6"><i class="fa-solid fa-city"></i>{" "}{host.City}</Typography>
              <Typography align="center" variant="body2"><i class="fa-solid fa-envelope"></i> {" "}{host.Email} <br /> </Typography>
              </CardContent>
     </Card>
    </Grid>
    ))) : (<Typography variant="h4">Nothing to Show</Typography>)
   }
   </Grid>
        </>
        )
}

export default Hostscreen;