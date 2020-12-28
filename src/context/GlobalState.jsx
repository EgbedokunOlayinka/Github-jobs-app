import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  originalJobs: [],
  jobs: [],
  searchInput: "",
  location: "",
  loading: false,
  error: null,
  currentAppPage: 1,
  jobsPerPage: 7,
  fullTime: true,
  job: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  // Actions
  function filterFullTime(jobs) {
    if (state.fullTime === false) {
      const filteredJobs = jobs.filter((job) => job.type !== "Full Time");
      return filteredJobs;
    }

    return jobs;
  }

  function filterLocation(jobs) {
    if (state.location.length !== 0) {
      const filteredJobs = jobs.filter((job) =>
        job.location.toLowerCase().includes(state.location.toLowerCase())
      );
      return filteredJobs;
    }

    return jobs;
  }

  async function getJobs(searchDetails = "", search = false) {
    try {
      dispatch({
        type: "GET_JOBS_LOADING",
      });

      let semiFinalArr = [];
      let finalArr = [];
      let pageNum = 1;

      do {
        let { data } = await axios.get(
          `${proxyurl}https://jobs.github.com/positions.json?description=${searchDetails}&page=${pageNum}`
        );

        if (data.length > 1) {
          semiFinalArr = data;
          finalArr = [...finalArr, ...data];
        } else {
          semiFinalArr = data;
        }

        pageNum++;
      } while (semiFinalArr.length !== 0);

      dispatch({
        type: "GET_JOBS_SUCCESS",
        payload: finalArr,
      });

      const filteredJobs = filterFullTime(finalArr);
      const fullyFilteredJobs = filterLocation(filteredJobs);

      dispatch({
        type: "SET_JOBS",
        payload: fullyFilteredJobs,
      });

      if (search) {
        dispatch({
          type: "SET_CURRENT_APP_PAGE",
          payload: 1,
        });
      }
    } catch (err) {
      dispatch({
        type: "GET_JOBS_ERROR",
      });
    }
  }

  async function getJob(id) {
    try {
      dispatch({
        type: "GET_JOB_LOADING",
      });

      const { data } = await axios.get(
        `${proxyurl}https://jobs.github.com/positions/${id}.json`
      );

      dispatch({
        type: "GET_JOB_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "GET_JOBS_ERROR",
      });
    }
  }

  function setCurrentAppPage(page) {
    dispatch({
      type: "SET_CURRENT_APP_PAGE",
      payload: page,
    });
  }

  function setFullTime(val) {
    let filteredJobs;

    let filteredLocationJobs = state.originalJobs.filter((job) =>
      job.location.toLowerCase().includes(state.location.toLowerCase())
    );

    if (val === false) {
      filteredJobs = filteredLocationJobs.filter(
        (job) => job.type !== "Full Time"
      );
    } else {
      filteredJobs = filteredLocationJobs;
    }

    dispatch({
      type: "SET_JOBS",
      payload: filteredJobs,
    });

    dispatch({
      type: "SET_FULL_TIME",
    });

    dispatch({
      type: "SET_CURRENT_APP_PAGE",
      payload: 1,
    });
  }

  function setLocation(val) {
    let filteredFullTimeJobs = state.fullTime
      ? state.originalJobs
      : state.originalJobs.filter((job) => job.type !== "Full Time");

    let filteredJobs = filteredFullTimeJobs.filter((job) =>
      job.location.toLowerCase().includes(val.toLowerCase())
    );

    dispatch({
      type: "SET_JOBS",
      payload: filteredJobs,
    });

    dispatch({
      type: "SET_LOCATION",
      payload: val,
    });

    dispatch({
      type: "SET_CURRENT_APP_PAGE",
      payload: 1,
    });
  }

  function setSearchInput(val) {
    dispatch({
      type: "SET_SEARCH_INPUT",
      payload: val,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        originalJobs: state.originalJobs,
        searchInput: state.searchInput,
        location: state.location,
        error: state.error,
        loading: state.loading,
        currentAppPage: state.currentAppPage,
        jobsPerPage: state.jobsPerPage,
        fullTime: state.fullTime,
        job: state.job,
        getJobs,
        setCurrentAppPage,
        setFullTime,
        setLocation,
        getJob,
        setSearchInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
