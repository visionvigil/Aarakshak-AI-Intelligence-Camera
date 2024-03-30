import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// Toastify For Alerts
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// CSS
import './css/App.css';
import './css/Form.css';
import './css/Sidemenu.css';
import './css/Dashboard.css';
import './css/Zone.css';
import './css/VideoUploader.css';

// Elements
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Form/About';
import Login from './Components/Form/Login';
import SignUp from './Components/Form/SignUp';
import Form from './Components/Layout/InputForm';
import PanelLayout from './Components/Layout/PanelLayout';
import DashboardLayout from './Components/Layout/DashboardLayout';
import ZonalCamLayout from './Components/Layout/ZonalCamLayout';
import ZoneA from './Components/Zone/ZoneA';
import ZoneB from './Components/Zone/ZoneB';
import ZoneC from './Components/Zone/ZoneC';
import ZoneD from './Components/Zone/ZoneD';
import ZoneE from './Components/Zone/ZoneE';
import Zone from './Components/Zone/Zone';
import Videouploader from './Components/VideoUploader/Videouploader';
import Alert from './Components/Alert/Alert';

// Data Context
import DataState from './Context/Data/Datastate';

// Firebase Config File
import { auth } from './Firebase';

// Img logo
import logo from './img/assets/logo-circle.png';
import NotFound from './Components/404NotFound/NotFound';
import Triggers from './Components/Triggers/Triggers';

// Audio
// import sound from './audio/alert.wav';

function App() {

    const title = 'आरक्षक';

    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName)
            }
            else (
                setUserName("")
            )
            // console.log(user);
        })

    }, [])


    useEffect(() => {

        // const location = window.location;
        // const alertSound = () => {
        //     if (location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') {
        //         return;
        //     }
        //     // let aud = new Audio(sound);
        //     toast.error(`Alert : PISTOL is detected in ZONE-A`);
        //     // aud.play();
        // }
        // alertSound();

    }, []);


    return (
        <div className='App'>
            <DataState>
                <Router>
                    <Navbar title={title} logo={logo} />
                    <Alert />
                    <Routes>
                        {/* <Route path='/' element={<Login title={title} logo={logo} />} /> */}
                        <Route path='/' element={<Form title={title} logo={logo} />} >
                            <Route path='/' element={<About title={title} logo={logo} />} />
                            <Route path='/login' element={<Login title={title} logo={logo} />} />
                            <Route path='/signup' element={<SignUp title={title} logo={logo} />} />
                        </Route>
                        <Route path='/panel' element={<PanelLayout title={title} useName={userName} />} >
                            <Route path='/panel/dashboard' element={<DashboardLayout />} />
                            <Route path='/panel/zonalcam' element={<ZonalCamLayout />}>
                                <Route path='/panel/zonalcam/*' element={<Zone />} />
                                <Route path='/panel/zonalcam' element={<Zone />} />
                                <Route path='/panel/zonalcam/zonea' element={<ZoneA />} />
                                <Route path='/panel/zonalcam/zoneb' element={<ZoneB />} />
                                <Route path='/panel/zonalcam/zonec' element={<ZoneC />} />
                                <Route path='/panel/zonalcam/zoned' element={<ZoneD />} />
                                <Route path='/panel/zonalcam/zonee' element={<ZoneE />} />
                            </Route>
                            <Route path='/panel/videouploader' element={<Videouploader />} />
                            <Route path='/panel/triggers' element={<Triggers />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </DataState>
        </div>
    );
}

export default App;
