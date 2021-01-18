export const USER_DETAIL_FETCH = 'USER_DETAIL_FETCH';
export const USER_DETAIL_RESULT = 'USER_DETAIL_RESULT';
export const USER_DETAIL_Error = 'USER_DETAIL_Error';


export const usersDetail = () => async (dispatch) => {
    dispatch({type: USER_DETAIL_FETCH});

    try {
        const response = await fetch(
            'http://www.json-generator.com/api/json/get/cfnOonKhua?indent=2',
            {method: 'GET'}
        );

        const result = await response.json();
        dispatch({type: USER_DETAIL_RESULT, payload: result});

    } catch (error) {
        dispatch({type: USER_DETAIL_Error, error: error});
    }
};
