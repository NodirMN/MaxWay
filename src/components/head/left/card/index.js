import React from "react";
import './card.scss'
import fire from '../../../../assets/img/fire.png'
import pizzaf from "../../../../assets/img/pizzaf.png";
import cardcombo from "../../../../assets/img/maxkvadrat.png";

const Card = ({title,textA,textB,bg,img}) =>{
    
    return (
        <div className={'card '+bg}>
            <div className="card__top">
                <img src={fire} alt="" />
                {title}
            </div>
                <div className="card__title">
            <span>{textA} </span>
            <span>{textB}</span>
            </div>
            <img className="card__bg" alt="" src={img==='pizzaf' ? pizzaf: cardcombo} />
        </div>
        );
}

export default Card