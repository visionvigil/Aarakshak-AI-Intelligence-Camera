import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useGlobalData } from '../../Context/Data/Datastate';
import { useLocation } from 'react-router-dom';

// CSS
import '../../css/Alert.css';

// Audio
import aud from './alert.mp3';

// Images
import gun from './gun.jpg';
import knife from './knife.jpg';
import pistol from './pistol.jpg';
import alertImg from './alert.png';

export default function Alert() {
    const { showAlert, setShowAlert, detection } = useGlobalData();

    const hideAlert = () => {
        setShowAlert(false);
    };

    // const audio = useRef()

    const [imgUrl, setImgUrl] = useState('');

    // useEffect(() => {

    //     if (showAlert === false) {
    //         window.document.body.style.overflowY = 'auto';
    //     } else {
    //         window.document.body.style.overflowY = 'hidden';
    //     }
    //     //eslint-disable-next-line
    // }, [showAlert]);

    useEffect(() => {
        if (detection['Class Label'] === 'Gun') {
            setImgUrl(gun);
        }
        else if (detection['Class Label'] === 'Pistol') {
            setImgUrl(pistol);
        }
        else if (detection['Class Label'] === 'Knife') {
            setImgUrl(knife);
        }
        else {
            setImgUrl(alertImg);
        }
    
    }, [detection]);
    


    const location = useLocation();
    const path = location.pathname;

    if (path === '/' || path === '/login' || path === '/signup') {
        return null;
    }
    if (detection['Class Label'] === 'Unknown' || detection['Class Label'] == null || detection['Class Label'] === 'null' || detection['Class Label'] === "") {
        return null;
    }

    return null;
    return ReactDOM.createPortal(
        showAlert && (
            <>
                <div className="alert-background-container"></div>
                <audio src={aud} loop autoPlay></audio>
                <div className="alert-container">
                    <h3 className="center">Alert Weapon Detected</h3>
                    <img src={imgUrl} alt={`Weapon ${detection['Class Label']} detected`} />
                    <div>
                        <p>
                            Weapon : <span>{detection['Class Label']}</span>
                        </p>
                        <p>
                            At Location :{' '}
                            <a href={detection.Location} target="_blank" rel="noopener noreferrer">
                                Click Here To View On Map
                            </a>
                        </p>
                        <p>
                            Time : <span>{detection.Time}</span>
                        </p>
                        <p>
                            Date : <span>{detection.Date}</span>
                        </p>
                    </div>
                    <div onClick={hideAlert} className="alert-close-btn">
                        x
                    </div>
                </div>
            </>
        ),
        document.querySelector(`#alert-layer`)
    );
}
