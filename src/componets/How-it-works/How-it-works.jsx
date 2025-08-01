import React from "react";
import './How-it-works.css'

function HowItWorks () {
    return(
        <section id="how-it-works" className="how-it-works section" aria-labelledby="how-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="how-title">
                        <span className="gradient-text">Como</span>
                        <span className="gradient-text-purple"> funciona</span>
                    </h2>
                    <p className="section-subtitle">Quatro passos simples para começar sua jornada</p>
                </header>
                <ol className="steps">
                    <div className="step">
                        <div className="step-icon">
                            <div className="step-number">1</div>
                        </div>
                        <h3>Escolha sua trilha</h3>
                        <p>Selecione a linguagem que deseja dominar e seu nível atual para criar um plano personalizado</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <div className="step-number">2</div>
                        </div>
                        <h3>Aprenda com prática</h3>
                        <p>Estude os conceitos teóricos e aplique imediatamente com exercícios e projetos reais</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <div className="step-number">3</div>
                        </div>
                        <h3>Construa seu portfólio</h3>
                        <p>Desenvolva projetos impressionantes que mostram sua evolução para empregadores</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <div className="step-number">4</div>
                        </div>
                        <h3>Acelere sua carreira</h3>
                        <p>Compartilhe suas conquistas, receba feedback e prepare-se para oportunidades de trabalho</p>
                    </div>
                </ol>
            </div>
        </section>
    )
}

export default HowItWorks