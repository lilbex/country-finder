import axios from 'axios';

const BASE_URL = 'https://country-lookup-server.herokuapp.com/api/v1';
// const BASE_URL = 'https://restcountries.eu/rest/v2/';

export default axios.create({
  baseURL: BASE_URL,
});


export const headers = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token 
    }
  }
}