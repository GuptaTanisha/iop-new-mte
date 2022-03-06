import React,{useState,useEffect} from 'react';
import useStyles from './styles';
import Slot from '../components/Slot/Slot';
import Header from '../components/Header/Header';
import {Grid,InputLabel,Badge,Select,ListItem,MenuItem} from '@material-ui/core';
import { formSubmit } from '../actions/stations';
import { getSlots } from '../actions/slots';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import swal from 'sweetalert';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
const themeLight = createTheme({
  palette: {
    background: {
      default: '#3f51b5',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png)"
        }
      }
    }
  }
});


const Bookscreen = () => {
  const [home,setHome] = useState(false);

  var defaultSlots = [];
  for(let i=1;i<=24;i++){
    defaultSlots.push(i);
  }
  // const slots = useSelector((state) => state.slots);
  const placesFromState = useSelector((state) => state.places);
  var {places} = placesFromState;
  const slotsFromState = useSelector((state) => state.slots);
    var {slots} = slotsFromState;
  console.log({slots});
  console.log({places});
  const dispatch= useDispatch();
    // const [slotsToShow, setSlotsToShow] = useState([]);
    const [formData, setFormData] = useState({ stationId: '',slot: ''});
    const classes = useStyles();

    // useEffect(() => {
    //   const {stationId} = formData;
    //   dispatch(getSlots(Number(stationId)));
    // },[dispatch,formData])

    const handleSlot = async (e) =>{
      const {stationId} = formData;
      console.log(Number(stationId))
      dispatch(getSlots(Number(stationId)));
      // console.log({slots})
      // setSlotsToShow(slots);
      // console.log({slotsToShow})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log({formData});
        dispatch(formSubmit(formData));
    //     let response = await fetch("http://localhost:5000/stations/book", {
    //         method: "POST",
    //         headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formData),
    //  });
    // // setStatus("Submit");
    // let result = await response.json();
    // console.log(result);
    // // if(result.status=="Message Sent")swal("Contact Us",`${result.status}`,"success");
    // // else swal("Contact Us",`${result.status}`,"error");
     }
    return(
      <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Header home={home} />
       <Paper className={`${classes.root} ${classes.paper}`}>
        <form autoComplete="on" noValidate className={classes.form} >
          <Typography variant="h6"> Book a station</Typography>
          <TextField name="stationId" variant="outlined" value={formData.stationId} onChange={(e) => setFormData({...formData,stationId: e.target.value})}  label="Station Id" fullWidth />
          <InputLabel className={classes.label}>Nearby Stations</InputLabel>
          <Select className={classes.select} value={formData.stationId} onChange={(e) => setFormData({...formData,stationId: e.target.value})} fullWidth>
          {
        places?.length && (
                   places.map((place,i) => (
                    place?.open_now_text=="Open Now" ? (
                      <MenuItem value={Number(place.location_id)} key={i}>EV Charging Station {place.location_id}</MenuItem>
                        ) : (
                          <MenuItem className={classes.menuItem} value={Number(place.location_id)} key={i}>EV Charging Station {place.location_id} <span>&nbsp;</span> <span className={classes.span}> Not open</span></MenuItem>
                        )
                      
                   ))
            )
        }
            </Select>
          <InputLabel className={classes.label}>Slots available</InputLabel>
          <Select className={classes.select} value={formData.slot} onChange={(e) => setFormData({...formData,slot: e.target.value})} fullWidth>
          {
        slots?.length ? (
                   slots.map((slot,i) => (
                       <MenuItem value={slot} key={i}>{slot}</MenuItem>
                   ))
            ):(defaultSlots.map((slot,i) => (
                       <MenuItem value={slot} key={i}>{slot}</MenuItem>
                   )))
        }
            </Select>
          <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit}>Submit</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={handleSlot}>See unbooked slots</Button>
        </form>
       <Slot />
        </Paper>
      </MuiThemeProvider>
        )
}

export default Bookscreen;