import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth'

const ResetPassword = (props) => {                
    const [requestSent, setRequestSent] = useState(false);
    
    const [formData, setFormData] = useState({
        email: ''
    });
    
    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        props.reset_password(email);
        setRequestSent(true);
    };
    
    if (requestSent)
        return <Redirect to='/' />
    return (
        <Fragment>
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </Fragment>
    );
};
    
export default connect(null, { reset_password })(ResetPassword);