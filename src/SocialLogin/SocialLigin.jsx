import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAxios from "../Components/Hoocks/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const SocialLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext);
    const axiosPublic = UseAxios();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;