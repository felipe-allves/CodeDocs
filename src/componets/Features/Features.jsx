import React from "react";
import './Features.css'

function Features () {
    return(
    <section id="features" className="features section" aria-labelledby="features-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="features-title">
                        <span className="gradient-text">Recursos</span>
                        <span className="gradient-text-purple">ilimitados</span>
                    </h2>
                    <p className="section-subtitle">Tudo o que você precisa para dominar qualquer linguagem de programação</p>
                </header>
                <article className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">🎯</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Aprendizado Direcionado</h3>
                        <p>Trilhas personalizadas de acordo com seu nível e objetivos, do iniciante ao especialista</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">⚡</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Exemplos Interativos</h3>
                        <p>Execute código em tempo real, experimente variações e veja os resultados instantaneamente</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">🧩</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Projetos Práticos</h3>
                        <p>Construa aplicações reais enquanto aprende, com diretrizes passo a passo e melhores práticas</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">🎓</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Certificações</h3>
                        <p>Valide seus conhecimentos com certificados reconhecidos pela indústria e comunidade</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">👥</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Comunidade Ativa</h3>
                        <p>Participe de discussões, tire dúvidas e compartilhe conhecimento com milhares de desenvolvedores</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <span className="feature-icon-emoji">📱</span>
                            <div className="icon-glow"></div>
                        </div>
                        <h3>Acesso Multiplataforma</h3>
                        <p>Aprenda no seu ritmo, onde estiver, com sincronização perfeita entre todos os dispositivos</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Features