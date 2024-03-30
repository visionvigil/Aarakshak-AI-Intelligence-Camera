import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

export default function About(props) {


    return (
        <>


            <h1 className="form__title">Welcome To Aarakshak</h1>

            <p className='about-content'>
            Aarakshak, a market-ready product, is an AI-powered decision-making camera that identifies illegal weapons such as guns, granite knives, etc., as well as detects suspicious and illegal activities such as murders, theft, gun shots, and many more. After detection and identification, it sends alerts to nearby police stations so that officers can take immediate action. Additionally, a monthly report will be generated showing all the capture data that will be provided on aaraksh. We can market this device to detect animal infiltration.
            </p>
            
            <Link
                id="btn"
                className='form__button'
                to='/login'
            >
                Login To Aarakshak
            </Link>
            <br />
            <br />
            <p>Don't have a account? <Link to='/signup'>Register</Link></p>

        </>
    )
}
