export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "GET_JOBS_SUCCESS":
      return {
        ...state,
        originalJobs: action.payload,
        loading: false,
        error: "",
        job: null,
      };
    case "GET_JOBS_ERROR":
      return {
        ...state,
        error: "An error occurred. Please try again",
        loading: false,
      };
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "SET_CURRENT_APP_PAGE":
      return {
        ...state,
        currentAppPage: action.payload,
      };
    case "SET_FULL_TIME":
      return {
        ...state,
        fullTime: !state.fullTime,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.payload,
      };
    case "GET_JOB_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "GET_JOB_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        job: action.payload,
      };

    default:
      return state;
  }
};
