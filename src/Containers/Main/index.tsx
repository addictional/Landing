import React,{Component} from 'react';
import FirstBlock from '../FirstBlock'
import './style.sass'
import ThirdBlock from '../ThirdBlock';


export default class Main extends Component {
    render(){
        return (
            <div className="main">
                <FirstBlock/>
                <ThirdBlock/>
            </div>
        )
    }
} 
