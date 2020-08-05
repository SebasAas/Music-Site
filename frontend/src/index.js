import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Routes
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

// Persist Redux
import { PersistGate } from 'redux-persist/integration/react';

// Env
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
