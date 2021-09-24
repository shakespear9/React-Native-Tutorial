//redux consist of Actions(What to do), Reducers(How to do), Store

//reducer กรอง action เพื่อที่ทำการ set state ใหม่ด้วยการ RETURN state ใหม่

export const SET_USER_NAME = 'SET_USER_NAME'; // type of action
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_INCREASE_AGE = 'SET_INCREASE_AGE';

export const setName = name => dispath => {
  dispath({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = age => dispath => {
  dispath({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const increaseAge = () => dispath => {
  dispath({
    type: SET_INCREASE_AGE,
  });
};
