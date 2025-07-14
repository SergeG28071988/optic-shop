import React, { Component } from "react";

export class OrderForm extends Component {
  render() {
    return (
      <div className="order-form">
        <h2>Оформление заказа</h2>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="text" placeholder="Ваша фамилия" required />
          <input type="text" placeholder="Ваш адрес" required />
          <input type="tel" placeholder="Телефон" required />
          <textarea placeholder="Комментарий к заказу" />
          <button type="submit" className="form-button">
            Отправить заказ
          </button>
        </form>
        <button onClick={this.props.onClose} className="close-button">
          Закрыть
        </button>
      </div>
    );
  }
}

export default OrderForm;
