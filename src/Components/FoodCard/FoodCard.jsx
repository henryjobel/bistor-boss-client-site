import { useContext } from "react";
import { AuthContext } from './../../Providers/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSceure from "../Hoocks/useAxiosSceure";
import useCart from "../Hoocks/useCart";



const FoodCard = ({item}) => {
    const {image , price , name , recipe,_id} = item;
    const {user} = useContext(AuthContext)
    const naviGtae = useNavigate();
    const location = useLocation();
    const aciosSceure = useAxiosSceure()
    const [,refetch] = useCart();
    // eslint-disable-next-line no-unused-vars
    const handleAddToCart = ()=>{
        if(user && user.email){
            // todo
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            aciosSceure.post('/carts',cartItem)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch the card
                    refetch();
                }
            })
        }
        else{

            Swal.fire({
                title: "You are not Login",
                text: "Please Login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login"
              }).then((result) => {
                if (result.isConfirmed) {
                //   seend user to the login page
                naviGtae('/login',{state: { state: { from: location } }})
                }
              });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions ">
                        <button  onClick={()=> handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200 border-orange-400">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;