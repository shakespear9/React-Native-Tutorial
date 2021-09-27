//redux consist of Actions(What to do), Reducers(How to do), Store

//reducer กรอง action เพื่อที่ทำการ set state ใหม่ด้วยการ RETURN state ใหม่

export const SET_USER_NAME = 'SET_USER_NAME'; // type of action
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_INCREASE_AGE = 'SET_INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const mockAPI = `https://mocki.io/v1/f6726a7a-b8b4-41a0-bc37-6ee607fc26b8`;

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const increaseAge = () => dispatch => {
  dispatch({
    type: SET_INCREASE_AGE,
  });
};

export const getCities = () => {
  try {
    return async dispatch => {
      const result = await fetch(mockAPI, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        console.log('json = ' + json);
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
