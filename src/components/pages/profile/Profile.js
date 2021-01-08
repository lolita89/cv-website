import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../../images/cikaPic.jpg";
import { cvData } from "../../../data";

export default function Profile() {
  const name = useState(cvData.map(data => data.name));
  const title = useState(cvData.map(data => data.title));
  const visaStatus = useState(cvData.map(data => data.visa_status));
  const linkedinAddress = cvData.map(data => data.linkedin_address);
  const githubAddress = cvData.map(data => data.github_address);
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
            {name}
          </span>
          <p>
            {title} ({visaStatus})
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            <a href={githubAddress}>
              <i className="fab fa-github grey-text text-darken-4 social_style"></i>
            </a>
            <a href={linkedinAddress}>
              <i className="fab fa-linkedin grey-text text-darken-4 social_style"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
