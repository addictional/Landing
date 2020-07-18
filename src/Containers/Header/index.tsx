import React from 'react';
import Navigation from '@components/Menu';
import './style.sass'

const LINKS = [
    {name : 'Solution',href : '/solution'},
    {name : 'Products',href : '/product'},
    {name : 'Portfolio',href : '/portfolio'},
    {name : 'Contact',href : '/contact'}
];

const Header : React.FC<{}> = (props)=>{
    return (
    <header className="header" >
        <div className="header__top">
            <h1 className="header__top-title">Leo/-</h1>
            <Navigation links={LINKS}/>
        </div>
    </header>
    );
} 

export default Header;