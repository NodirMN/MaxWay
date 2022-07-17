import React from "react";
import './filter.scss'
import filtr from '../../assets/img/filtr.png'

const Filter = () =>{
    const btnList = [
        "Barchasi",
        "Pitsa",
        "Burger",
        "Kombo",
        "Salat",
        "Shirinliklar",
        "Ichimliklar",
    ];
    const btnArr = btnList.map((btn,index)=>{
        return(
        <button className={index === 0? 'active': ''} key={index}>
            {btn}
        </button>
        ) 
    })
    return(
        <div className="container">
            <div className="filtr">
            {btnArr}
            <button className="filtr__more">
                <img src={filtr} alt="" />
                Filtr
            </button>
            </div>
        </div>
    )
}

export default Filter