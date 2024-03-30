import React from 'react';
import { Outlet } from 'react-router-dom';

import authBg from '../../img/assets/camAuth.png';

export default function Login(props) {

    return (
        <>

            <div className="nav-shape center">
                <img src={props.logo} alt="" />
            </div>

            <div className="l-form">
                <div className="shape1"></div>
                <div className="shape2"></div>

                <div className="form">
                    {/* <img src="assets/img/authentication.svg" alt="" className="form__img"> */}
                    <img src={authBg} alt="" className="form__img" />

                    <form action="" className="form__content">
                        <Outlet />
                    </form>
                </div>
            </div>

        </>
    )
}
