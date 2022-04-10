const initialState = {
  userinfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_COURSE":
      return {
        ...state,
        userinfo: action.payload,
      };
    case "USER_ERROR":
      return {
        ...state,
        userinfo: false,
      };
    default:
      return state;
  }
};

export default reducer;
