
import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import OrderMenu from "../Pages/OderMenu/OrderMenu";
import Order from "../Pages/Order/Order/Order";
import LOgin from "../Pages/Login/LOgin";

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
          element:<Order></Order>
        },
        {
          path: '/login',
          element:<LOgin></LOgin>
        }
        
      ]
    },
  ]);