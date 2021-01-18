import {USER_DETAIL_RESULT} from '../Actions/UsersDetail';

const users = (state = [], action) => {

    switch (action.type) {
        case USER_DETAIL_RESULT :
            return action.payload;
        default:
            return state
    }
};

export default users;