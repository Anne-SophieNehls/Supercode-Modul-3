import ProductCard from "./productcard";
import img1 from "../assets/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg";
import img2 from "../assets/photo-1526170375885-4d8ecf77b99f.avif";
import img3 from "../assets/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.webp";

function RenderCards(){
    const products = [
        {
            img: img1,
            name: "Cocooil",
            price: 30,
        },
        {
            img: img2,
            name: "Camera",
            price: 150,
        },
        {
            img: img3,
            name: "Aloe Vera Gel",
            price: 12.99,
        }
    ]
    return (
        <div className="grid">
            {products.map((product) => (
                <ProductCard
                key={product.name}
                img={product.img}
                name={product.name}
                price={"$" + product.price}
                />
            ))}
        </div>
        
    )
}

export default RenderCards;