export const JSON_FETCH = 'JSON_FETCH';
export const JSON_FETCH_RESULT = 'JSON_FETCH_RESULT';
export const JSON_FETCH_ERROR = 'JSON_FETCH_ERROR';


export const fetchJson = () => async (dispatch) => {
    dispatch({type: JSON_FETCH});

    try {
        const response = await fetch(
            'http://www.json-generator.com/api/json/get/cgeoLjEvLS?indent=2',
            {method: 'GET'}
        );
        const result = await response.json();


        dispatch({type: JSON_FETCH_RESULT, payload: result});

        // return result;
    } catch (error) {
        dispatch({type: JSON_FETCH_ERROR, error: error})
    }
};

