import './App.css';

import React from "react";

import Header from './components/Header/Header.jsx';
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
import Sidebar from "./components/Sidebar/Sidebar";

export default function App(props) {

  return (
    <Router>
      <div className='app-wrapper'>
            <Header/>
            <Sidebar state ={props.state.sidebarPage}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state ={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        state ={props.state.profilePage}
                        addPost = {props.addPost}
                        updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/music' element={<Music />}/>
                    <Route path='/settings' element={<Settings />}/>
                </Routes>
            </div>
        </div>
    </Router>
  );
}
