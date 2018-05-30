import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';

import UsersTable from '../components/UsersTable';
import Spinner from '../components/Spinner';
import App from '../components/App';


describe('<UsersTable />', () => {

	it('Render UserTable', () => {
		const wrapper = shallow(<App logged = {true} />);
		expect(wrapper
			.find(Route)
			.find({ path: '/users' })
		).toHaveLength(1);
	});

	it('Render User', () => {
		const wrapper = shallow(<UsersTable users = {[
			{
				"firstName": "test",
				"lastName": "test",
				"age": 1,
				"visits": 0,
				"progress": 0,
				"status": "relationship",
				"id": 74
			},
		]}/>);
		expect(wrapper.find('tbody').children()).toHaveLength(1);
	});

	it('Render Spinner', () => {
		const wrapper = shallow(<UsersTable users = {[]}/>);
		expect(wrapper.contains(<Spinner />)).toBeTruthy;
	})

});