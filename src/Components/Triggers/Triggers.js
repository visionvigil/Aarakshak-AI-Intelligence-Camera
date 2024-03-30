import React from 'react';
import { useGlobalData } from '../../Context/Data/Datastate';

import '../../css/Triggers.css';


export default function Triggers() {

    const { data } = useGlobalData();

    const img = 'https://firebasestorage.googleapis.com/v0/b/aarakshak-web-rtdb.appspot.com/o/alert-img%2Fdetection.jpg?alt=media&token=65efbe64-0ed8-40ef-9c55-9093eac4c1c9'



    const showTriggers = () => {
        if (data && data.length > 0) {
            // Assuming you want to display information for all elements in the 'data' array
            return data.map((item, i) => (
                <div className='trigger-element' key={i}>
                    <div className="trigger-content">
                        <p>
                            Weapon Detected: <span>{item.label}</span>
                        </p>
                        <p>
                            Time: <span>{item.Time}</span>
                        </p>
                        <p>
                            Date: <span>{item.Date}</span>
                        </p>
                        <p>
                            Location: <a href={item.Location} target='_Blank' rel="noopener noreferrer">Click Here To View Location</a>
                        </p>
                    </div>
                    <div className="trigger-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            ));
        }

        // Return null or some default content if 'data' is falsy or empty
        return null;
    };

    if (!data) {
        return 'Loading .....';
    }
    return (
        // showTriggers()
        <>
            <div className="trigger-grid">
                {showTriggers()}
            </div>
        </>
    )
}
