import React from 'react';
import './style.sass';
interface ILink {
    name : string;
    href : string;
}

interface ILinks extends Array<ILink>{};

interface IProps {
    links : ILinks;
    containerClass? : string; 
}

const DEFAUL_BLOCK_CLASS = 'navigation';


const Menu : React.FC<IProps> = ({links,containerClass} : IProps) =>{
    const BLOCK_CLASS = containerClass ? `${containerClass} ${DEFAUL_BLOCK_CLASS}` : DEFAUL_BLOCK_CLASS;
    const items = links.map(({name,href},key) => <a key={key} className={`${DEFAUL_BLOCK_CLASS}-link`} href={href}>{name}</a>)
    return (
        <nav className={BLOCK_CLASS}>
            {items}
        </nav>
    )
}

export default Menu;