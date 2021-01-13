
import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
    <header>
        <div className="center-column">
            <h1>🍽 Feed me</h1>
        </div>
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/one">one micro app coming your way</NavLink>
                </li>
                <li>
                    <NavLink to="/two">two micro apps coming your way</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ol>
        </nav>
    </header>
);

export default AppHeader;