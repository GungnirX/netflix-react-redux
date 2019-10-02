import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieData, remove, add } from '../../redux/action-creators';
import '../../style/App.css';
import logo from '../../Netflix_Logo.png';

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
              <div className="myList-container">
                <h2>My List</h2>
                <div className="myList">
                  {myList.map((item, index) => {
                    return (
                      <div className="movie" key={item.id}>
                        <img src={item.img} alt="Movie Poster" />
                        <div>
                          <button
                            className="btn"
                            onClick={() => this.handleRemoveClick(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="recommendations-container">
                <h2>Recommendations</h2>
                <div className="recommendations">
                  {recommendations.map((item, index) => {
                    return (
                      <div className="movie" key={item.id}>
                        <img src={item.img} alt="Movie Poster" />
                        <div>
                          <button
                            className="btn"
                            onClick={() => this.handleAddClick(item.id)}>
                            Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="footer">
                <span>Movies in My List:</span>
                {myList.map((item, index) => {
                  return (
                    <div key={item.id} className="title">
                      {item.title}
                    </div>
                  );
                })}
              </div>
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
