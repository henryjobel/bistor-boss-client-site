import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Components/Hoocks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const AdminRoute = (children) => {
    const [user, loading] = useContext(AuthContext); 
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="w-56 progress"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;