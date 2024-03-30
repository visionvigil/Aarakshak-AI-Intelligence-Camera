import React from 'react';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import { useGlobalData } from '../../Context/Data/Datastate';

export default function Sidemenu() {

    const { data } = useGlobalData();


    return (
        <>
            <nav
                id='sidebarMenu'
                className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
            >
                <div className='position-sticky pt-3 sidebar-sticky'>
                    <ul className='nav flex-column'>
                        <li className='nav-item'>
                            <Link
                                to='/panel/dashboard'
                                className='nav-link active'
                                aria-current='page'
                            >
                                <span data-feather='home' className='align-text-bottom'></span>
                                Dashboard
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/panel/zonalcam'>
                                <span data-feather='file' className='align-text-bottom'></span>
                                Zonal Cameras
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/panel/videouploader'>
                                <span
                                    data-feather='shopping-cart'
                                    className='align-text-bottom'
                                ></span>
                                Video Detection
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/panel/triggers'>
                                <span
                                    data-feather='bar-chart-2'
                                    className='align-text-bottom'
                                ></span>
                                Triggers
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <div className='nav-link d-flex'>
                                <span data-feather='users' className='align-text-bottom'></span>
                                <Link
                                    className='nav-link'
                                    style={{
                                        display: `inline-flex`,
                                        padding: `unset`,
                                        alignItems: `center`
                                    }}
                                    to='/panel/powerconsumption'
                                >
                                    <span type='button'>Power Consumption</span>
                                </Link>
                                <button
                                    type='button'
                                    className='btn dropdown-toggle dropdown-toggle-split'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                >
                                    <span className='sr-only'></span>
                                </button>
                                <div className='dropdown-menu'>
                                    <Link to='/panel/powerconsumption/zone_A' className='dropdown-item'>
                                        Zone-A
                                    </Link>
                                    <Link to='/panel/powerconsumption/zone_B' className='dropdown-item'>
                                        Zone-B
                                    </Link>
                                    <Link to='/panel/powerconsumption/zone_C' className='dropdown-item'>
                                        Zone-C
                                    </Link>
                                    <div className='dropdown-divider'></div>
                                    <Link to="/panel/powerconsumption/main" className='dropdown-item' >
                                        All
                                    </Link>
                                </div>
                            </div>
                        </li> */}
                    </ul>

                    <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase'>
                        <span>Saved reports</span>
                    </h6>
                    <ul className='nav flex-column mb-2'>
                        <li className='nav-item'>
                            <span className='nav-link' >
                                <span
                                    data-feather='file-text'
                                    className='align-text-bottom'
                                ></span>
                                <CSVLink className='nav-link' data={ data } >Download Report</CSVLink>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
