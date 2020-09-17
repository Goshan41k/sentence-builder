import { combineReducers } from 'redux';
import sentencesReducer from './sentencesReducer';

const rootReducer = combineReducers({ sentencesReducer });

export default rootReducer;
