import React, { useEffect, useState } from 'react';
import Navigation from '../../Components/Menu/index';
import HeaderSlider from '../HeaderSlider/index';
import './style.sass'

const LINKS = [
    {name : 'Solution',href : '/solution'},
    {name : 'Products',href : '/product'},
    {name : 'Portfolio',href : '/portfolio'},
    {name : 'Contact',href : '/contact'}
];

let prevScroll = 0;

const FIXED_MENU_CLASS = 'header__top__fixed';
const Header : React.FC<{}> = (props)=>{
    const [visibility,menuVisibility] = useState(false);
    const scrollHandler = (e : Event) =>{
        let st = window.pageYOffset
        if (st > prevScroll){
            if(visibility) {
                menuVisibility(false);
            }
        } else {
            const commonHeader = document.querySelector('.header__top');
            const height = commonHeader ? commonHeader.clientHeight : 0;
            if(!visibility && st > height) {
                menuVisibility(true);
            }else if( st < height) {
                    menuVisibility(false);
            }
        }
        prevScroll = st;
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler);
        return ()=>{
            window.removeEventListener('scroll',scrollHandler);
        }
    })
    return (
    <header className="header" >
        <div className={`${FIXED_MENU_CLASS} ${visibility ? FIXED_MENU_CLASS+'--show' : FIXED_MENU_CLASS+'--hide'}`}>
            <h1 className="header__top__fixed-title">Leo/-</h1>
            <Navigation links={LINKS}/>
        </div>
        <div className="header__top">
            <h1 className="header__top-title">Leo/-</h1>
            <Navigation containerClass="header__top" links={LINKS}/>
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



  


  