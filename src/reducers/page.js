const pageReducer = (state = 'home', action) => {
    switch(action.type) {
      case 'home':
        return state = 'home';
      case 'blog':
        return state = 'blog';
      case 'product':
        return state = 'product';
      default:
        return state = 'home'
    }
};

export default pageReducer