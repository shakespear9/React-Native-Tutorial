export const SET_CONFIG = 'SET_CONFIG';

export const setConfig = config => dispatch => {
  dispatch({
    type: SET_CONFIG,
    payload: config,
  });
};
