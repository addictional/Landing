import React, { useState } from 'react';
import './style.sass'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Burger : React.FC<IProps> = ({className,onClick}) => {
    const [isCross,setCross] = useState(false)

    const handleClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        setCross(!isCross);
        if(onClick) {
            onClick(e);
        }
    }

    return (
        <div onClick={handleClick} className={`burger ${className || ''} ${isCross ? 'burger--cross' : ''}`}>
                <div className="burger__row-1"></div>
                <div className="burger__row-2"></div>
                <div className="burger__row-3"></div>
        </div>
    )
}

export default Burger;