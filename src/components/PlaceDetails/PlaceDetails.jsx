import React, { useEffect ,useState} from 'react'; 
import {Box, Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import {useDispatch} from 'react-redux';
import  {useSelector} from 'react-redux';
import { getStations,bookSlot } from '../../actions/stations.js';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp}) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const stations = useSelector((state) => state.stations);
    const [orgCoordinates, setOrgCoordinates] = useState({});
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}} ) => {
            setOrgCoordinates({lat:latitude, lng:longitude})
        })
    },[])
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = (stationId) => {
        dispatch(getStations());
        dispatch(bookSlot(stationId))
    }

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d.toFixed(2);
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
    return (
        <Card elevation={6}>
            <CardMedia 
            style={{ height: 350}}
             image={
                //  place.photo?place.photo.images.large.url:
              'https://bloximages.chicago2.vip.townnews.com/wmicentral.com/content/tncms/assets/v3/editorial/2/5f/25f85bff-a57c-5257-b976-4907fa140f49/602c4244a7bd2.image.jpg?resize=1200%2C900'}
              title={place.name}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" >{ `Electric Vehicle Charging Station ${place.location_id}`}</Typography>

                  <Box display="flex" justifyContent="space-between">
                  <Rating  value={Number(place.rating)} readOnly />
                      <Typography gutterBottom variant="subtitle1"> Out of {place.num_reviews} reviews</Typography>
                  </Box>
                  
                  {place?.price ? (<Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Price</Typography>
                      <Typography gutterBottom variant="subtitle1">{place.price}</Typography>
                  </Box>) :  (<Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Price</Typography>
                      <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                  </Box>)}

                  <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Distance</Typography>
                      <Typography gutterBottom variant="subtitle1">{getDistanceFromLatLonInKm(orgCoordinates.lat,orgCoordinates.lng,Number(place.latitude),Number(place.longitude))} km</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Time-Zone</Typography>
                      <Typography gutterBottom variant="subtitle1">{place.timezone}</Typography>
                  </Box>
                  {
                      place?.open_now_text ? (
                          <Chip className={ place.open_now_text ==="Open Now" ? classes.success : classes.error} label={place.open_now_text} /> 
                        ) : (
                          <Chip className={  classes.warning} label="No info" /> 
                        )

                  }
                  {
                      place?.address && (
                          <Typography gutterBottom variant="subtitle2" 
                          color="textSecondary" className={classes.subtite}>
                              <LocationOnIcon />{place.address}
                          </Typography>)
                  }
                  {
                      place?.phone && (
                          <Typography gutterBottom variant="subtitle2" 
                          color="textSecondary" className={classes.spacing}>
                              <PhoneIcon />{place.phone}
                          </Typography>)
                  }
                  <CardActions>
                      <Button size="small" color="primary" onClick={() => window.open(place.web_url,'_blank')}>
                          Advisor
                      </Button>
                      <Button size="small" color="primary" onClick={() => window.open(place.website,'_blank')}>
                          Website
                      </Button>
                      {
                        place?.open_now_text && place?.open_now_text==="Open Now" ? (<Button size="small" color="primary" onClick={() => handleClick(place.location_id)}>
                      BOOK
                      </Button>) :
                         (<Button disabled size="small" color="primary" onClick={() => handleClick(place.location_id)}>
                      BOOK
                      </Button>)
                      }
                  </CardActions>
              </CardContent>
        </Card>);
}

export default PlaceDetails;