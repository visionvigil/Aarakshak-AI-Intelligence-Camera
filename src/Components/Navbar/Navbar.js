import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase';

export default function Navbar(props) {

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    const location = useLocation();
    const path = location.pathname;

    if (path === '/' || path === '/login' || path === '/signup') {
        return null;
    }
    return (
        <>
            <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
                <button
                    className='navbar-toggler d-md-none collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#sidebarMenu'
                    aria-controls='sidebarMenu'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <span className='navbar-brand' style={{ marginLeft: `10px` }}>
                    <img src={props.logo} alt="Logo" width="20" height="24" className="d-inline-block align-text-top logo-align" />
                    <strong>
                        <span className='logo-full' style={{ marginLeft: `34px` }}>{props.title}</span>
                    </strong>
                </span>
                <div className='navbar-nav'>
                    <div className='text-nowrap'>
                        {/* <button className='px-3 mx-2 my-2' onClick={handleLogout}> */}
                        <button
                            className='px-3 mx-2 my-2 btn-primary btn'
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
