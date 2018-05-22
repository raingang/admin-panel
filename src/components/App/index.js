import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersTable from '../../containers/UsersTable/';
import UserPage from '../../containers/UserPage';
import NavPanel from '../../containers/NavPanel';
import AuthForm from '../../containers/AuthForm';

import '../../styles/App/index.css';

const App = (props) => {
	return (
        <div className = 'app'>
	        <NavPanel />
	        <main className = 'main'>
		        <div className = 'main-wrapper'>
			        {!props.logged ? <AuthForm /> : (
			        	<Switch>
					        <Route path = '/users' exact component = {UsersTable} />
					        <Route path = '/users/:id' component = {UserPage} />
				        </Switch>
				        )}
		        </div>
	        </main>
        </div>
    );
};

App.propTypes = {

};

export default App;
