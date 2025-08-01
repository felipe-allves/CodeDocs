import React from "react";
import './Languages.css'

function Languages () {
    return(
        <section id="languages" className="languages section" aria-labelledby="languages-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="languages-title">
                        <span className="gradient-text">Linguagens</span>
                        <span className="gradient-text-purple"> mais buscadas</span>
                    </h2>
                    <p className="section-subtitle">Do básico ao avançado, tudo organizado para você avançar rápido</p>
                </header>
                <article className="languages-grid">
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg js-bg"></div>
                            <span className="icon-text">JS</span>
                        </div>
                        <h3 className="language-title">JavaScript</h3>
                        <p>Guia completo da linguagem mais popular da web. ECMAScript 2023, Node.js, APIs modernas e muito mais</p>
                        <div className="language-stats">
                            <span className="stat-tag">ES6+</span>
                            <span className="stat-tag">Node.js</span>
                            <span className="stat-tag">Web APIs</span>
                        </div>
                    </div>
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg py-bg"></div>
                            <span className="icon-text">PY</span>
                        </div>
                        <h3 className="language-title">Python</h3>
                        <p>Documentação completa do Python 3.12, incluindo bibliotecas padrão, frameworks e best practices</p>
                        <div className="language-stats">
                            <span className="stat-tag">Python 3.12</span>
                            <span className="stat-tag">PEP 8</span>
                            <span className="stat-tag">Async/Await</span>
                        </div>
                    </div>
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg ts-bg"></div>
                            <span className="icon-text">TS</span>
                        </div>
                        <h3 className="language-title">TypeScript</h3>
                        <p>Guia definitivo do TypeScript 5.0: tipos avançados, decorators, generics e integração com frameworks</p>
                        <div className="language-stats">
                            <span className="stat-tag">Type Safety</span>
                            <span className="stat-tag">Decorators</span>
                            <span className="stat-tag">Strict Mode</span>
                        </div>
                    </div>
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg go-bg"></div>
                            <span className="icon-text">GO</span>
                        </div>
                        <h3 className="language-title">Go</h3>
                        <p>Documentação oficial do Go 1.21: goroutines, channels, interfaces e desenvolvimento de microserviços</p>
                        <div className="language-stats">
                            <span className="stat-tag">Concurrency</span>
                            <span className="stat-tag">Modules</span>
                            <span className="stat-tag">Testing</span>
                        </div>
                    </div>
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg rust-bg"></div>
                            <span className="icon-text">RS</span>
                        </div>
                        <h3 className="language-title">Rust</h3>
                        <p>Guia completo de Rust 2023: ownership, lifetimes, macros e desenvolvimento de sistemas seguros</p>
                        <div className="language-stats">
                            <span className="stat-tag">Memory Safety</span>
                            <span className="stat-tag">Zero-cost</span>
                            <span className="stat-tag">Fearless Concurrency</span>
                        </div>
                    </div>
                    <div className="language-card">
                        <div className="language-icon">
                            <div className="icon-bg java-bg"></div>
                            <span className="icon-text">JV</span>
                        </div>
                        <h3 className="language-title">Java</h3>
                        <p>Documentação Java 21: records, pattern matching, virtual threads e modernização da JVM</p>
                        <div className="language-stats">
                            <span className="stat-tag">Java 21</span>
                            <span className="stat-tag">Virtual Threads</span>
                            <span className="stat-tag">Records</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Languages