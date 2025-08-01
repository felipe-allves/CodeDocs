import React from "react";
import './About.css'

function About () {
    return(
        <section id="about" className="about section" aria-labelledby="about-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="about-title">
                        <span className="gradient-text">Sobre</span>
                        <span className="gradient-text-purple"> o CodeDocs</span>
                    </h2>
                </header>
                <article className="about-content">
                    <div className="about-card">
                        <h3>Nossa Missão</h3>
                        <p>
                            O CodeDocs é uma plataforma colaborativa criada por desenvolvedores 
                            para desenvolvedores. Nosso objetivo é fornecer guias claros, precisos e sempre atualizados 
                            sobre as principais linguagens de programação modernas.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3>Como Contribuir</h3>
                        <p>
                            Todo o conteúdo é open-source e mantido pela comunidade. Você pode contribuir com exemplos, 
                            correções, traduções ou novos guias através do nosso GitHub.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Contribuidores</span>
                        </div>
                        <div className="about-stat">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Commits</span>
                        </div>
                        <div className="about-stat">
                            <span className="stat-number">1M+</span>
                            <span className="stat-label">Desenvolvedores</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About