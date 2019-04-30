import {
  TEST_ACTION,
} from './../../../constants/actionTypes';

const initialState = {
  on: 'try me',
};

const testReducer = (state = initialState, action) => {

  switch(action.type) {
    case TEST_ACTION:
      let on = 'try me';
      if (state.on === 'try me') {
        on = 'working';
      }
      return {
        ...state,
        on,
      };

    default:
      return state;
  }

  return state;
};

export default testReducer;
