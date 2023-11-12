import React from 'react';
import SectionTitle from './../../Pages/Shared/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed bg-slate-500 bg-opacity-40 text-white pt-8 my-20'>
            <SectionTitle
            subHeading='check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2023</p>
                    <p className='uppercase'>Where i can get more?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae praesentium excepturi, eius exercitationem aliquam eveniet corrupti perferendis ab? Eaque cupiditate autem hic nobis optio nihil sint praesentium veritatis nostrum atque minima deserunt expedita, quas obcaecati quibusdam, facilis deleniti veniam molestias laboriosam fuga, fugiat velit excepturi. Voluptatum eveniet nemo natus earum.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;