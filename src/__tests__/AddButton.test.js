import React from 'react';
import { shallow } from 'enzyme';

import UserForm from '../components/UserForm';

describe('Add Button', () => {

	it('Render Add Button', () => {
		const wrapper = shallow(<UserForm>Add</UserForm>)
			.find('button')
			.find({type: 'submit'});
		expect(wrapper).toHaveLength(1);
	});

	it('Add button have "Add"', () => {
		const wrapper = shallow(<UserForm>Add</UserForm>)
			.find('button')
			.find({type: 'submit'});
		expect(wrapper
			.text()
		).toBe('Add');
	});

	it('If the validation fails, the function will not be called', () => {
		let handleActionMock = jest.fn();
		const wrapper = shallow(<UserForm handleAction = {handleActionMock}>Add</UserForm>)
			.find('form');
		wrapper.simulate('submit', { preventDefault() {} });
		expect(handleActionMock).not.toHaveBeenCalled();
	});

	it('If the validation done, the function will be called', () => {
		let handleActionMock = jest.fn();
		const wrapper = shallow((
			<UserForm
			handleAction = {handleActionMock}
			firstName = {"test"}
			lastName =  {"test"}
			age =  {1}
			visits =  {0}
			progress = {0}
			status = {"relationship"}
			id =  {74}>
			Add
			</UserForm>))
			.find('form');
		wrapper.simulate('submit', { preventDefault() {} });
		expect(handleActionMock).toHaveBeenCalled();
	});

});
