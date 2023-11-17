import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Components/Hoocks/useCart";
import useAdmin from "../../Components/Hoocks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400">
            <ul className="p-4 menu">
                {
                    isAdmin ? <>
                    <li>
                    <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/addItem">
                        <FaUtensils></FaUtensils>
                        Add Item</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/mannageItem">
                        <FaList></FaList>
                        Mannage Items </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users">
                        <FaUser></FaUser>
                        All users</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings">
                        <FaBook></FaBook>
                        Mannage Bookings</NavLink>
                </li>
                    </>
                    :
                    <>
                    <li>
                    <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                        User Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length}) </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings">
                        <FaList></FaList>
                        My Bookings</NavLink>
                </li>
                    </>
                }
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default DashBoard;