// https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5
import React from 'react';
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    // const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const loginAction = async (data) => {
        // e.preventDefault();
        console.log('Front-end server request to login!');
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ 
                    'username': data.username,
                    'password': data.password,
                })
            });
            console.log('res -->' , response)
            console.log('username , password -->' , { 'username': data.username, 'password': data.password })
            // if username or password dosen't match (!200)
            if (response.status !== 200) {
                // alert incorrent username or password. please try again
                alert('Incorrect username or password. please try again')
            } else if (response.status === 400) {
                alert('Password is invalid, please try again')
            } else {
                const parsed = await response.json();
                // change app state
                setUsername(parsed.username);
                navigate('/home');
            }
        } catch (err) {
            console.error('Error fetching username and password', err);
            setError(true);
        }
    }
    const logOut = () => {
        setUsername(null);
        // setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    }


    return (
        // <AuthContext.Provider value={{ token, user, loginAction, logOut}}>
        <AuthContext.Provider value={{ username, loginAction, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}