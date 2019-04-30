import {
  TEST_ACTION,
} from './../../../constants/actionTypes';

const initialState = {
  on: 'try me',
};

const testReducer = (state = initialState, action) => {

  switch(action.type) {
    case TEST_ACTION:
      return {
        ...state,
        on: 'working',
      };

    default:
      return state;
  }

  return state;
};

export default testReducer;
