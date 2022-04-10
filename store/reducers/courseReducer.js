const initialState = {
  created_courses: null,
  downloaded_courses: null,
  course: null,
  explore: null,
  bookmarkCheck: false,
  like: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        created_courses: action.payload,
      };
    case "GET_COURSE":
      return {
        ...state,
        course: action.payload,
      };
    case "GET_COURSE_ERROR":
      return {
        ...state,
        course: false,
      };
    case "GET_DOWNLOAD_COURSES":
      return {
        ...state,
        downloaded_courses: action.payload,
      };
    case "GET_ARCHIVE_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    case "EXPLORE_COURSE":
      return {
        ...state,
        explore: action.payload,
      };
    case "CHECK_BOOKMARK":
      return {
        ...state,
        bookmarkCheck: action.payload,
      };
    case "LIKE":
      return {
        ...state,
        like: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
