
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Foooter/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('singup')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;