import React from "react";
import './Header.css'

function Header () {
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo">CodeDocs</div>
                <ul className="nav-links">
                    <li><a href="#languages">Linguagens</a></li>
                    <li><a href="#docs">Documentação</a></li>
                    <li><a href="#examples">Exemplos</a></li>
                    <li><a href="#api">API</a></li>
                    <li><a href="#about">Sobre</a></li>
                </ul>
                <button className="menu-toggle" aria-label="Menu">☰</button>
            </nav>
        </header>
    )
}

export default Header