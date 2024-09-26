import React from 'react';
import './Form.css';
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Form = ({ setAuth, formType }) => {

    const isLogin = formType === 'signin';

  return (
    <div id="wrapper">
        <div id='formContainer'>
            <div className='welcomeTextContainer'>
                <p className='welcomeTextBig'>{isLogin ? 'Welcome back!' : 'Welcome to Creer!'}</p>
            </div>
            <div id='formContentBox' style={{flexDirection: `${isLogin ? 'column-reverse' : 'column'}`}}>
                <div className='googleSignInBtn'>
                    <p>Sign in with Google</p>
                    <FcGoogle  className='googleLogo'/>
                </div>
                <div className="orTextWrapper">
                    <hr/>
                    <p className="orText">OR</p>
                    <hr/>
                </div>
                
                <form>
                    <div className="container">
                        <>
                            {
                                isLogin ?
                                ('') :
                                (
                                    <div className='formNameBoxContainer'>
                                        <div className='formItem formBox nameFormBox firstNameInputContainer'>
                                            <input className='formBoxInput firstNameFormBoxInput formNameBoxInput' type="text" placeholder="First Name" name="name" required/>
                                        </div>

                                        <div className='formItem formBox nameFormBox lastNameInputContainer'>
                                            <input className='formBoxInput lastNameFormBoxInput formNameBoxInput' type="text" placeholder="Last Name" name="name" required/>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                        <div className='formItem formBox emailInputContainer'>
                            <input className='formBoxInput' type="text" placeholder="Email Address" name="uname" required/>
                        </div>

                        <div className='formItem formBox passwordInputContainer'>
                            <input className='formBoxInput' type="password" placeholder="Password" name="psw" required/>
                        </div>
                            
                        <Link onClick={() => setAuth()} className='formBtn' to={isLogin ? '/' : '/profile'} style={{textAlign: 'center', textDecoration: 'none', fontWeight: '600', color: '#fff'}}>{isLogin ? 'Log In' : 'Sign Up'}</Link>
                        
                    </div>
                </form>
            </div>
        </div>
        <div className='bottomInfoTextContainer'>
            <p className='bottomInfoText'>{isLogin ? "Don't have an account?" : 'Got an account?'} <Link className="linkText" style={{textDecoration: 'none', fontWeight: '600', color: '#3757FF'}} to={isLogin ? '/signup' : '/signin'}>{isLogin ? 'Register' : 'Sign In'}</Link></p>
        </div>
    </div>
  )
}

export default Form