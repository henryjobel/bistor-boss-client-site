import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle';
import Menuitem from '../menuItem/Menuitem';

const PopularMenu = () => {

    const [menu,setMenu] = useState([])


    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])

    return (
        <section className='mb-12'>
            <SectionTitle 
            subHeading='Populer Items' 
            heading='From Our Menu'
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-10'>
                {
                    menu.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;