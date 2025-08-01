import React from "react";
import './Docs.css'

function Docs () {
    return(
        <section id="docs" className="docs section" aria-labelledby="docs-title">
            <div className="container">
                <header>
                    <h2 className="section-title" id="docs-title">
                        <span className="gradient-text">Guias</span>
                        <span className="gradient-text-purple">estruturados</span>
                    </h2>
                    <p className="section-subtitle">Caminhos claros para cada nível de conhecimento</p>
                </header>
                <article className="docs-grid">
                    <div className="doc-category">
                        <div className="doc-icon">📖</div>
                        <h3>Fundamentos</h3>
                        <p>Sintaxe básica, tipos de dados, estruturas de controle e conceitos fundamentais</p>
                        <ul className="doc-topics">
                            <li>Variáveis e Constantes</li>
                            <li>Operadores e Expressões</li>
                            <li>Funções e Escopo</li>
                            <li>Programação Orientada a Objetos</li>
                        </ul>
                    </div>
                    <div className="doc-category">
                        <div className="doc-icon">🔄</div>
                        <h3>Intermediário</h3>
                        <p>Conceitos avançados, padrões de design e melhores práticas</p>
                        <ul className="doc-topics">
                            <li>Tratamento de Erros</li>
                            <li>Assincronismo</li>
                            <li>Testes Unitários</li>
                            <li>Performance e Otimização</li>
                        </ul>
                    </div>
                    <div className="doc-category">
                        <div className="doc-icon">🚀</div>
                        <h3>Avançado</h3>
                        <p>Recursos avançados, otimização e integração com outras tecnologias</p>
                        <ul className="doc-topics">
                            <li>Metaprogramação</li>
                            <li>System Programming</li>
                            <li>Integração com C/C++</li>
                            <li>Debugging Avançado</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Docs