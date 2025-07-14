import React, { Component } from 'react'
// import productsData from "./data/productsData";

// const categoryKeys = Array.from(new Set(productsData.map(p => p.category)));
export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                { key: 'all', name: 'Все товары' },
                { key: 'Очки', name: 'Очки' },
                { key: 'Линзы', name: 'Линзы' },
                { key: 'Аксессуары', name: 'Аксессуары' },
                { key: 'Оправы', name: 'Оправы' },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {
                    this.state.categories.map(el => (
                        <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                    ))
                }
            </div>
        )
    }
}

export default Categories