import React from "react";
import './Api.css'

function Api () {
    return(
        <section id="api" className="api-section section" aria-labelledby="api-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="api-title">
                        <span className="gradient-text">Referências</span>
                        <span className="gradient-text-purple">rápidas</span>
                    </h2>
                    <p className="section-subtitle">Encontre o que precisa sem perder tempo</p>
                </header>
                <form className="api-search" role="search">
                    <label for="search-docs" className="visually-hidden">Buscar na documentação</label>
                    <input type="search" id="search-docs" placeholder="Buscar na documentação..." className="search-input"></input>
                    <button type="submit" className="search-button" aria-label="Buscar">🔍</button>
                </form>
                <section className="api-categories">
                    <div className="api-category">
                        <h3>Web APIs</h3>
                        <ul>
                            <li>Fetch API</li>
                            <li>WebSocket</li>
                            <li>Service Workers</li>
                            <li>WebRTC</li>
                        </ul>
                    </div>
                    <div className="api-category">
                        <h3>Node.js</h3>
                        <ul>
                            <li>File System</li>
                            <li>HTTP/HTTPS</li>
                            <li>Streams</li>
                            <li>Cluster</li>
                        </ul>
                    </div>
                    <div className="api-category">
                        <h3>Python Stdlib</h3>
                        <ul>
                            <li>collections</li>
                            <li>asyncio</li>
                            <li>itertools</li>
                            <li>functools</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Api