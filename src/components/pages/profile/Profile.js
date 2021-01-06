import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../../images/cikaPic.jpg";

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            className="activator"
            src={ImgProfile}
            alt="Cika Lolita Sugiharto"
          />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Cika Lolita Sugiharto
          </span>
          <p>Frontend Developer (Valid work visa in NL)</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            <a href="https://github.com/lolita89">
              <i className="fab fa-github grey-text text-darken-4 social_style"></i>
            </a>
            <a href="https://www.linkedin.com/in/cikalolita/">
              <i className="fab fa-linkedin grey-text text-darken-4 social_style"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
