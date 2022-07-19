/* eslint-disable max-len */
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faAt, faChevronRight, faLock} from '@fortawesome/free-solid-svg-icons';

import './style/signup.css';
import './style/login.css';
import {nextCliqued, onChecked} from './utils/signup';

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
            <div className="inactive" id="partie-2">
              <div className="FormField">
                <FontAwesomeIcon icon={faLock} className="icon-input" />
                <input className="input" type="password" required placeholder="password" id="pass1" />
              </div>
              <div className="FormField">
                <FontAwesomeIcon icon={faLock} className="icon-input" />
                <input className="input" type="password" required placeholder="Confirm" id="pass2" />
              </div>
              <div className="CheckBox">
                <label className="checkBox-txt">
                  <input type="checkbox" name="check-box" id="check-inp" onChange={onChecked} />
                  <span>Show password</span>
                </label>
              </div>
              <div className="error-content" id="error-content">
                <span className="error-msg">
                                    Password must have a minimum :
                  <ul>
                    <li>8 characteres length</li>
                    <li> 1 uppercase letter</li>
                    <li> 1 lowercase letter</li>
                    <li> 1 number </li>
                    <li> 1 special character </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="inactive" id="partie-3"></div>
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
