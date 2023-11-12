import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../Components/Hoocks/UseMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCetegory from '../../Components/MenuCetegory/MenuCetegory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'

const OrderMenu = ({items}) => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle
            subHeading='dont miss'
            heading='todays Offer'
            ></SectionTitle>
            {/* offeerd menu items */}
            <MenuCetegory items={offered}></MenuCetegory>
            {/* dessert items */}
            <MenuCetegory items={dessert} title='Dessert' img={dessertImg}></MenuCetegory>
            {/* salad items */}
            <MenuCetegory img={saladImg} items={salad} title='Salad'></MenuCetegory>
            <MenuCetegory items={soup} img={saladImg} title='Soup'></MenuCetegory>
            <MenuCetegory items={pizza} img={pizzaImg} title='Pizza'></MenuCetegory>
        </div>
    );
};

export default OrderMenu;