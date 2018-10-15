
import apiRequest from "../components/apiRequest";

// Constants
export const LIST_START = 'LIST_START';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

/**
 * This function calls sends request to API to get the data.
 **/
export function getList() {
    return (dispatch) => {
        dispatch(startList());
         try {
            apiRequest('GET', 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular').then(
                response => { dispatch(listSuccess(response.data)); }
            );
        } catch (err) {
            return dispatch(listFailure(err));
        }
    }
}

// Actions
export const startList = () => ({
  type: LIST_START,
    data: [],
});

export const listSuccess = data => ({
  type: LIST_SUCCESS,
  data,
});

export const listFailure = error => ({
  type: LIST_FAILURE,
  error,
});
