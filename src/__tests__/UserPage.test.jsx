import React from 'react';
import { shallow } from 'enzyme';

import UserPage from '../components/UserPage';

describe('<UserPage />', () => {
  it('Render UserPage', () => {
    const wrapper = shallow(<UserPage
      user={{
        firstName: 'test',
        lastName: 'test',
        age: 1,
        visits: 0,
        progress: 0,
        status: 'relationship',
        id: 74,
      }}
    />);
    expect(wrapper.find('.user')).toHaveLength(1);
  });

  it('Call handler on edit', () => {
    const onToggleEdit = jest.fn();
    UserPage.prototype.onToggleEdit = onToggleEdit;
    const wrapper = shallow(<UserPage
      user={{
        firstName: 'test',
        lastName: 'test',
        age: 1,
        visits: 0,
        progress: 0,
        status: 'relationship',
        id: 74,
      }}
    />);
    wrapper
      .find('.btn-outline-success')
      .simulate('click');
    expect(onToggleEdit).toHaveBeenCalled();
  });

  it('Call handler on delete', () => {
    const onDelete = jest.fn();
    const handleDelete = jest.fn();
    const history = {};
    history.push = jest.fn();
    UserPage.prototype.onDelete = onDelete;
    const wrapper = shallow(<UserPage
      user={{
        firstName: 'test',
        lastName: 'test',
        age: 1,
        visits: 0,
        progress: 0,
        status: 'relationship',
        id: 74,
      }}
      handleDelete={handleDelete}
      history={history}
    />);
    wrapper
      .find('.btn-outline-danger')
      .simulate('click');
    expect(onDelete).toHaveBeenCalled();
  });
});
