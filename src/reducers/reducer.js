
import { LIST_START, LIST_SUCCESS, LIST_FAILURE } from './../actions/list.js'

const initialState = {
  data: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_START:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
