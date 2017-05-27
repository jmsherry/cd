import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './RepairListWidget.css';

export class RepairListWidget extends Component {
  render() {
    return (
      <div>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Repairs List</h2>
        </div>
      </div>
    );
  }
}

RepairListWidget.propTypes = {};

export default RepairListWidget;
