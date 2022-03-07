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
    const {hosts} = hostsFromState;
    // console.log("me",{hosts.length});

    return(
        <>
        <CssBaseline />
        <Header home={false} />
        <Grid container spacing={3} style={{ width: '100%'}}>
    {
    hosts.length ? (hosts.map((host,i) => (
    <Grid item xs={12} md={3} key={station._id} >
        <Card elevation={6} key={station._id} className={classes.root}>
        <CardMedia style={{ height: 250}} title={host.Name} />
              <CardContent>
              <Typography variant="h6">Id: {host.PhoneNumber}</Typography>
              <Typography variant="h6">Id: {host.Email}</Typography>
              <Typography variant="h6">Id: {host.City}</Typography>
          {/* <Divider variant="middle" />
          
          <Grid container spacing={2}>
          <Grid item md={1}>
          <LocationOnIcon />
          </Grid>
          <Grid item  md={10}>
          <Typography color="text.secondary" variant="body2">{station.address}</Typography>
          <Typography color="text.secondary" variant="body2">Lat : {station.lat}, Long: {station.long}</Typography>
          <Typography color="text.primary" variant="body1">{station.country}</Typography>
          </Grid>
          </Grid>
          <Divider variant="middle" /> */}
              </CardContent>
    
          {/* <CardActions >
          <Button className={classes.button} variant="contained" color="primary" size="small" onClick={() => handleClick(station.stationId)}>
                  BOOK
            </Button>
          </CardActions> */}
     </Card>
    </Grid>
    ))) : (<Typography variant="h4">Nothing to Show</Typography>)
   }
   </Grid>
        </>
        )
}

export default Hostscreen;