import React from 'react';

import notfound from '../../img/assets/404-error-page.gif'

export default function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-txt">
                    The Page You Are Looking For Is Not Here 
                </div>
                <img
                    className='not-found-img'
                    src={notfound}
                    alt="ERROR - Page you are looking for is not here"
                />
            </div>
        </>
    )
}
