import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

export default function Login(props) {

    const [values, setValues] = useState({
        email: "",
        pass: ""
    });


    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const handleOnSubmisson = () => {

        // console.log(values);
        if (!values.email || !values.pass) {
            setErrorMsg("Fill All Fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                console.log(res);
                navigate("../panel/dashboard");
                setSubmitButtonDisabled(false)
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                // console.log("ERROR - ", err.message);
                setErrorMsg(err.message);
            });
    }

    return (
        <>


            <h1 className="form__title">Welcome, Again!</h1>

            <InputControl
                label='Email'
                type='email'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                icon='at'
            />

            <InputControl
                label='Password'
                type='password'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                icon='lock'
            />

            <a href="/" className="form__forgot">Forgot Password?</a>

            <b className='err-msg center'>{errorMsg}</b>
            <button
                id="btn"
                defaultValue="Login"
                onClick={handleOnSubmisson}
                disabled={submitButtonDisabled}
                className='form__button'
            >
                Login
            </button>
            {/* <input type="submit" className="form__button" value="Login" /> */}

            <p>Don't have a account? <Link to='/signup'>Register</Link></p>

            {/* <div className="form__social">
                <span className="form__social-text">Our login with</span>

                <a href="#" className="form__social-icon"><i className='bx bxl-facebook'></i></a>
                <a href="#" className="form__social-icon"><i className='bx bxl-google'></i></a>
                <a href="#" className="form__social-icon"><i className='bx bxl-instagram'></i></a>
            </div> */}

        </>
    )
}
