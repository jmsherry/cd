import { } from './HomeActions';

// Initial State
const initialState = { data: [] };

const HomeReducer = (state = initialState, action) => {
  console.log('Home reducer', state, action);
  switch (action.type) {

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
// export const getPosts = state => state.posts.data;

// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default HomeReducer;
