const initialState = {
  data: [],
  isFetching: false,
  error: null
};

export default function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: null,
      };
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {...state};
  }
}