import axios from 'axios';

export default axios.create({
    baseURL: "http://aran.restful.training/api/ping-pong/games",
    params: {
        key: "afdb23e4e623f2353f8baa484a70dac780864537",
    },
    headers: {
        Accept: "application/json"
    },
});