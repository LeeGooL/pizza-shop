const initialState = {
  sortby: "popular",
  category: 0,
};

const filtersReducer = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  return state;
};

export default filtersReducer;