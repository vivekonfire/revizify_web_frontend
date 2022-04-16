const initialState = {
  baseURL: "http://data.revizify.com/api/v1/",
  validity_password: {
    status: null,
    message: null,
  },
  validity_username: {
    status: null,
    message: null,
  },
  changePassword: false,
  error: null,
  registerError: null,
  valid_token: false,
  user_exist: false,
  token: null,
  refreshToken: null,
  user: {
    name: null,
    email: null,
    phone_number: null,
    user_name: null,
  },
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload.at,
        refreshToken: action.payload.rt,
        valid_token: true,
        error: null,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          phone_number: action.payload.phone_number,
          user_name: action.payload.user_name,
        },
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.at,
        refreshToken: action.payload.rt,
        valid_token: true,
        error: null,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          phone_number: action.payload.phone_number,
          user_name: action.payload.user_name,
        },
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        changePassword: true,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CHANGE_PASSWORD_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CHECK_USER_EXISTING":
      return {
        ...state,
        user_exist: true,
        user: {
          user_name: action.payload.user_name,
          email: action.payload.email,
        },
      };
    case "VALIDATE_TOKEN":
      return {
        ...state,
        valid_token: true,
        token: action.payload.token,
        refreshToken: action.payload.rtoken,
      };
    case "ERROR_VALIDATE":
      return {
        ...state,
        valid_token: false,
        token: null,
      };
    case "REFRESH_TOKEN":
      return {
        ...state,
        valid_token: true,
        token: action.payload.access,
        refreshToken: action.payload.refresh,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        valid_token: false,
        refreshToken: null,
      };
    case "PASSWORD_VALIDITY":
      return {
        ...state,
        validity_password: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case "USERNAME_VALIDITY":
      return {
        ...state,
        validity_username: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default authreducer;
