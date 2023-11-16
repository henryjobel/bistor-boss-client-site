
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
import Allusers from "../Pages/DashBoard/Cart/Allusers/Allusers";

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
      path: 'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        },

        // admin routes
        {
          path: 'users',
          element: <Allusers></Allusers>
        }
      ]
    }
  ]);