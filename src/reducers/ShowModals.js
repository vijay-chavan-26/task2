import {
  SHOW_MODAL,
  CLOSE_MODAL,
  SHOW_REMOVE_MODAL,
  CLOSE_REMOVE_MODAL,
  SHOW_UPDATE_MODAL,
  CLOSE_UPDATE_MODAL,
  LOGGED_IN,
  LOGGED_OUT,
} from "../actions/Operation";

const getLocalData = () => {
  let loginStatus = localStorage.getItem("loginStatus");
  if (loginStatus === null) return false;
  else return loginStatus;
};

const modalInitialState = false;
const loginInitialState = getLocalData();

export const setShow = (state = modalInitialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return (state = true);
    case CLOSE_MODAL:
      return (state = false);
    default:
      return state;
  }
};

export const setRemoveModal = (state = modalInitialState, action) => {
  switch (action.type) {
    case SHOW_REMOVE_MODAL:
      return (state = true);
    case CLOSE_REMOVE_MODAL:
      return (state = false);
    default:
      return state;
  }
};

export const setUpdateModal = (state = modalInitialState, action) => {
  switch (action.type) {
    case SHOW_UPDATE_MODAL:
      return (state = true);
    case CLOSE_UPDATE_MODAL:
      return (state = false);
    default:
      return state;
  }
};

export const setLogin = (state = loginInitialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return (state = true);
    case LOGGED_OUT:
      return (state = false);
    default:
      return state;
  }
};
