import React from "react";
import { useState, useEffect } from 'react'

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
      .filter((item) => item.quantity > 0); 
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const buyNow = () => {
    alert("You order has been confirmed...");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹ {item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 px-2 py-1 rounded"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 px-2 py-1 rounded"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="bg-red-400 text-white px-5 py-2 rounded w-full mt-4"
            onClick={buyNow}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
