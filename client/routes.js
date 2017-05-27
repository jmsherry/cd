/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Home/pages/HomePage/HomePage');
  require('./modules/About/pages/AboutPage/AboutPage');
  require('./modules/Services/pages/ServicesPage/ServicesPage');
  require('./modules/Menders/pages/MendersPage/MendersPage');
  require('./modules/Contact/pages/ContactPage/ContactPage');
  require('./modules/FAQ/pages/FAQPage/FAQPage');
  require('./modules/Legal/pages/LegalPage/LegalPage');
  require('./modules/Basket/pages/BasketPage/BasketPage');
  require('./modules/Checkout/pages/CheckoutPage/CheckoutPage');
  require('./modules/Confirmation/pages/ConfirmationPage/ConfirmationPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Home/pages/HomePage/HomePage').default);
        });
      }}
    />
    <Route
      path="/about-us"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/About/pages/AboutPage/AboutPage').default);
        });
      }}
    />
    <Route
      path="/your-repairs"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Services/pages/ServicesPage/ServicesPage').default);
        });
      }}
    />
    <Route
      path="/meet-the-menders"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Menders/pages/MendersPage/MendersPage').default);
        });
      }}
    />
    <Route
      path="/contact-us"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Contact/pages/ContactPage/ContactPage').default);
        });
      }}
    />
    <Route
      path="/faqs"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/FAQ/pages/FAQPage/FAQPage').default);
        });
      }}
    />
    <Route
      path="/legal"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Legal/pages/LegalPage/LegalPage').default);
        });
      }}
    />
    <Route
      path="/basket"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Basket/pages/BasketPage/BasketPage').default);
        });
      }}
    />
    <Route
      path="/checkout"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Checkout/pages/CheckoutPage/CheckoutPage').default);
        });
      }}
    />
    <Route
      path="/confirmation"
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./modules/Confirmation/pages/ConfirmationPage/ConfirmationPage').default);
        });
      }}
    />
  </Route>
);
