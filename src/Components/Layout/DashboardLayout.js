import React from 'react';
import img from '../../img/assets/camera.png';
// import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
    return (
        <>
            <div className="dashboard-container">
                <div className="card mb-3" style={{ width: `300px` }} >
                    <img src={img} alt="" />
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{ color: `white` }}>Zonal Cam - 1</h5>
                        <p className="card-text">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasZone1" aria-controls="offcanvasWithBothOptions">
                                See More Details
                            </button>
                        </p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasZone1" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Zonal - 1 Camera</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <img src={img} alt="" className='canvas-cam' />
                            <div>
                                <p>Location : <span></span></p>
                                <p>Total Triggers : <span></span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3" style={{ width: `300px` }} >
                    <img src={img} alt="" />
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{ color: `white` }}>Zonal Cam - 2</h5>
                        <p className="card-text">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasZone2" aria-controls="offcanvasWithBothOptions">
                                See More Details
                            </button>
                        </p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasZone2" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Zonal - 2 Camera</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <img src={img} alt="" className='canvas-cam' />
                            <div>
                                <p>Location : <span></span></p>
                                <p>Total Triggers : <span></span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3" style={{ width: `300px` }} >
                    <img src={img} alt="" />
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{ color: `white` }}>Zonal Cam - 3</h5>
                        <p className="card-text">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasZone3" aria-controls="offcanvasWithBothOptions">
                                See More Details
                            </button>
                        </p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasZone3" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Zonal - 3 Camera</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <img src={img} alt="" className='canvas-cam' />
                            <div>
                                <p>Location : <span></span></p>
                                <p>Total Triggers : <span></span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3" style={{ width: `300px` }} >
                    <img src={img} alt="" />
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{ color: `white` }}>Zonal Cam - 4</h5>
                        <p className="card-text">
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasZone4" aria-controls="offcanvasWithBothOptions">
                                See More Details
                            </button>
                        </p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasZone4" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Zonal - 4 Camera</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <img src={img} alt="" className='canvas-cam' />
                            <div>
                                <p>Location : <span></span></p>
                                <p>Total Triggers : <span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
