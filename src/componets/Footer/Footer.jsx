import React from "react";
import './Footer.css'

function Footer () {
    return(
        <footer className="footer">
        <div className="container">
            <section className="footer-content">
                <aside className="footer-brand">
                    <h3>CodeDocs</h3>
                    <p>Documentação técnica moderna e colaborativa</p>
                </aside>
                <nav className="footer-links" aria-label="Links do rodapé">
                    <a href="#languages">Linguagens</a>
                    <a href="#docs">Documentação</a>
                    <a href="#examples">Exemplos</a>
                    <a href="#api">API</a>
                    <a href="#about">Sobre</a>
                    <a href="#">GitHub</a>
                </nav>
            </section>
            <p className="footer-copyright">&copy; 2024 CodeDocs. Conteúdo sob licença MIT.</p>
        </div>
    </footer>
    )
}

export default Footer