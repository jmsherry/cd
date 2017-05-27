import { } from './ConfirmationActions';

// Initial State
const initialState = { data: [] };

const ConfirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_POST :
    //   return {
    //     data: [action.post, ...state.data],
    //   };

    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default ConfirmationReducer;
