/*import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (!error?.response?.status) {
        //eror needed to be handled: Error: Network Error net::ERR_NETWORK_CHANGED
    } else if (error.response.status === 500) {
        alert("External Web server does not responding. Please try again later.");
    } else if (error.response.status === 404) {
        alert("Given input is not valid for the request.");
    }
    return error;
});

export default client;*/