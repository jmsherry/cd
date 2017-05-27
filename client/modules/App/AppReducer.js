// Import Actions
import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from './AppActions';

// Initial State
const initialState = {
  menuOpen: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        menuOpen: false,
      };

    case OPEN_MENU:
      return {
        ...state,
        menuOpen: true,
      };

    case TOGGLE_MENU: {
      const nextMenuState = !state.menuOpen;
      return {
        ...state,
        menuOpen: nextMenuState,
      };
    }

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getMenuState = state => state.app.menuOpen;

// Export Reducer
export default AppReducer;
