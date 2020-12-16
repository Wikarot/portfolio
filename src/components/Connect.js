import React from 'react';

const ORIGIN = './images/id_pic';
const email = 'leodeslf@gmail.com';

export default function Connect() {
  return (
    <section id="connect" className="portfolio__connect portfolio__elem">
      <h2>Conectemos</h2>
      <div className="connect__card">
        <ul className="card__data">
          <li>Montevideo, UY</li>
          <li>+598 99 705 972</li>
          <li title="Copiar al portapapeles.">
            <label htmlFor="email">
              <input className="input-to-copy"
                id="email"
                readOnly
                aria-disabled
                type="text"
                value={email}
                onClick={e => {
                  e.target.select();
                  document.execCommand('copy');
                }} />
            </label>
          </li>
          <li>
            <a href="https://github.com/leodeslf">GitHub</a> / <a
              href="https://linkedin.com/in/leodeslf">LinkedIn</a>
          </li>
        </ul>
        <picture className="card__pic">
          <source type="image/webp" srcSet={`${ORIGIN}.webp`} />
          <img
            src={`${ORIGIN}.png`}
            alt="A human been."
            title="A human been."
            width="90"
            height="132" />
        </picture>
      </div>
    </section>
  );
}
