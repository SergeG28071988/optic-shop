import React from "react";
import logo from "../images/logo_1.png";
import { FaTelegramPlane, FaWhatsapp, FaVk } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>

        <div className="social-icons">
          <button aria-label="Telegram" className="icon-button">
            <FaTelegramPlane />
          </button>
          <button aria-label="WhatsApp" className="icon-button">
            <FaWhatsapp />
          </button>
          <button aria-label="VK" className="icon-button">
            <FaVk />
          </button>
        </div>

        <div className="footer-info">
          <div className="rights">
            © 2025 Магазин оптики «Glazastic». Все права защищены.
          </div>
          <div className="address">г. Москва, ул. Ленина, д. 12</div>
          <a href="#products" className="footer-btn">
            Заказать
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
