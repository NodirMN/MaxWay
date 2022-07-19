import React from "react";
import './index.scss'
import google from '../../assets/img/google.png'
import apple from "../../assets/img/apple.png";
import mobile from "../../assets/img/mobile.png"
import naqsh from "../../assets/img/naqsh.png";

const Mobile = () =>{
    return(
        <div className="appmobile__box">
        <div className="appmobile">
            <div className="container">
                <div className="appmobile__title">
                    Mobil ilovamiz
                        <br /> orqali buyurtma <br />
                        berish yanada osonroq
                </div>
                <div className="appmobile__links">
                    <a href=""><img src={google} alt="" /></a>
                    <a href=""><img src={apple} alt="" /></a>
                </div>
            </div>
            <img src={naqsh} className="appmobile__line" alt="" />
            <img src={mobile} className="appmobile__img" alt="" />
        </div>
        </div>
    )
}

export default Mobile