
import { Link } from 'react-router-dom';
import Cover from '../../Pages/Shared/Cover/Cover';
import Menuitem from '../menuItem/Menuitem';

const MenuCetegory = ({items,title,img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid lg:grid-cols-2 gap-10 mt-16+'>
                {
                    items.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></Link>
        </div>
    );
};

export default MenuCetegory;