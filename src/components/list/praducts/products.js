import React from "react";
import Product from "./product/product";

const Products = ({title}) => {
    return(
        <div className="products">
            <div className="products__title">
                {title}
            </div>
                <div className="row">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                </div>
        </div>
    )
}

export default Products;