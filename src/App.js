// src/App.js
import React from 'react';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Azure AD SSO Demo</h1>
            </header>
            <main>
                <LoginPage />
            </main>
        </div>
    );
}

export default App;