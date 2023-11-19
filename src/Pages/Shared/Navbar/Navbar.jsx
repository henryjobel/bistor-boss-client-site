import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Providers/AuthProvider';
import { FaLuggageCart } from "react-icons/fa";
import useCart from "../../../Components/Hoocks/useCart";

const Navbar = () => {
    const { user, singOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleOut = () => {
        singOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li>
            <Link to='/dashboard/cart'>
                <button className="btn">
                    <FaLuggageCart/
                    
                    >
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {
            user ?
                <>
                    <button onClick={handleOut} className="btn btn-active btn-ghost">Sing Out</button>

                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>

    return (
        <div>
            <div className="fixed z-10 max-w-screen-xl mx-auto text-white bg-black navbar bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="text-xl normal-case btn btn-ghost">Bistro Boss</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;