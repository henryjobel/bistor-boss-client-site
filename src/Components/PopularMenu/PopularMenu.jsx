import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle';
import Menuitem from '../menuItem/Menuitem';
import useMenu from '../Hoocks/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu,setMenu] = useState([])


    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    return (
        <section className='mb-12'>
            <SectionTitle 
            subHeading='Populer Items' 
            heading='From Our Menu'
            ></SectionTitle>
            <div className='grid lg:grid-cols-2 gap-10'>
                {
                    popular.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <div className='text-center'>
            <button className='btn btn-outline border-0 border-b-4 mt-4 text-yellow-400'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;