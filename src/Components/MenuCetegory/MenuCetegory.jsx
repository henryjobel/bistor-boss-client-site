
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
        </div>
    );
};

export default MenuCetegory;