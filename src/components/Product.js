import React, { Component } from 'react';

export class Product extends Component {
    render() {
        const { img, title, desc, price, category } = this.props.product;

        return (
            <div className='product'>
                <img src={'./img/' + img} alt={title} onClick={() => this.props.onShowProduct(this.props.product)} />
                <h2>{title}</h2>
                <p>{desc}</p>
                <b>{price} ₽</b>
                <p>{category}</p>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.product)}>Заказать</div>
            </div>
        );
    }
}

export default Product;
