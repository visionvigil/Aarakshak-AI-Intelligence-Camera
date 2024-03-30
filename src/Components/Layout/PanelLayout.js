import React, { useEffect, useState } from 'react';
import Sidemenu from '../Sidemenu/Sidemenu';
import { Outlet, useLocation } from 'react-router-dom';
import { useGlobalData } from '../../Context/Data/Datastate';

export default function PanelLayout(props) {

    const { data } = useGlobalData();

    const [page, setPage] = useState('');

    const location = useLocation();
    const pageName = () => {
        if (location.pathname === '/panel/dashboard') {
            setPage('Dashboard');
        }
        else if (location.pathname === '/panel/zonalcam') {
            setPage('Zone Details');
        }
        else if (location.pathname === '/panel/zonalcam/zonea') {
            setPage('Zone Details - Zone-A');
        }
        else if (location.pathname === '/panel/zonalcam/zoneb') {
            setPage('Zone Details - Zone-B');
        }
        else if (location.pathname === '/panel/zonalcam/zonec') {
            setPage('Zone Details - Zone-C');
        }
        else if (location.pathname === '/panel/zonalcam/zoned') {
            setPage('Zone Details - Zone-D');
        }
        else if (location.pathname === '/panel/zonalcam/zonee') {
            setPage('Zone Details - Zone-E');
        }
        else if (location.pathname === '/panel/videouploader') {
            setPage('Video Detector - Upload your Video');
        }
        else if (location.pathname === '/panel/triggers') {
            setPage('Triggers - Old Alerts');
        }
        else {
            setPage('You Lost Your Way');
        }
    }

    useEffect(() => {
        pageName();
        console.log(location.pathname);
        // eslint-disable-next-line
    }, [location.pathname])



    if (!data) {
        return (
            <>
            <p style={{color: `black`}}> Loading ... .</p>
            </>
        )
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Sidemenu />
                    <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                            <h1 className='h2'>{page}</h1>
                            {/* <div className='btn-toolbar mb-2 mb-md-0'>
                                <div className='btn-group me-2'>
                                    <button
                                        type='button'
                                        className='btn btn-sm btn-outline-secondary'
                                    >
                                        Share
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-sm btn-outline-secondary'
                                    >
                                        Download Usage
                                    </button>
                                </div>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-outline-secondary dropdown-toggle'
                                >
                                    <span
                                        data-feather='calendar'
                                        className='align-text-bottom'
                                    ></span>
                                    This week
                                </button>
                            </div> */}
                        </div>

                        <div className='container-fluid'>
                            <Outlet />
                        </div>

                    </main>

                </div>
            </div>
        </>
    )
}