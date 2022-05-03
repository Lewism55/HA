const blogReducer = (state = 0, action) => {
    switch(action.type) {
      case action.payload:
        return state = action.payload;
      default:
        return state = 0
    }
};

export default blogReducer;