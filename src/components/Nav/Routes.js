//React
import React from "react";
import { Switch } from "react-router-dom";
//Route types
import NormalRoute from "./NormalRoute";
import UnloggedRoute from "./UnloggedRoute";
import LoggedRoute from "./LoggedRoute";
//Pages
import LoginPage from '../../pages/LoginPage.js';
import LandingPage from '../../pages/LandingPage.js';
import DashboardPage from '../../pages/DashboardPage.js';
import RegisterPage from '../../pages/RegisterPage.js';
import findMatchPage from '../../pages/findMatchPage.js';
import MatchHistoryPage from '../../pages/MatchHistoryPage.js';
import ProfilePage from '../../pages/ProfilePage.js';



const reload = () => window.location.reload();

export default function Routes({ authProps }) {
    return (
        <Switch>
            <NormalRoute exact path="/" component={LandingPage} title="GamersMeet | Home" />

            <UnloggedRoute exact path="/login" component={LoginPage} authProps={authProps} title="GamersMeet | Login" />
            <UnloggedRoute exact path="/register" component={RegisterPage} authProps={authProps} title="GamersMeet | Register" />

            <LoggedRoute exact path="/dashboard" component={DashboardPage} authProps={authProps} title="GamersMeet | Dashboard" />
            <LoggedRoute exact path="/find-match" component={findMatchPage} authProps={authProps} title="GamersMeet | Find Your Match" />
            <LoggedRoute exact path="/match-history" component={MatchHistoryPage} authProps={authProps} title="GamersMeet | Previous Matches" />
            <LoggedRoute exact path="/profile-page" component={ProfilePage} authProps={authProps} title="GamersMeet | Profile" />


            <NormalRoute path="*" component={NotFoundPage} title="GamersMeet | Page Not Found" />
        </Switch>
    );
}
