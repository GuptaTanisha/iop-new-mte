import React,{useState,useEffect} from 'react';
import {Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar,Typography,InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import { signout } from '../../actions/userActions';
const Header = ({setCoordinates,home}) => {

    let navigate = useNavigate();

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo } = userSignin;

    const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

    const classes = useStyles();
    const [autocomplete,setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat,lng});
    }
    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Link className={classes.link} to="/"> EV Charging Station</Link>
            <Box display="flex">
            <a className={classes.link} href="https://iop-evcs.netlify.app/">Become a host</a>
            <Link className={classes.link} to="/contact">Contact</Link>
            <Link className={classes.link} to="/book">Click to Book</Link>
            {userInfo ? (
              <div className="dropdown">
                <Link className={classes.link} to="#">
                <i className="icon-user"></i>
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link className={classes.link} to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className={classes.link} to="/signin">Sign In</Link>
            )}
            {home && <>
            {/* <Typography variant="h6" className={classes.title}>
                Explore the stations
            </Typography> */}
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                   <div className = {classes.searchIcon}>
                        <SearchIcon />
                   </div>
                   <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput }}/>
                </div>
          </Autocomplete></>}    
            </Box>
        </Toolbar>
        </AppBar>);
}

export default Header;