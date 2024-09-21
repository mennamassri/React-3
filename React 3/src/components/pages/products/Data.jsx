
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function Data() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())  
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);
console.log(products);

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px" }}>
            {products.map((product, index) => (
                <Card key={index} style={{ width: '18rem', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                        <Card.Img 
                            variant="top" 
                            src={product.image} 
                            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} 
                        />
                    </div>
                    <Card.Body style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ flexGrow: 1 }}>
                            <Card.Title style={{ minHeight: "60px" }}>{product.title}</Card.Title>
                            <Card.Text style={{ minHeight: "60px" }}>
                                Some quick example text to build on the card title and make up the bulk of the cards content.
                            </Card.Text>
                        </div>
                        <Link to={`/home/${product.id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
