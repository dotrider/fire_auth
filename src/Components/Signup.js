import React, { useCallback } from 'react'
import app from '../Fire';

const Signup = ({ history }) => {
    

    const submit = useCallback(async(e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push('/')
            } catch(err) {
                alert(err)
            }
    },[ history ]);

    return (
        <div>
            <h1> Signup </h1>
            <form onSubmit={() => submit()}>
                <label>Email: </label>
                <input name='email' type='email'/>
                <label>Password: </label>
                <input name='password' type='password'/>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup;