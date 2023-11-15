import { useQuery } from "@tanstack/react-query";
import useAxiosSceure from "./useAxiosSceure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const useCart = () => {
    // tan stack qurey
    const axiosSecure = useAxiosSceure();
    const { user } = useContext(AuthContext);
    const { refetch,  data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart,refetch]
};

export default useCart;