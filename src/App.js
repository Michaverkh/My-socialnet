import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            //Navlink handeling here ie Navbar component with custom css
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />}/>
                        <Route path='/profile' element={<Profile />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;