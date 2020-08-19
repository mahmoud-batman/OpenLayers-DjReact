import {
  CHANGE_VIEW,
  ADD_BOOKMARK_START,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAIL,
  RESET_VIEW,
  LIST_VIEW,
} from "./actionTypes";

import { bookmarkUrl, bookmarkDetailUrl } from "../../constants";
import axios from "axios";

export const changeView = (payload) => {
  return {
    type: CHANGE_VIEW,
    payload,
  };
};

export const bookmarkChangeView = (id) => {
  return (dispatch) => {
    axios
      .get(bookmarkDetailUrl(id))
      .then((res) => dispatch(changeView(res.data)));
  };
};

export const mapChangeView = (obj) => {
  return (dispatch) => {
    dispatch(changeView(obj));
  };
};

export const resetView = () => {
  return {
    type: RESET_VIEW,
  };
};

export const bookmarkListView = () => {
  return (dispatch) => {
    axios.get(bookmarkUrl).then((res) => dispatch(listView(res.data)));
  };
};

export const listView = (payload) => {
  return {
    type: LIST_VIEW,
    payload,
  };
};

export const addBookmarkStart = (payload) => {
  return {
    type: ADD_BOOKMARK_START,
  };
};

export const addBookmarkSuccess = (payload) => {
  return {
    type: ADD_BOOKMARK_SUCCESS,
    payload,
  };
};

export const addBookmarkFail = (payload) => {
  return {
    type: ADD_BOOKMARK_FAIL,
  };
};

export const addBookmark = (obj) => {
  return (dispatch) => {
    dispatch(addBookmarkStart());
    axios
      .post(bookmarkUrl, obj)
      .then((res) => {
        dispatch(addBookmarkSuccess(res.data));
      })
      .catch((err) => dispatch(addBookmarkFail()));
  };
};
