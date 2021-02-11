
export const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});

/* 
Action Creator
const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

Action (создается, если не передаются параметры в payload)
const setSortBy = ({
  type: 'SET_SORT_BY'
});
*/