import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
// import PostList from '../../components/PostList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
// import { } from '../../ServicesActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getServices } from '../../ServicesReducer';

class CheckoutPage extends Component {
  componentDidMount() {
    // this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CheckoutPage.need = [];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    // posts: getPosts(state),
  };
}

CheckoutPage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

CheckoutPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CheckoutPage);
