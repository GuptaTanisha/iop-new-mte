import swal from 'sweetalert';
function upsert(array, element) { 
    // console.log({array})
    console.log({element});
    var flag=true;
    var bookedSlot=0;
    if(element.status=="Invalid slot"){
        swal("Invalid",`${element.status}`,"error");
    }else if(element.status=="This slot is not available"){
        swal("Not avaliable",`Slot ${element.slot} is already booked for Electric Vehicle Charging Station ${element.station.stationId}`,"error");
    }else if(element.status=="No slot available"){
        swal("Not avaliable",`No slot available for Electric Vehicle Charging Station ${element.station.stationId}`,"error");
    }else{
        const i = Array.isArray(array) ? array.findIndex(ele => ele.stationId === element.station.stationId) : -1;
        // if(i!=-1 && array[i].slot.length==24){
        //     flag=false;
        // }
        console.log({array});
        if(i!=-1 && array[i].slot.length!=24) {
            array[i].slot = element.station.slot;
            console.log({bookedSlot})
        }
        else if(i==-1) {
            if(Array.isArray(array)) array.push(element);
        }
        // console.log({array})
        //  // const station = array.findIndex((el) => el.stationId === stationId);
        // // console.log({stations});
        // // if(station)console.log("station from redux"+ station + " ");
        // if(flag)
        swal("Book a slot",`Slot ${element.slot} booked for Electric Vehicle Charging Station ${element.station.stationId}`,"success");
        // else swal("Not available",`${element.status}`,"error");
    }
   
    // //setId(null);
    // // window.location.reload();
    console.log({array});
    return array;
    
  }
export default (stations=[],action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return {stations: action.payload};
        case 'UPDATE':
                return {stations: upsert(stations,action.payload)};
        case 'FORMSUBMIT':
                return {stations: upsert(stations,action.payload)};
        default:
                return stations;
    }
}
