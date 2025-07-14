import React, { Component } from "react";
import contactsImage from "../images/contact_woman.png";
import bubblesImage from "../images/bubbles.png";

export class Contacts extends Component {
  state = {
    name: "",
    phone: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const { name, phone, message } = this.state;

    // Сбор данных в объект
    const formData = {
      name,
      phone,
      message,
    };

    console.log("Данные формы:", formData);

    alert("Форма успешно отправлена!");

    this.setState({
      name: "",
      phone: "",
      message: "",
    });
  };

  render() {
    const { name, phone, message } = this.state;
    return (
      <section className="contact-section" id="contacts">
        <div className="container">
          <div className="common-title">
            {" "}
            Свяжитесь с <span>НАМИ</span>
          </div>
          <img src={bubblesImage} alt="bubbles" class="contact-bg-image" />
          <div className="contact-block">
            <div className="contact-form">
              <div className="contact-form-text">
                Откройте для себя четкость зрения с нашими премиальными очками и
                линзами! Подберите идеальный аксессуар и насладитесь качеством
                каждого взгляда.
              </div>
              <div className="contact-form-inputs">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Ваш телефон"
                  value={phone}
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  id="text"
                  name="message"
                  rows="4"
                  placeholder="Ваше сообщение"
                  value={message}
                  onChange={this.handleChange}
                  required
                ></textarea>
                <button
                  className="submit-btn"
                  id="contact-action"
                  onClick={this.handleSubmit}
                >
                  Отправить
                </button>
              </div>
            </div>
            <div className="contact-block-image">
              <img
                src={contactsImage}
                alt="Contact Visual"
                className="contact-optics"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
