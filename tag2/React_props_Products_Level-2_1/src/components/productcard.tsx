interface ProductCardProps {
    img: string;
    name: string;
    price: string;
}

function ProductCard(props: ProductCardProps){
    return (
        <div className="w-2/6 flex flex-col m-2 mt-4 items-center">
            <img className="" src={props.img} alt="" />
            <div className="text-center">{props.name}</div>
            <div className="text-center">{props.price}</div>
            <button className="bg-pink-500 w-32 rounded-md">BUY NOW</button>
        </div>
    );
}

export default ProductCard;