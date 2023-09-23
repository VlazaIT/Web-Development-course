import { useState } from "react";
import './App.css'

function ShoppingCart() {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  });

  function handleAddItem(item) {
    const nextItemId = cart.items.length + 1;

    setCart((prevCart) => ({
      items: [
        ...prevCart.items,
        {
          id: nextItemId,
          ...item
        }
      ],
      total: prevCart.total + item.price
    }));
  }

  function handleRemoveItem(item) {
    setCart((prevCart) => ({
      items: prevCart.items.filter((i) => i.id !== item.id),
      total: prevCart.total - item.price
    }));
  }

  function handleClearCart() {
    setCart({
      items: [],
      total: 0
    });
  }

  return (
    <div className="shopping-cart">
      <h1 className="h1">Shopping Cart</h1>

      <button onClick={() => handleAddItem({ name: "Apple", price: 1 })}>
        Add Apple
      </button>
      <button onClick={() => handleAddItem({ name: "Orange", price: 2 })}>
        Add Orange
      </button>
      <button onClick={() => handleClearCart()}>Clear cart</button>

      <p>Total: ${cart.total}</p>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button  className="del-button" onClick={() => handleRemoveItem(item)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;