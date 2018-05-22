import { combineReducers } from 'redux';

import sections from './sections';
import users from './users';
import user from './user';
import showModal from './showModal';
import filter from './filter';
import logged from './logged';

const reducer = combineReducers({ users, user, sections, showModal, filter, logged });
export default reducer;