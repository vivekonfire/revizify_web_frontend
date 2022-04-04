const initialState = {
  comments: null,
  replys: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    case "GET_REPLYS":
      return {
        ...state,
        replys: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
