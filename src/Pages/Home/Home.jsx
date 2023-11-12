
import { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import Cetegory from '../../Components/Catagory/Cetegory';
import PopularMenu from '../../Components/PopularMenu/PopularMenu';
import Featured from '../../Components/Featured/Featured';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Cetegory></Cetegory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;