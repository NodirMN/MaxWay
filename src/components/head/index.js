import React from "react";
import Header from "./header";
import './index.scss'
import burger from '../../assets/img/bigburger.png'
import HeadLeft from "./left";
const Head = () => {
    return (
        <div className="head">
            <Header />
            <div className="container">
                <div className="row">
                    <HeadLeft />
                    <img className="bigburger" src={burger}  />
                </div>
            </div>
        </div>
    );
}

export default Head