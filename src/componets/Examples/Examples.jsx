import React from "react";
import "./Examples.css";

function Examples() {
  return (
    <section
      id="examples"
      className="examples section"
      aria-labelledby="examples-title"
    >
      <div className="container">
        <header>
          <h2 className="section-title" id="examples-title">
            <span className="gradient-text">Exemplos</span>
            <span className="gradient-text-purple">Práticos</span>
          </h2>
          <p className="section-subtitle">
            Código real e casos de uso do dia a dia
          </p>
        </header>
        <article className="examples-grid">
          <div className="example-card">
            <div className="example-header">
              <span className="example-tag">JavaScript</span>
              <span className="example-level">Básico</span>
            </div>
            <h3>Arrow Functions</h3>
            <div className="code-block">
              <pre>
                <code>
                  {`const greet = (name) => \`Hello, \${name}!\`;
console.log(greet('World'));`}
                </code>
              </pre>
            </div>
            <p>Funções de seta modernas e concisas</p>
          </div>
          <div className="example-card">
            <div className="example-header">
              <span className="example-tag">Python</span>
              <span className="example-level">Intermediário</span>
            </div>
            <h3>List Comprehensions</h3>
            <div className="code-block">
              <pre>
                <code>squares = [x**2 for x in range(10) if x % 2 == 0]</code>
              </pre>
            </div>
            <p>Compreensão de listas em Python</p>
          </div>
          <div className="example-card">
            <div className="example-header">
              <span className="example-tag">TypeScript</span>
              <span className="example-level">Avançado</span>
            </div>
            <h3>Generic Types</h3>
            <div className="code-block">
              <pre>
                <code>
                  {`function identity<T>(arg: T): T {
                                    return arg;
                                    }`}
                </code>
              </pre>
            </div>
            <p>Tipos genéricos para reusabilidade</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Examples;
