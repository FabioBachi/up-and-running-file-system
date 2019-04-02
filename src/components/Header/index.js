import React from 'react';
import FontAwesome from 'react-fontawesome';

const Header = () => (
    <header id="header">
        <div className="logo">
            <h1>Up and Running</h1>
            <span>File System</span>
        </div>
        <a href="/" target="_blank"><FontAwesome name="github" className="github" /></a>
    </header>
);

export default Header;