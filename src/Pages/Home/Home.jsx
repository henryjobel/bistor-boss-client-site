
import { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import Cetegory from '../../Components/Catagory/Cetegory';
import PopularMenu from '../../Components/PopularMenu/PopularMenu';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Cetegory></Cetegory>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;