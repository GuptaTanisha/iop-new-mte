import React, { useEffect, useState } from 'react';
import PasswordField from 'material-ui-password-field'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './contact.css';
import useStyles from './styles';
import {Grid,InputLabel,Badge,Select,ListItem,MenuItem, Box} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import swal from 'sweetalert';
import Header from '../components/Header/Header';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { signin } from '../actions/userActions';
import { BrowserRouter,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox/LoadingBox';
import MessageBox from '../components/MessageBox.js/MessageBox';
export default function Signinscreen(props) {

    let navigate = useNavigate();


    const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
    const {userInfo ,loading,error} = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email,password));
  };
  useEffect(() => {
      if(userInfo){
        navigate('/home')
      }
  }),[userInfo]
  return (
    <>
      <CssBaseline />
      <Header home={false} />
       <Paper className={`${classes.root} ${classes.paper}`}>
        <form onSubmit={submitHandler} autoComplete="on" noValidate className={classes.form} >
        <Typography variant="h4">Sign In</Typography>
          <div>
          {
              loading && <LoadingBox></LoadingBox>
          }
          {
              error && <MessageBox variant="danger">{error}</MessageBox>
          }
          </div>
          <TextField name="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth />
          <TextField type="password" name="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" fullWidth><input type="password" /></TextField>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">
            Sign In
          </Button>  
          
        </form>
        <Typography>
            New customer? <Link className={classes.linkText} to="/register">Create your account</Link>
          </Typography> 
        </Paper>
      </>
  );
}