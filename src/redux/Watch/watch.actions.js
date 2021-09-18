import {ADD,DELETE} from './watch.types';

export const add = () => {
    return {
      type : ADD
    }
};
export const remove = () => {
    return {
        type : DELETE
    }
}