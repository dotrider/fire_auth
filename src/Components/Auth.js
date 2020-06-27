import React,{ useState, useEffect } from 'react'
//importing 🔥base
import app from '../Fire';

//Creating new Context object
export const AuthContext = React.createContext()



export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null)


useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
}, [])

    /*Each context comes with a Provider - This makes context available to all Components
    allowing them to subscribe to context changes */

    return (
        <AuthContext.Provider
        //props value contains the data we want to make available to our component tree.
            value={
                currentUser
            }
        >
            {children}
        </AuthContext.Provider>
    )
}


