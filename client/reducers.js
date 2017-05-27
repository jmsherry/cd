/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import app from './modules/App/AppReducer';
import home from './modules/Home/HomeReducer';
import services from './modules/Services/ServicesReducer';
import profile from './modules/Profile/ProfileReducer';
import intl from './modules/Intl/IntlReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  home,
  services,
  profile,
  intl,
  toastr: toastrReducer,
  form: formReducer,
  routerReducer,
});
