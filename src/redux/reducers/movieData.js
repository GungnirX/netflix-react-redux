const initState = {
  myList: [],
  recommendations: [],
  isLoading: false,
  error: null
};

const movieData = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA_START':
      return {
        ...state,
        isLoading: true
      };
    case 'REQUEST_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        myList: action.myList,
        recommendations: action.recommendations
      };
    case 'REQUEST_DATA_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.err
      };
    case 'REMOVE_MOVIE_FROM_MYLIST':
      const indexOfRemove = state.myList.findIndex(
        item => item.id === action.id
      );
      const removedMovie = state.myList[indexOfRemove];
      return {
        ...state,
        myList: [
          ...state.myList.slice(0, indexOfRemove),
          ...state.myList.slice(indexOfRemove + 1)
        ],
        recommendations: [...state.recommendations, removedMovie]
      };
    case 'ADD_RECOMMENDATION_TO_MYLIST':
      const indexOfAdd = state.recommendations.findIndex(
        item => item.id === action.id
      );
      const addedMovie = state.recommendations[indexOfAdd];
      return {
        ...state,
        myList: [...state.myList, addedMovie],
        recommendations: [
          ...state.recommendations.slice(0, indexOfAdd),
          ...state.recommendations.slice(indexOfAdd + 1)
        ]
      };
    default:
      return state;
  }
};

export default movieData;
