import {FETCH_LINK_SUCCESS} from "../actions/productsActions";

const initialState = {
  shortUrl: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_LINK_SUCCESS:
          return {...state, shortUrl: action.response};
      default:
          return state;
  }
};

export default productsReducer;