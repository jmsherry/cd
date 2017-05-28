import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './BillingAddressWidget.css';

function BillingAddressWidget(props) {
  return (
    <div className={styles['single-post']}>
      <h1>BillingAddressWidget</h1>
    </div>
  );
}

BillingAddressWidget.propTypes = {
  // post: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   slug: PropTypes.string.isRequired,
  //   cuid: PropTypes.string.isRequired,
  // }).isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default BillingAddressWidget;
