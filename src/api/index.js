import axios from 'axios';

const url = 'http://localhost:8000';

export const fetchStations = () => axios.get(`${url}/stations`);
export const bookSlot = (id) => axios.post(`${url}/stations/${id}/bookSlot`);
export const getSlots = (id) => axios.get(`${url}/stations/${id}`);
export const formSubmit = (formData) => axios.post(`${url}/stations/book`,formData);
export const signin = ({email,password}) => axios.post(`${url}/api/users/signin`,{email,password});
export const register = ({name,email,password}) => axios.post(`${url}/api/users/register`,{name,email,password});

export const fetchHosts = () => axios.get(`${url}/hosts`);

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const contact = async (formData) => {
  try {
    const { data } = await axios.post(`${url}/stations/contact`, {
        headers: {
          "Access-Control-Allow-Credentials": 'true',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json;charset=utf-8",
              
          },
            data: formData
    });
    console.log({data});
    return data;
  } catch (error) {
    console.log(formData);
    console.log(error);
  }
}