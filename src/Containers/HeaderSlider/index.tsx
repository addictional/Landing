import React , {useState,useEffect} from 'react';
import {debounce,throttle} from 'lodash';
import './style.sass';

const HeaderSlider : React.FC = (props) => {
    const [WRAPPER_WIDTH,setWidth] = useState(window.innerWidth < 1279 ? window.innerWidth : 1024);
    let childs : any = <div key={0}  className="header__slider-element">{props.children}</div>;
    if(React.Children.count(props.children)) {
        const lenght = React.Children.count(props.children);
        childs = React.Children.toArray(props.children);
        childs.unshift(childs[lenght-1]);
        childs.push(childs[1]);
        childs = React.Children.toArray(childs).map((element,key)=>{
            return <div key={key} className="wrapper-element">{element}</div>
        })
    }
    const length = React.Children.count(childs);
    const [x,translate] = useState(-WRAPPER_WIDTH);
    const [key,changeKey] = useState(1);
    const [block ,setBlock] = useState(false);
    const [transitionInProgress, setTransitionInProgress] = useState(false);

    const onResize = ()=>{
        setWidth(window.innerWidth < 1279 ? window.innerWidth : 1024);
        changeKey(1);
        translate(-(window.innerWidth < 1279 ? window.innerWidth : 1024))
        console.log(x,key);
    }
    

    const _trottledOnResize = throttle(onResize,400);

    useEffect(()=>{
        window.addEventListener('resize',_trottledOnResize)
        return () =>{
            window.removeEventListener('resize',_trottledOnResize);
        }
    })

    const swipeRight = () => {
        if(transitionInProgress) {
            return;
        }
        setTransitionInProgress(true);
        changeKey(key+1);
        translate(x-WRAPPER_WIDTH);
    }

    const swipeLeft = () => {
        if(transitionInProgress) {
            return;
        }
        setTransitionInProgress(true);
        changeKey(key-1);
        translate(x+WRAPPER_WIDTH);
    }

    const blockAnimation = () => {
        if(key === length-1 || key === 0) {
            setBlock(true);
        } else {
            setTransitionInProgress(false);
        }
    }


    const checkKey = () => {
        blockAnimation();
        if(key === length-1) {
            changeKey(1);
            translate(-WRAPPER_WIDTH);
            setTimeout(()=>{
                setBlock(false);
            })
            setTransitionInProgress(false);
        }
        if(key === 0) {
            changeKey(length-2);
            translate(-WRAPPER_WIDTH*(length-2));
            setTimeout(()=>{
                setBlock(false);
            })
            setTransitionInProgress(false);
        }
    }

    return (
        <div className="header__slider">
            <svg onClick={swipeLeft}  className="header__slider__button header__slider__button--left" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px" >
            <path fillRule="evenodd"  opacity="0.22" fill="rgb(255, 255, 255)" d="M24.549,50.000 C10.991,50.000 -0.000,39.009 -0.000,25.451 C-0.000,11.893 10.991,0.902 24.549,0.902 C38.107,0.902 49.098,11.893 49.098,25.451 C49.098,39.009 38.107,50.000 24.549,50.000 ZM24.486,4.175 C12.840,4.175 3.399,13.616 3.399,25.262 C3.399,36.908 12.840,46.349 24.486,46.349 C36.132,46.349 45.573,36.908 45.573,25.262 C45.573,13.616 36.132,4.175 24.486,4.175 ZM29.839,16.006 L29.839,34.518 L15.869,25.262 L29.839,16.006 Z"/>
            </svg>
            <div className="header__slider__content">
                <div className={`wrapper ${block ? 'wrapper--block-animation' : ''}`} onTransitionEnd={checkKey} style={{transform :`translateX(${x}px)`}}>
                    {childs}
                </div>
            </div>
            <svg onClick={swipeRight} className="header__slider__button header__slider__button--rigth" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px" >
            <path fillRule="evenodd"  opacity="0.22" fill="rgb(255, 255, 255)" d="M24.545,50.000 C10.987,50.000 -0.004,39.009 -0.004,25.451 C-0.004,11.893 10.987,0.902 24.545,0.902 C38.103,0.902 49.094,11.893 49.094,25.451 C49.094,39.009 38.103,50.000 24.545,50.000 ZM24.608,4.175 C12.962,4.175 3.521,13.616 3.521,25.262 C3.521,36.908 12.962,46.349 24.608,46.349 C36.254,46.349 45.695,36.908 45.695,25.262 C45.695,13.616 36.254,4.175 24.608,4.175 ZM19.255,16.006 L33.225,25.262 L19.255,34.518 L19.255,16.006 Z"/>
            </svg>
        </div>
    )
}


export default HeaderSlider;


