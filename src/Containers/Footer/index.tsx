import React from 'react';
import Navigation from '../../Components/Menu';
import './style.sass';

const MENU_1 = [
    {name : 'About us',href : '/about'},
    {name : 'Why us',href : '/product'},
    {name : 'Customer Stories',href : '/portfolio'},
    {name : 'Press Resources',href : '/portfolio'},
    {name : 'Press Releases',href : '/portfolio'},
    {name : 'Contact us',href : '/contact'}
];

const Footer : React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-nav">
                    <p>About us</p>
                    <Navigation  links={MENU_1}/>
                </div>
                <div className="footer-nav footer-nav--second">
                    <p>About us</p>
                    <Navigation links={MENU_1}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;