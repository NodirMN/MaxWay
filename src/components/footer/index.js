import React from "react";
import './index.scss'
import logo from '../../assets/img/logo.png'
const Footer = () =>{
    return(
        <footer className="footer">  
            <div className="container">
                <div className="footer__top">
                    <img src={logo} alt="" />
                    <div className="footer__item">
                        <div className="footer__title">
                            Asosiy
                        </div>
                        <ul>
                            <li><a href="">Konpaniya haqida</a></li>
                            <li><a href="">Filiyallar</a></li>
                            <li><a href="">Bolalar uchun</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__title">
                            Qoshimcha
                        </div>
                        <ul>
                            <li><a href="">Menyu</a></li>
                            <li><a href="">Bo'nusli karta</a></li>
                            <li><a href="">Bu qanday ishlaydi</a></li>
                        </ul>
                </div>
                <div className="footer__contact">
                    <div className="footer__title">Biz bilan aloqa</div>
                    <div className="footer__phone">
                        (+998 71) 200-54-00
                    </div>
                    <div className="footer__adress">
                        100011, Toshkent sh. Shayxontohur tumani,
                        Zarqaynar ko’chasi, 3B-uy
                    </div>
                        </div>
                    </div>
                <div className="footer__bottom">
                        <div className="footer__copy">© Maxway, 2020</div> 
                        <div className="footer__social">
                            <a href=""><img src={require('../../assets/img/youtube.png')} alt="" /></a>
                            <a href=""><img src={require('../../assets/img/facebook.png')} alt="" /></a>
                            <a href=""><img src={require('../../assets/img/insta.png')} alt="" /></a>
                            <a href=""><img src={require('../../assets/img/tg.png')} alt="" /></a>
                            <a href=""><img src={require('../../assets/img/tiktok.png')} alt="" /></a>
                        </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer