import { } from './CheckoutActions';

// Initial State
const initialState = { data: [] };

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_POST :
    //   return {
    //     data: [action.post, ...state.data],
    //   };

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
export default CheckoutReducer;
