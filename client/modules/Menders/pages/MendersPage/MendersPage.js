import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
// import PostList from '../../components/PostList';

// Import Actions
// import { } from '../../MendersActions';

// Import Selectors
// import { getMenders } from '../../MendersReducer';

class MendersPage extends Component {
  componentDidMount() {
    // this.props.dispatch(getMenders());
  }

  render() {
    return (
      <div>
        <h1>Menders</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
MendersPage.need = [];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    // posts: getPosts(state),
  };
}

MendersPage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

MendersPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(MendersPage);
