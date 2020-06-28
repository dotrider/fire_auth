import React from 'react';
import app from '../Fire';

const Homepage = () => {
    return (
        <>
            <h1>Homepage</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default Homepage;