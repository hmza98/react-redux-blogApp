const initialState = {
  blogPostsList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return state;
    case "PUSH-LIST":
      return {
        ...state,
        blogPostsList: [...state.blogPostsList, ...action.payload],
      };
    case "POST":
      return {
        ...state,
        blogPostsList: [...state.blogPostsList, action.payload],
      };
    case "Edit":
      const tmpState = [...state.blogPostsList];
      tmpState[action.payload.id]["title"] = action.payload.title;
      tmpState[action.payload.id]["body"] = action.payload.body;

      return {
        ...state,
        blogPostsList: [...tmpState],
      };
    default:
      return state;
  }
};

export default rootReducer;
