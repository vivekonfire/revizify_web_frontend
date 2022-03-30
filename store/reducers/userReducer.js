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
    default:
      return state;
  }
};

export default reducer;
