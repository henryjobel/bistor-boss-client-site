import axios from "axios";

 const axiosSceure =  axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxiosSceure = () => {
    return axiosSceure
};

export default useAxiosSceure;