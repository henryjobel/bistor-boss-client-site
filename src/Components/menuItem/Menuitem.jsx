
const Menuitem = ({item}) => {

    const {image , price , name , recipe} = item

    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: ' 0 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="font-bold">{name} -----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default Menuitem;