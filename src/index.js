import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/App/';
import configureStore from './configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router>
            <App />
      </Router>
  </Provider>,
  document.getElementById('root'),
);
