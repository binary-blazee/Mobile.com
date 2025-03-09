import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
function Shop() {
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState("All");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("../src/helpers/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));

      const status = localStorage.getItem("status");
      setLoggedIn(status === "Access Granted");
    }, []);


  const categoryProducts =
    productCategory === "All"
      ? products
      : products.filter((product) => product.category === productCategory);

  const addToCart=(product)=>{
    if(!loggedIn){
        alert("Please login to add products to cart")
        return
    }
    const cartExisting=JSON.parse(localStorage.getItem('cart')) || []

    const productExisting=cartExisting.find((item)=>item.id == product.id)

    if(productExisting){
        productExisting.quantity +=1
    }
    else{
        cartExisting.push({...product,quantity:1})
    }

    localStorage.setItem("cart", JSON.stringify(cartExisting));

    alert("Product added to cart!");
  }
  

  return (
    <>
      <div className="flex justify-between p-10 font-medium select-none">
        <div>
          <h1 className="text-red-500">
            {productCategory === "All"
              ? "Shop All Products"
              : `Shop ${productCategory}`}
          </h1>
        </div>
        <div className="flex">
          <h1 className="px-5">Categories:</h1>
          <select
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option>All</option>
            <option>Mobile</option>
            <option>Tempered Glass</option>
            <option>Backcover</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-10 select-none">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300 bg-[#edf2f4]"
          >
            <img draggable='false'
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <strong><p className="text-gray-700">₹ {product.price}</p></strong>
            <button className="bg-[#fc2c36] px-3 py-1 rounded cursor-pointer text-white" 
        onClick={() => addToCart(product)}>
  Add to Cart
</button>

          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Shop;
