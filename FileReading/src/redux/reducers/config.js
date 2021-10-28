import {SET_CONFIG} from '../actions/config';

const initialState = {
  company: '',
  userID: '',
  Password: '',
  lang: '',
  userkey: '',
};

function configReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIG:
      return action.payload;
    default:
      return state;
  }
}

export default configReducer;
