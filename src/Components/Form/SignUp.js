import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase';

export default function SignUp(props) {

    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    })

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const handleOnSubmisson = () => {

        // console.log(values);
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill All Fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                // console.log(res);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                setSubmitButtonDisabled(false)
                navigate("/login");
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
                label='Username'
                type='text'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                icon='user-circle'
            />

            <InputControl
                label='Email'
                type='email'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                icon='user-circle'
            />

            <InputControl
                label='Password'
                type='password'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                icon='lock'
            />

            <b className='err-msg center'>{errorMsg}</b>
            <button
                id="btn"
                defaultValue="Sign Up"
                onClick={handleOnSubmisson}
                disabled={submitButtonDisabled}
                className='form__button'
            >
                Sign Up
            </button>

            <p>Already Have a Account <Link to='/login'>Login</Link></p>

            {/* <div className="form__social">
            <span className="form__social-text">Our login with</span>

            <a href="#" className="form__social-icon"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="form__social-icon"><i className='bx bxl-google'></i></a>
            <a href="#" className="form__social-icon"><i className='bx bxl-instagram'></i></a>
        </div> */}

        </>
    )
}
