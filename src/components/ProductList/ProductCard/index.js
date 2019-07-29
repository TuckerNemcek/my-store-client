import React from 'react'
import styles from './product-card.module.scss'
import { Link } from 'react-router-dom'

import Card from '../../Card'

const ProductCard = ({ name, img_url, price, description, id}) => {
    debugger
    return (
        <Link to={`/products/${id}`}>
            <Card>
                <h2>{name}</h2>
                <img classame={styles.image} src={img_url} alt='product_image'/>
                <h3>Price: ${price / 100}.00</h3>
            </Card>
        </Link>
    )
    
}

export default ProductCard