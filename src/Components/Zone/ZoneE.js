import React, { useState } from 'react';
import img from '../../img/assets/camera.png';
import { useGlobalData } from '../../Context/Data/Datastate';

export default function ZoneE() {

    const { getCurrentDate } = useGlobalData();
    const [time, setTime] = useState("")
    const currTime = new Date().toLocaleTimeString();
    setInterval(() => {
        setTime(currTime)
    }, 2000);


    return (
        <>
            <div className="zone-view">
                <div className="zone-grid">
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                </div>
                <div className="zone-det">
                    <h3>Location : <span></span></h3>
                    <div>
                        <p className='left'>Total Triggers : <span></span></p>
                        <p className='left'>Total Criminal Record : <span></span></p>
                        <p className='left'>Current Time : <span style={{fontWeight:`800`}}>
                            {time} &nbsp;--&nbsp; {getCurrentDate()}
                        </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
