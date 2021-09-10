import React from 'react';
import './style.scss';
import logo from 'assets/icons/footer-logo.svg';

function Footer() {
    return (
        <div id="footer">
            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>
            <div className="text__box">
                <p>주식회사 아트비</p>
                <p>서울시 강남구 | 전화번호 01012341234</p>
                <p>사업자등록번호 123-123-12345</p>
            </div>
        </div>
    );
}

export default Footer;
