/* eslint-disable max-len */
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faAt, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './style/signup.css';
import './style/login.css';
import {nextCliqued} from './utils/login';

export default function Signup() {
  const [inc, add] = useState(1);
  return (
    <div className="container-login">
      <div className="screen">
        <div className="form-content">
          <form className="login">
            <div className="active" id="partie-1">
              <div className="GruppeFields">
                <div className="FormField">
                  <FontAwesomeIcon icon={faUser} className="icon-input" />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    placeholder="First name"
                    className="input"
                  />
                </div>
                <div className="FormField">
                  <FontAwesomeIcon icon={faUser} className="icon-input" />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    placeholder="Last name"
                    className="input"
                  />
                </div>
              </div>
              <div className="FormField">
                <FontAwesomeIcon icon={faAt} className="icon-input" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="input"
                />
              </div>
            </div>
            <div className="inactive" id="partie-2"></div>
            <div
              className="button-submit"
              onClick={(e) => {
                nextCliqued(e, inc, add);
              }}
            >
              <div className="bg-btn"></div>
              <button className="btn-submit">
                <span className="btn-label">Next</span>
                <FontAwesomeIcon icon={faChevronRight} className="btn-sub-icon" />
              </button>
            </div>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
