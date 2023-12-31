
import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import OrderMenu from "../Pages/OderMenu/OrderMenu";
import Order from "../Pages/Order/Order/Order";
import LOgin from "../Pages/Login/LOgin";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import SignUp from "../Pages/Register/SignUp";
import PrivateRoute from './PrivateRoute';
import Additems from "../Pages/DashBoard/Cart/AddItems/Additems";
import AllUsers from './../Pages/DashBoard/Cart/Allusers/AllUsers';
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/MannageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";


  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<OrderMenu></OrderMenu>
        },
        {
          path: '/order/:cetegory',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: '/login',
          element:<LOgin></LOgin>
        },
        {
          path: 'register',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        // normal user routs
        {
          path: 'cart',
          element:<Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // admin routes
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><Additems></Additems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);