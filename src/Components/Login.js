import React, { useCallback, useContext } from 'react';
import { AuthContext } from './Auth';
import { Redirect } from 'react-router-dom'
import app from '../Fire';

const Login = ({ history }) => {
    

    const handleSubmit = useCallback(async(e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push('/')
            } catch(err) {
                alert(err)
            }
    },[ history ]);



    /* Use authentication context in order to check if a user is already login
    then redirect them to homepage */
    const { currentUser } = useContext(AuthContext)

    if(currentUser){
        return <Redirect to ='/'/>
    }


    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={() => handleSubmit()}>
                <label>Email: </label>
                <input name='email' type='email'/>
                <label>Password: </label>
                <input name='password' type='password'/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;