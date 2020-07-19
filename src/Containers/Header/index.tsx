import React from 'react';
import Navigation from '../../Components/Menu/index';
import HeaderSlider from '../HeaderSlider/index';
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
        <HeaderSlider>
            <div className="header__first_slide">
                <img src="/img/coffee.png" alt="coffee"/>
                <div className="info">
                    <h2 className="info__text"><strong>Intorducing</strong> <br/>Something hot......</h2>
                    <a className="info__button" href="shit"> Try Demo</a>
                </div>
            </div>
            <div className="header__first_slide">
                <img src="/img/coffee.png" alt="coffee"/>
                <div className="info">
                    <h2 className="info__text"><strong>Reproducing</strong> <br/>Something hot......</h2>
                    <a className="info__button" href="shit"> Try out</a>
                </div>
            </div>
            <div className="header__first_slide">
                <img src="/img/coffee.png" alt="coffee"/>
                <div className="info">
                    <h2 className="info__text"><strong>Harasment</strong> <br/>Something hot......</h2>
                    <a className="info__button" href="shit"> Try out</a>
                </div>
            </div>
        </HeaderSlider>
    </header>
    );
} 

export default Header;



  


  