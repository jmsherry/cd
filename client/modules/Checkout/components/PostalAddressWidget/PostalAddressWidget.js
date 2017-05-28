import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './PostalAddressWidget.css';

function PostalAddressWidget(props) {
  return (
    <div className={styles['single-post']}>
      <h1>PostalAddressWidget</h1>
    </div>
  );
}

PostalAddressWidget.propTypes = {
  // post: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   slug: PropTypes.string.isRequired,
  //   cuid: PropTypes.string.isRequired,
  // }).isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default PostalAddressWidget;
