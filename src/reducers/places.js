function setplaces(payload){
    console.log("place reducer",payload);
    return payload;
}  
export default (places=[],action) => {
    switch(action.type){
        case 'SET_PLACES':
            return {places: setplaces(action.payload)};
        default:
                return places;
    }
}