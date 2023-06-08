import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
    { id: 4, name: 'Product 4', price: 12.99 },
    { id: 5, name: 'Product 5', price: 8.99 },
    { id: 6, name: 'Product 6', price: 15.99 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleNewProduct = (event) => {
    const { name, value } = event.target;
    setNewProduct({...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const newProducts = [...products, {...newProduct, id: products.length + 1 }];
    setProducts(newProducts);
    setNewProduct({ name: '', price: '' });
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id!== id);
    setProducts(newProducts);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">E-commerce</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}€</p>
                <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row my-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={newProduct.name} onChange={handleNewProduct} />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" id="price" name="price" value={newProduct.price} onChange={handleNewProduct} />
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={handleAddProduct}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;