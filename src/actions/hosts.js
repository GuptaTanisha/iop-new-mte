import * as api from '../api/index.js';
export const getHosts = () => async(dispatch) =>{
    try{
      const { data } = await api.fetchHosts();
      console.log({data});
      dispatch({ type: 'GETHOSTS', payload: data });
    }catch(error){
        console.log("error in hosts");
      console.log({error});
    }
  }