import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './ServiceListWidget.css';

export default class ServiceListWidget extends Component {
  render() {
    return (
      <div>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Services List</h2>
        </div>
      </div>
    );
  }
}

ServiceListWidget.propTypes = {};
