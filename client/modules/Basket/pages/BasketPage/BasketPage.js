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

class ServicesPage extends Component {
  componentDidMount() {
    // this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    // if (confirm('Do you want to delete this post')) { // eslint-disable-line
    //   this.props.dispatch(deletePostRequest(post));
    // }
  };

  handleAddPost = (name, title, content) => {
    // this.props.dispatch(toggleAddPost());
    // this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <h1>Services</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ServicesPage.need = [];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    // posts: getPosts(state),
  };
}

ServicesPage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

ServicesPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ServicesPage);
