import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let amount = 0;
  props.orders.forEach((el) => {
    amount += el.price * el.quantity;
  });

  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={el.id}
          product={el}
          onDelete={props.onDelete}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
        />
      ))}
      <p className="amount">Сумма: {amount} ₽</p>
    </div>
  );
};


const showNothing = () => {
    return (<div className='empty'>
        <h2>В корзине нет товаров!!!</h2>
    </div>)
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false);

    return (
      <main className="main">
        <header className="header">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <nav className="menu">
              <ul>
                <li>
                  <a href="#products">НАШ каталог</a>
                </li>
                <li>
                  <a href="#about-us">Про НАС</a>
                </li>
                <li>
                  <a href="#contacts">НАШИ контакты</a>
                </li>
              </ul>
            </nav>
            <FaShoppingCart
              className={`shop-cart-btn ${cartOpen && "active"}`}
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
            />

            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
                <button onClick={props.toggleOrderForm} className="main-button">
                  Оформить
                </button>
              </div>
            )}
          </div>
          <div className="presentation"></div>
        </header>
      </main>
    );
}