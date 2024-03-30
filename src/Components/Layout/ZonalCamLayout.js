import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ZonalCamLayout() {
    return (
        <>
        <div className="zone-container">
            <div className="card" >
                <div className="card-header">
                    Camera-Zones
                </div>
                <ul className="list-group list-group-flush" style={{ cursor: `pointer` }}>
                    <Link to='/panel/zonalcam/zonea' className="list-group-item">Zone-A</Link>
                    <Link to='/panel/zonalcam/zoneb' className="list-group-item">Zone-B</Link>
                    <Link to='/panel/zonalcam/zonec' className="list-group-item">Zone-C</Link>
                    <Link to='/panel/zonalcam/zoned' className="list-group-item">Zone-D</Link>
                    <Link to='/panel/zonalcam/zonee' className="list-group-item">Zone-E</Link>
                </ul>
            </div>
            <Outlet />
            </div>
        </>
    )
}
