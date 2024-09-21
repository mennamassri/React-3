import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './productDeatils.css'
export default function ProductDetails() {
    const { id } = useParams(); 
    const [product, setProduct] = useState();

    useEffect(() => {
       
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) {
        return  <div className="loader"></div> 
    }

    return (
        <div className="products">
        <div className="product" >
              <div className="productImage">
              <img src={product.image} alt={product.title}  />
              </div>
           <div className="productInfo">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button>Buy Now</button>
            <button >Add to the cart</button>
            </div> 
        </div>
        </div>
    );
}
