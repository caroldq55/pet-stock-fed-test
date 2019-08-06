import React from 'react';
import Product from "../Product";
import './index.css'

class ProductsList extends React.Component {
    render() {
        return (
            <div>
                <div className="row adjust-margin">
                    {this.props.list.map((product) =>
                        <Product
                            product={product}
                            key={product.sku}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default ProductsList;
