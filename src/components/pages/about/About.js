import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I am an experienced(2 years) Frontend Developer who has a communication and business innovation background.
            I have a passion for tech and innovation. I am positive, helpful, and eager to learn even more and continuously.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Diemen, The Netherlands
              </p>
              <p>
                <strong>Email:</strong> cika.lolita@hotmail.com
              </p>
              <p>
                <strong>Phone:</strong> +31683147415
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Native Language</strong> - Indonesian
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
