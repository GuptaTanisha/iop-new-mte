import React,{useEffect,useState} from 'react';

import {CssBaseline, Grid } from '@material-ui/core';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import Form from '../components/Form/Form';
import { getPlacesData } from '../api';
import {setGlobalPlaces} from '../actions/places';
import { useDispatch, useSelector } from 'react-redux';

const Homescreen = () => {
    const [home,setHome] = useState(true);
    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('');
    const dispatch= useDispatch();

    const [places,setPlaces] = useState([]);
    const [filteredPlaces,setFilteredPlaces] = useState([]);
    const [childClicked,setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}} ) => {
            setCoordinates({lat:parseFloat(latitude), lng:parseFloat(longitude)})
        })
    },[])
    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating)
        setFilteredPlaces(filteredPlaces);
    },[rating])
  
    useEffect(() => {
        if(bounds.sw && bounds.ne){
            setIsLoading(true);
        console.log({coordinates})
        console.log({bounds})
        getPlacesData(type,bounds.sw,bounds.ne)
        .then((data) => {
            console.log({data});
            setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
            setFilteredPlaces([]);
            setIsLoading(false);
        });
        
        }
    },[type,bounds])
    useEffect(() => {
        console.log({places});
        dispatch(setGlobalPlaces(places))
    },[places]);
    return(
        <>
        <CssBaseline />
        <Header home={home} />
        <Grid container spacing={3} style={{ width: '100%'}}>
            <Grid item xs={12} md={4}>
            <List 
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            />
            </Grid>

            <Grid item xs={12} md={8}>
            <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            />
            </Grid>
        </Grid>
        </>
        )
}

export default Homescreen;