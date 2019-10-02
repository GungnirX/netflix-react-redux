import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieData, remove, add } from '../../redux/action-creators';
import '../../style/App.css';
import logo from '../../Netflix_Logo.png';
import Footer from '../Footer';
import MovieList from '../MovieList';

class App extends Component {
  componentDidMount() {
    this.props.getMovieData();
  }

  handleRemoveClick = id => {
    this.props.remove(id);
  };

  handleAddClick = id => {
    this.props.add(id);
  };

  render() {
    const { myList, recommendations, isLoading, error } = this.props.movieData;

    return (
      <div className="app">
        <img className="logo" src={logo} alt="NetFlix Logo" />

        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading &&
          (error ? (
            <div className="error">{error.message}. Server is not running!</div>
          ) : (
            <div>
              <MovieList
                category="My List"
                data={myList}
                onClick={this.handleRemoveClick}
                buttonText="Remove"
              />

              <MovieList
                category="Recommendations"
                data={recommendations}
                onClick={this.handleAddClick}
                buttonText="Add"
              />

              <Footer myList={myList} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.movieData
  };
};

const mapDispatchToProps = dispatch => ({
  getMovieData: () => {
    dispatch(getMovieData());
  },
  remove: id => {
    dispatch(remove(id));
  },
  add: id => {
    dispatch(add(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
