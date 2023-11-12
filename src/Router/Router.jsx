
import {createBrowserRouter,} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import OrderMenu from "../Pages/OderMenu/OrderMenu";

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
        }
      ]
    },
  ]);