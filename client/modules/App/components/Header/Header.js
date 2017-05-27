import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontAwesome from 'react-fontawesome';

// Import Style
import styles from './Header.css';
import logo from './logo.jpg';

import { toggleMenu } from './../../AppActions';

// App Selectors
import { getMenuState } from './../../AppReducer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuHandler = this.menuHandler.bind(this);
    console.log('logo', logo);
  }
  menuHandler() {
    const { dispatch } = this.props;
    dispatch(toggleMenu());
  }
  render() {
    const appbarStyle = {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      backgroundColor: '#000',
      color: '#fff',
    };

    const hamburger = {
      color: '#fff',
      width: '20px',
      height: '20px',
      margin: '0',
      padding: '10px',
      fontSize: '3rem',
      zIndex: '99999',
      display: 'block',
    };

    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <Drawer width={200} openSecondary open={this.props.menuState} >
            <AppBar title="Menu" />
            <MenuItem>
              <Link to="/">
            Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="services">
            Services
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="my-details">
            My Account
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="my-garments">
            My Garments
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="contact">
            Contact
              </Link>
            </MenuItem>
          </Drawer>
          <AppBar
            title={
              <h1 className={styles['site-title']}>
                <Link to="/" >
                  <img src="" alt="Clothes Doctor" />
                </Link>
              </h1>
            }
            iconElementLeft={<FontAwesome name="bars" style={hamburger} />}
            style={appbarStyle}
            onLeftIconButtonTouchTap={this.menuHandler}
          />
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  intl: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  menuState: PropTypes.bool,
};

function mapStateToProps(state) {
  console.log('MSTP', getMenuState(state), state);
  return {
    menuState: getMenuState(state),
  };
}


export default connect(mapStateToProps)(Header);
