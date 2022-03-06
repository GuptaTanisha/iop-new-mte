import * as api from '../api/index.js';
export const getSlots = (id) => async(dispatch) =>{
    try{
      console.log({id});
      const { data } = await api.getSlots(id);
      console.log({data});
      dispatch({ type: 'GETSLOTS', payload: data });
    }catch(error){
      console.log(error);
    }
  }