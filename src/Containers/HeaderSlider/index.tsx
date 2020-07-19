import React , {useState} from 'react';
import './style.sass';

const HeaderSlider : React.FC = (props) => {
    const WRAPPER_WIDTH = 1024;
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
    const [x,translate] = useState(-1024);
    const [key,changeKey] = useState(1);
    const [block ,setBlock] = useState(false);
    const [transitionInProgress, setTransitionInProgress] = useState(false);


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
                <path fillRule="evenodd"  d="M0.255,18.518 L0.255,0.006 L14.225,9.262 L0.255,18.518 Z"/>
                <path fillRule="evenodd"   d="M24.545,50.000 C10.987,50.000 -0.004,39.009 -0.004,25.451 C-0.004,11.893 10.987,0.902 24.545,0.902 C38.103,0.902 49.094,11.893 49.094,25.451 C49.094,39.009 38.103,50.000 24.545,50.000 ZM24.608,4.175 C12.962,4.175 3.521,13.616 3.521,25.262 C3.521,36.908 12.962,46.349 24.608,46.349 C36.254,46.349 45.695,36.908 45.695,25.262 C45.695,13.616 36.254,4.175 24.608,4.175 Z"/>
            </svg>
            <div className="header__slider__content">
                <div className={`wrapper ${block ? 'wrapper--block-animation' : ''}`} onTransitionEnd={checkKey} style={{transform :`translateX(${x}px)`}}>
                    {childs}
                </div>
            </div>
            <svg onClick={swipeRight} className="header__slider__button header__slider__button--rigth" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50px" height="50px" >
                <path fillRule="evenodd"  d="M0.255,18.518 L0.255,0.006 L14.225,9.262 L0.255,18.518 Z"/>
                <path fillRule="evenodd"   d="M24.545,50.000 C10.987,50.000 -0.004,39.009 -0.004,25.451 C-0.004,11.893 10.987,0.902 24.545,0.902 C38.103,0.902 49.094,11.893 49.094,25.451 C49.094,39.009 38.103,50.000 24.545,50.000 ZM24.608,4.175 C12.962,4.175 3.521,13.616 3.521,25.262 C3.521,36.908 12.962,46.349 24.608,46.349 C36.254,46.349 45.695,36.908 45.695,25.262 C45.695,13.616 36.254,4.175 24.608,4.175 Z"/>
            </svg>
        </div>
    )
}


export default HeaderSlider;