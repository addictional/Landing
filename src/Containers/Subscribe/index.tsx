import React from 'react';
import Form from '../../Components/Form'
import './style.sass';

const Subscribe : React.FC = (props)=>{
    return (
        <div className="subscribe">
            <Form className="subscribe-login"  name="Member login" buttonText="Log me in.">
                <input placeholder="User name" className="subscribe-two-input" type="text"/>
                <input placeholder="Password" className="subscribe-two-input" type="password"/>
            </Form>
            <Form className="subscribe-email" name="Subscribe to our weekly newsletter" buttonText="Subscribe">
                <input placeholder="email address" type="text"/>
            </Form>
        </div>
    );
}

export default Subscribe;