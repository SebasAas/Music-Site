import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../components/Home/HomePage';
import Login from '../components/Form/Login';
import Register from '../components/Form/Register';
import EmailConfirm from '../components/Email/EmailConfirm';
import EmailConfirmed from '../components/Email/EmailConfirmed';
import NotFound from '../components/NotFound/NotFound';

// Music
import MusicPage from '../components/Music/MusicTable';

// Profile
import ProfilePage from '../components/Profile/ProfilePage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/verificationID" component={EmailConfirm} />
      <Route exact path="/verificationID/:id" component={EmailConfirmed} />
      <Route exact path="/music" component={MusicPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
