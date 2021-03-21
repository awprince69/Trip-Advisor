import React from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { createUserWithEmailAndPassword, handleGoogle, initializeApp, signInWithEmailAndPassword, handleFacebook } from './LoginManagment';
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';

initializeApp();
const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        error: '',
        name: ''
    });
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    const password = useRef({});
    password.current = watch("password", "");
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogle()
            .then(res => {
                setUser(res)
                setLoggedIn(res);
                history.replace(from);
            })
    }
    const facebookSignIn = () => {
        handleFacebook()
            .then(res => {
                setUser(res)
                setLoggedIn(res);
                history.replace(from);
            })
    }
    const onSubmit = (data) => {
        if (newUser === true) {
            createUserWithEmailAndPassword(data.name, data.email, data.password)
                .then(res => {
                    setUser(res);
                    setLoggedIn(res);
                    history.replace(from);
                })
        }
        if (!newUser && data.email && data.password) {
            signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    setUser(res)
                    setLoggedIn(res)
                    history.replace(from);

                })
        }
    };
    return (
        <div>
            <div className='formContainer'>
                <form className='logInForm' onSubmit={handleSubmit(onSubmit)}>
                    {
                        newUser && <h4>Create an account</h4>
                    }
                    {
                        !newUser && <h4>Login</h4>
                    }

                    {
                        newUser && <input name="name" ref={register({ required: true })} placeholder='Write your name' />
                    }
                    {newUser && errors.name && <span className="error">This field is required</span>}
                    <input name="email" ref={register({
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "You must specify a valid email"
                        }

                    })} placeholder='Write your Email' />
                    {errors.email && <p className='error'>{errors.email.message}</p>}

                    <input type="password" name="password" ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
                        placeholder='Write your password' />
                    {errors.password && <p className='error'>{errors.password.message}</p>}
                    {
                        newUser && <input type="password" name="confirmed" ref={register({
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })}
                            placeholder='Confirmed your password' />
                    }
                    {
                        newUser && errors.confirmed && <p className='error'>{errors.confirmed.message}</p>
                    }
                    <input type="submit" value={newUser ? "Create an account" : "Login"} />
                    {
                        newUser && <h6 onClick={() => setNewUser(!newUser)}>Already have an account?<a href="#"> Login</a></h6>
                    }
                    {
                        !newUser && <h6 onClick={() => setNewUser(!newUser)}> <small>Don't have an account?<a href="#"> Create an account</a></small> </h6>
                    }
                </form>
            </div>
            <p style={{ color: 'red', margin: '0px 550px' }}>{user.error}</p>
            <div className="buttonDesign">
                <h5 style={{ textAlign: 'center' }}>OR</h5>
                <button className="btn" onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google</button>
                <button className="btn" onClick={facebookSignIn}><FontAwesomeIcon icon={faFacebook} /> facebook</button>
            </div>
        </div>
    );
};

export default Login;