/* eslint-disable max-len */
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faAt, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './style/signup.css';
import './style/login.css';

export default function Signup() {
  const [inc, add] = useState(1);
  const nextCliqued = (e: React.FormEvent<HTMLElement>) => {
    const emailInp = document.getElementById('email') as HTMLInputElement;
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    if (!firstName.value || !lastName.value) {
      return;
    }
    const regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
    return !regex.test(emailInp.value) || !emailInp.value ? displayErrorEmail() : displayNextdiv(e);
  };
  function displayNextdiv(e: React.FormEvent<HTMLElement>) {
    const inactiveDiv = document.getElementById('partie-' + inc) as HTMLElement;
    inactiveDiv.className = 'inactive';
    const j: number = inc + 1;
    const activeDiv = document.getElementById('partie-' + j);
    if (activeDiv != null) {
      activeDiv.className = 'active';
    }
    add(inc + 1);
    e.preventDefault();
  }
  const displayErrorEmail = () => {
    const emailInp = document.getElementById('email') as HTMLInputElement;
    let message: string;
        emailInp.value ? (message = 'Email does not respect format') : (message = 'Please complete this field');
        emailInp.setCustomValidity(message);
  };
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
            <div className="button-submit" onClick={nextCliqued}>
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
