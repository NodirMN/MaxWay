import React from "react";
import img from '../../../../assets/img/pizza_gavaya.png'
import fire from "../../../../assets/img/fire.png";
import cheese from "../../../../assets/img/cheese.png";

import './product.scss'
const Product  = () =>{
    return(
        <div className="col-6">
            <div className="product">
                <div className="product__img">
                <div className="product__status">
                    <img src={fire} alt="" />
                </div>
                <img src={img} alt="" />
                </div>
            <div className="product__info">
                <div className="product__title">Gavaya
                    <div className="product__type">
                        <img src={cheese} alt="" />
                    </div>
            </div>
                <div className="product__text">Горячая закуска с митболамииз говядины, томатами, моцареллой и соусом чипотле
                    </div>
                    <div className="product__price">45,000 UZS
                    <button className="product__card"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product