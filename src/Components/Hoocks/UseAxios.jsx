import axios from "axios";


const UseAxios = () => {
    const axiosPublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiosPublic;
};

export default UseAxios;