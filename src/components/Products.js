import React, { Component } from 'react'
import Product from './Product'


export class Products extends Component {
    
    render() {
        
        return (
            <div className='products' id='products'>                
                {this.props.products.map(el => (
                    <Product key={el.id} product={el} onAdd={this.props.onAdd} onShowProduct={this.props.onShowProduct} />
                ))}
            </div>
        )
    }
}

export default Products
