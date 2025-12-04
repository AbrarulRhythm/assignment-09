import React from 'react';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://toy-topia-api-server.vercel.app/'
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;