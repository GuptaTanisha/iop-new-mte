import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import {Grid, Badge, Typography,List,ListItem} from '@material-ui/core';
const Slot = () => {
    const classes = useStyles();
    // console.log("slot");
    const slotsFromState = useSelector((state) => state.slots);
    var {slots} = slotsFromState;
    // console.log(slots);

    return (
        <>
        {
            slots?.length && <Typography variant="h6">Slots left: </Typography>
        }
        <List className={classes.flexContainer}>
        {
        slots?.length ? (
                   slots.map((slot,i) => (
                       <ListItem className={classes.li} color="textSecondary" variant="body2"><Badge badgeContent={slot} color="primary"></Badge></ListItem>
                   ))
            ):(<div></div>)
        }
        </List>
        </>
       );
}

export default Slot; 