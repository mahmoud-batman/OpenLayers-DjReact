import {
  CHANGE_VIEW,
  RESET_VIEW,
  LIST_VIEW,
  ADD_BOOKMARK_START,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAIL,
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const INIT_STATE = {
  center: [0, 0],
  zoom: 0,
  extent: [-21000000, -11000000, 21000000, 11000000],
  bookmark_list: [],
  btn_loading: false,
  success: null,
};

const changeView = (state, payload) => {
  return updateObject(state, {
    center: payload.center,
    zoom: payload.zoom,
    extent: payload.extent,
  });
};

const resetView = (state) => {
  return updateObject(state, {
    center: INIT_STATE.center,
    zoom: INIT_STATE.zoom,
    extent: INIT_STATE.extent,
  });
};

const listView = (state, payload) => {
  return updateObject(state, {
    bookmark_list: payload,
  });
};

const addBookmarkStart = (state, payload) => {
  return updateObject(state, {
    btn_loading: true,
    success: null,
  });
};

const addBookmarkSuccess = (state, payload) => {
  return updateObject(state, {
    btn_loading: false,
    success: true,
    bookmark_list: [...state.bookmark_list, payload],
  });
};

const addBookmarkFail = (state, payload) => {
  return updateObject(state, {
    btn_loading: false,
    success: false,
  });
};

const MapReducer = (state = INIT_STATE, actions) => {
  switch (actions.type) {
    case CHANGE_VIEW:
      return changeView(state, actions.payload);
    case LIST_VIEW:
      return listView(state, actions.payload);
    case ADD_BOOKMARK_START:
      return addBookmarkStart(state, actions.payload);
    case ADD_BOOKMARK_SUCCESS:
      return addBookmarkSuccess(state, actions.payload);
    case ADD_BOOKMARK_FAIL:
      return addBookmarkFail(state, actions.payload);
    case RESET_VIEW:
      return resetView(state, actions.payload);

    default:
      return state;
  }
};

export default MapReducer;
