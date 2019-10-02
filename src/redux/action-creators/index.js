import axios from 'axios';

const getDataStart = () => {
  return {
    type: 'REQUEST_DATA_START'
  };
};

const getDataSuccess = res => {
  return {
    type: 'REQUEST_DATA_SUCCESS',
    myList: res.data.mylist,
    recommendations: res.data.recommendations
  };
};

const getDataFail = err => {
  return {
    type: 'REQUEST_DATA_FAIL',
    err
  };
};

export const getMovieData = () => {
  return dispatch => {
    dispatch(getDataStart());
    axios
      .get('http://localhost:8000/api/data')
      .then(res => {
        dispatch(getDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(getDataFail(err));
      });
  };
};

export const remove = id => {
  return {
    type: 'REMOVE_MOVIE_FROM_MYLIST',
    id
  };
};

export const add = id => {
  return {
    type: 'ADD_RECOMMENDATION_TO_MYLIST',
    id
  };
};
