/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './style/login.css'

function Login() {
    return (
        <div className="container-login">
            <div className="screen">
                <div className="form-content">
                    <form className="login">
                        <div className="FormField">
                            <FontAwesomeIcon icon={faUser} className="icon-input" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Email"
                                className="input"
                            />
                        </div>
                        <div className="FormField">
                            <FontAwesomeIcon icon={faLock} className="icon-input" />
                            <input
                                type="password"
                                name="password"
                                id="email"
                                required
                                placeholder="password"
                                className="input"
                            />
                        </div>
                        <div className="button-submit">
                            <div className="bg-btn"></div>
                            <button className="btn-submit">
                                <span className="btn-label">Login in</span>
                                <FontAwesomeIcon icon={faChevronRight} className="btn-sub-icon" />
                            </button>
                        </div>
                    </form>
                    <div className="footer-login">
                        <span className="forget-txt">
                            Forgot your password ? Click{' '}
                            <a href="#" className="forget-lien">
                                here
                            </a>
                        </span>
                        <div className="social-media">
                            <h3>Log in via</h3>
                            <div className="social-media-icons">
                                <FontAwesomeIcon icon={faFacebook} className="icon-media" />
                                <FontAwesomeIcon icon={faGoogle} className="icon-media" />
                                <FontAwesomeIcon icon={faTwitter} className="icon-media" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default Login
