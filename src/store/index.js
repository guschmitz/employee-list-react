import { combineReducers } from 'redux';
import { employeeReducer } from './employeeReducer';
import { msgReducer } from '../store/msgReducer';

const mainReducer = combineReducers({
    employees: employeeReducer,
    message: msgReducer,
})

export default mainReducer;