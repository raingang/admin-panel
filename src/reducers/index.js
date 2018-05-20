import { combineReducers } from 'redux';

import sections from './sections';
import users from './users';
import user from './user';
import showModal from './showModal';

const reducer = combineReducers({ users, user, sections, showModal });
export default reducer;