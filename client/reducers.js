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
import basket from './modules/Basket/BasketReducer';
import checkout from './modules/Checkout/CheckoutReducer';
import confirmation from './modules/Confirmation/ConfirmationReducer';
import contact from './modules/Contact/ContactReducer';
import menders from './modules/Menders/MendersReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  home,
  services,
  basket,
  checkout,
  confirmation,
  contact,
  menders,
  toastr: toastrReducer,
  form: formReducer,
  routerReducer,
});
