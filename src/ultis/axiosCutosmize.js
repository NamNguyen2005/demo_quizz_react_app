import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8081/',
});

export default instance;

// res  + req with interceptors
instance.interceptors.response.use(function (response) {
    return response && response.data ? response.data : {};
  }, function (error) {
    return error && error.response && error.response.data ?  error.response.data : {};
  });