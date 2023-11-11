
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Foooter/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;