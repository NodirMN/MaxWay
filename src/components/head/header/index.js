import React from "react";
import logo from '../../../assets/img/logo.png'
import './index.scss'
const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <a href="#"><img src={logo} /></a>
                <ul className="header__menu">
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="#">Bolalar uchun</a></li>
                    <li><a href="#">Filiallar</a></li>
                </ul>
                <div className="header__contact">
                    <a href="tel:998712005400" className="header__phone">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.318 11.634C8.66952 10.6957 7.30434 9.33048 6.366 7.682L7.604 6.798C8.016 6.50378 8.14311 5.94807 7.9 5.504C7.12708 4.08968 6.66222 2.52779 6.536 0.921C6.49479 0.400934 6.0607 -6.53648e-05 5.539 2.36236e-08H1.077C0.564126 -0.000110528 0.134313 0.387801 0.082 0.898C0.027 1.428 0 1.962 0 2.5C0 11.06 6.94 18 15.5 18C16.038 18 16.572 17.973 17.102 17.918C17.6122 17.8657 18.0001 17.4359 18 16.923V12.461C18.0001 11.9393 17.5991 11.5052 17.079 11.464C15.4722 11.3378 13.9103 10.8729 12.496 10.1C12.0519 9.85689 11.4962 9.984 11.202 10.396L10.318 11.634ZM5.744 5.668L3.844 7.025C4.05628 7.57134 4.30691 8.10199 4.594 8.613L4.627 8.671C5.74328 10.6324 7.36758 12.2567 9.329 13.373L9.387 13.406C9.89801 13.6931 10.4287 13.9437 10.975 14.156L12.332 12.256C13.4959 12.7952 14.7312 13.1646 16 13.353V15.99C15.834 15.997 15.667 16 15.5 16C8.044 16 2 9.956 2.001 2.5C2.001 2.333 2.004 2.166 2.01 2H4.647C4.83535 3.26884 5.20478 4.50409 5.744 5.668Z" fill="#F1B301"/>
                        </svg>
                        <span className="header__phone--number">
                            <span className="header__phone--top">
                                    (+99871)   
                            </span>
                            <span className="header__phone--bottom">
                                200-54-00
                            </span>
                        </span>
                    </a>
                    <a href="#" className="header__card">
                        <span className="header__card--count" data-count='0'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM15 6V8H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" fill="#F1B301"/>
                            </svg>
                        </span>
                        <span className="header__card--info">
                            <span className="header__card--top">Korzina</span>
                            <span className="header__card--bottom">
                                125,400 UZS
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header