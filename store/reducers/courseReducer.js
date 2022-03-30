const initialState = {
  courses: null,
  course: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_COURSE":
      return {
        ...state,
        course: action.payload,
      };
    case "GET_DOWNLOAD_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
