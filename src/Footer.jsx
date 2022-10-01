import React from 'react';
import footerlogo from './Group2.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerlogo'>
            <img src={footerlogo} alt="" />
            </div>
            <div className='footermenu'>
                <div>Партнерам</div>
                <div>Разработчикам</div>
                <div>Вакансии</div>
            </div>
            <div className='link'>ООО "Интукод", 2022 </div>
            
        </div>
    );
};

export default Footer;