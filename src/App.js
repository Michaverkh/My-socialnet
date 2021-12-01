import './App.css';

import React from "react";

import Header from './components/Header/Header.jsx';
import Navbar from './components/Sidebar/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state ={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile state ={props.state.profilePage}/>}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </div>
        </div>
    </Router>
  );
}
