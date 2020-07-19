import React from 'react';
import './style.sass'

interface IProps {
    name : string;
    buttonText : string;
    className? : string;
}


const Form : React.FC<IProps> = ({name,buttonText,children,className}) => {
    const cls = `form ${className ? className : ''}`;
    return (
        <div className={cls}>
            <form  action="">
                <p className="form__name">{name}</p>
                <div className="form__bottom">
                    <div className="form__bottom-children">{children}</div>
                    <button type="submit" className="form__bottom-submit">{buttonText}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;