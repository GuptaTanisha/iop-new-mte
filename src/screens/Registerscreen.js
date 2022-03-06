import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {Grid,InputLabel,Badge,Select,ListItem,MenuItem, Box} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import swal from 'sweetalert';
import Header from '../components/Header/Header';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { register, signin } from '../actions/userActions';
import { BrowserRouter,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox/LoadingBox';
import MessageBox from '../components/MessageBox.js/MessageBox';

export default function Registerscreen() {

    let navigate = useNavigate();


    const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
    const {userInfo ,loading,error} = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(password!=confirmPassword){
      swal("Error","Passwords don't match","success")
    }else{
      dispatch(register(name, email,password));
    }
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
        <Typography variant="h4">Register</Typography>
          <div>
          {
              loading && <LoadingBox></LoadingBox>
          }
          {
              error && <MessageBox variant="danger">{error}</MessageBox>
          }
          </div>
          <TextField name="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} label="Name" fullWidth />
          <TextField name="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth />
          <TextField type="password" name="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" fullWidth />
          <TextField type="password" name="Confirm Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="Confirm Password" fullWidth />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">
            Register
          </Button>  
          
        </form>
        <Typography>
            Already have an account? <Link className={classes.linkText} to="/signin">Login</Link>
          </Typography> 
        </Paper>
      </>
  );
}