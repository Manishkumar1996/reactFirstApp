import {combineReducers} from 'redux';
import json from './Reducer_json';
import users from './HomeReducer';

export default combineReducers({
    json,
    users
});