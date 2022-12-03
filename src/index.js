import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginView from './routes/loginView';
import DashBoardView from './routes/dashboardView';
import EditProfileView from './routes/editProfileView';
import SignOutView from './routes/signout';
import PublicProfileView from './routes/publicProfileView';
import ChooseUsernameView from './routes/ChooseUsernameView';

ReactDOM.render( <
    BrowserRouter >
    <
    Routes >
    <
    Route path = "/"
    element = { < App / > }
    / >  <
    Route path = "login"
    element = { < LoginView / > }
    / > <
    Route path = "dashboard"
    element = { < DashBoardView / > }
    / > <
    Route path = "dashboard/profile"
    element = { < EditProfileView / > }
    / >   <
    Route path = "signout"
    element = { < SignOutView / > }
    / > <
    Route path = "username"
    element = { < PublicProfileView / > }
    / > <
    Route path = "choose-username"
    element = { < ChooseUsernameView / > }
    / >    < /
    Routes > < /
    BrowserRouter > ,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();