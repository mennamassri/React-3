import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Data() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [show, setShow] = useState(false);

 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

      
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.log(err));
  }, []);


  const filteredProducts = selectedCategory? products.filter((product) => product.category === selectedCategory)
  : products;

  const toggleOffcanvas = () => setShow(!show);

  return (
    <div>
  
      <Button variant="primary" onClick={toggleOffcanvas}>
        Open Categories
      </Button>

      <Offcanvas show={show} onHide={toggleOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline-secondary"
              style={{ marginBottom: '10px', width: '100%' }}
              onClick={() => {
                setSelectedCategory(category);
                toggleOffcanvas(); 
              }}
            >
              {category}
            </Button>
          ))}
         
          <Button
            variant="outline-info"
            style={{ width: '100%' }}
            onClick={() => {
              setSelectedCategory('');
              toggleOffcanvas(); 
            }}
          >
            All Products
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {filteredProducts.map((product, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Link to={`/home/${product.id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Data;
