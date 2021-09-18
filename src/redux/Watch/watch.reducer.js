import {ADD,DELETE} from './watch.types';

const INITIAL_STATE = {
    count: 5,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD:

           return {

             ...state, count: state.count + 1,

           };

        case DELETE:

           return {
              ...state, count: state.count - 1,

           };

         default: return state;

    }

};

export default reducer;