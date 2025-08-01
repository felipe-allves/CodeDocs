import React from 'react'
import './Hero.css'

function Hero () {
    return(
        <section className="hero section">
            <div className="hero-bg" aria-hidden="true">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>
            <div className="container">
                <header className="hero-content">
                    <h1>
                        <span className="hero-title-line">O clique certo</span>
                        <span className="hero-title-line gradient-text">para dominar a programação</span>
                    </h1>
                    <p className="hero-subtitle">Explore guias completos, exemplos práticos e referências das principais linguagens — tudo em um só lugar</p>
                    <nav className="hero-buttons" aria-label="Ações principais">
                        <a href="#languages" className="cta-button primary">Explorar Linguagens</a>
                        <a href="#docs" className="cta-button secondary">Ver Documentação</a>
                    </nav>
                    <aside className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Linguagens</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Exemplos</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Atualizações</span>
                        </div>
                    </aside>
                </header>
            </div>
        </section>
    )
}

export default Hero