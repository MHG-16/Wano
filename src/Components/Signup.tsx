/* eslint-disable max-len */
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faAt, faChevronRight, faLock, faCalendar, faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './style/signup.css';
import './style/login.css';
import {nextCliqued, onChecked} from './utils/signup';
import 'react-phone-input-2/lib/style.css';

export default function Signup() {
  const [inc, add] = useState(1);
  const [number, setPhoneNumber] = useState<string>();
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
              <div
                className="erimport 'react-phone-number-input/style.css'ror-content"
                id="error-content"
              >
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
            <div className="inactive" id="partie-3">
              <div className="FormField">
                <Input
                  value={number}
                  onChange={(phone: string) => setPhoneNumber(phone)}
                  country={'tn'}
                  preferredCountries={['it', 'fr', 'tn', 'dz', 'de']}
                  placeholder="Enter telephone number"
                  enableSearch
                  disableSearchIcon
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                    id: 'input-number',
                    maxlength: 18,
                  }}
                />
              </div>
              <div>Date de naissance :</div>
              <div className="FormField">
                <FontAwesomeIcon icon={faCalendar} className="icon-input" />
                <input type="date" className="input" />
              </div>
              <div className="FormField FormFieldRadios">
                <input type="radio" name="genre" value="masculin" id="masculin" checked />
                <label htmlFor="masculin">
                  <span></span>
                  <label className="input-radio-txt"> Man</label>
                  <FontAwesomeIcon icon={faMars} className="icon-input-radio" />
                </label>
                <input type="radio" name="genre" value="feminine" id="feminine" />
                <label htmlFor="feminine">
                  <span></span> <label className="input-radio-txt"> Woman</label>
                  <FontAwesomeIcon icon={faVenus} className="icon-input-radio" />
                </label>
                <div className="worm">
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                  <div className="worm__segment"></div>
                </div>
              </div>
              <div className="CheckBox">
                <label className="checkBox-txt">
                  <input
                    type="checkbox"
                    name="check-box"
                    id="check-inp"
                    onChange={onChecked}
                    required
                  />
                  <span className="text-license">
                                        I accept the license utilisation of the cookies and sessions for better UX
                  </span>
                </label>
              </div>
            </div>
            <div
              className="button-submit"
              onClick={(e) => {
                nextCliqued(e, inc, add);
              }}
            >
              <div className="bg-btn"></div>
              <button className="btn-submit" id="submit">
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
