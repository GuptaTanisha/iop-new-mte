export const setGlobalPlaces = (places) => async(dispatch) => {
    try{
      dispatch({type: 'SET_PLACES',payload: places});
    }catch(error){
      console.log(error);
    }
  }