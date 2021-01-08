import React, { useState } from 'react';

export default function Experiences() {
 const [year, setYear] = useState(2020)

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                03/
                <strong>2020</strong> - 09/
                <strong>2020</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <div>Frontend Developer</div>
                  <strong className="blue-text">Wolfpack DCS</strong>
                </h6>
                <ul className="ul-list">
                  <li>Developing a few web shops (E-commerce) with salesforce to the clients</li>
                  <li>Working closely with a product manager, online marketer, andbackend developers</li>
                  <li>Vanilla Javascript, jQuery, css, sass, git, Jira, and salesforce CMS</li>
                </ul>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                11/
                <strong>2018</strong> - 02/
                <strong>2020</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <div>Frontend Developer</div>
                  <strong className="blue-text">Kentivo</strong>
                </h6>
                <ul className="ul-list">
                  <li>Developing a few web applications to the clients</li>
                  <li>Working closely with a product manager, UI/UX designer, and backend developers</li>
                  <li>Javascript, jQuery, react, redux, css, styled component, material UI, Webpack, git and REST API</li>
                </ul>
            
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
