import { combineReducers } from 'redux';

import reducer from './Watch/watch.reducer';
const rootReducer = combineReducers({
    counter: reducer,

});

export default rootReducer;