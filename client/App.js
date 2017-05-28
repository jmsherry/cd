/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter as Router } from 'react-router-dom';


// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <div>
        <Router>
          {routes}
        </Router>
        <ReduxToastr
          timeOut={40000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
