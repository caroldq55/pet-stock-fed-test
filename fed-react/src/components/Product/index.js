import React from 'react';
import './index.scss'

class Product extends React.Component {
    render() {
        const {productImage, name, listPrice, fullPrice, img, href} = this.props.product;
        const onSale = listPrice < fullPrice;
        return (
            <div className="product-item col-6 col-md-3 ">
                <img
                    src={img}
                    className="product-img"
                    alt={productImage}
                />
                {onSale && <img className={'sale-badge'} src={process.env.PUBLIC_URL + '/images/sale.jpg'} />}
                <div className="product-info">
                    <a className="product-name" href={href}>{name}</a>
                    <div className={'price'}>
                        {
                            onSale ?
                                <React.Fragment>
                                    <div className={'price-before'}>Was <del>${fullPrice}</del></div>
                                    <div className={'price-now'}>Now ${listPrice}</div>
                                </React.Fragment>
                                :
                                <div>${listPrice}</div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default Product;
