const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL": {
      return action.payload;
    }
    case "CREATE_NEW": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default posts;
