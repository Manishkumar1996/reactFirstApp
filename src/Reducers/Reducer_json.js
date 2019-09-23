import {JSON_FETCH_RESULT} from '../Actions/JsonList';

const json = (state = [], action) => {

    switch (action.type) {
        case JSON_FETCH_RESULT :
            return action.payload;
        default:
            return state
    }
};

export default json;