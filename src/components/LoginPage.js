// src/components/LoginPage.js
import React, { useState, useEffect } from 'react';
import { PUBLIC_CLIENT_APPLICATION, LOGIN_REQUEST } from '../config/msalConfig';

function LoginPage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if user is already signed in
        const accounts = PUBLIC_CLIENT_APPLICATION.getAllAccounts();
        if (accounts.length > 0) {
            setUser(accounts[0]);
        }
    }, []);

    const handleSignIn = async () => {
        try {
            const loginResponse = await PUBLIC_CLIENT_APPLICATION.loginPopup(LOGIN_REQUEST);
            if (loginResponse.account) {
                PUBLIC_CLIENT_APPLICATION.setActiveAccount(loginResponse.account);
                setUser(loginResponse.account);
            }
        } catch (err) {
            setError('Failed to sign in: ' + err.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await PUBLIC_CLIENT_APPLICATION.logoutPopup();
            setUser(null);
        } catch (err) {
            setError('Failed to sign out: ' + err.message);
        }
    };

    return (
        <div className="container">
            {error && <div className="error">{error}</div>}
            
            {!user ? (
                <button onClick={handleSignIn} className="login-button">
                    Sign in with Microsoft
                </button>
            ) : (
                <div className="user-info">
                    <h2>Welcome, {user.name}!</h2>
                    <p>{user.username}</p>
                    <button onClick={handleSignOut} className="logout-button">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginPage;