import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersTable from '../../containers/UsersTable/';
import UserPage from '../../containers/UserPage';
import NavPanel from '../../containers/NavPanel';

import '../../styles/App/index.css';

const App = () => {
  return (
      <div className = 'app'>
        <NavPanel />
          <Switch>
              <Route path = '/users' exact component = {UsersTable} />
              <Route path = '/users/:id' component = {UserPage} />
          </Switch>
      </div>
  );
};

export default App;
