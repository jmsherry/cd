import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './OrderSummary.css';

function OrderSummary(props) {
  return (
    <div className={styles['single-post']}>
      <h1>OrderSummary</h1>
    </div>
  );
}

OrderSummary.propTypes = {
  // post: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   slug: PropTypes.string.isRequired,
  //   cuid: PropTypes.string.isRequired,
  // }).isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default OrderSummary;
