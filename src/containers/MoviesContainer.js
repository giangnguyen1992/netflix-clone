import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Movies from '../components/Movies';
import { getMovies } from '../actions/movieActions';

const MoviesContainer = (props) => {
    return (
        <Movies {...props} />
    );
};

const mapStateToProps = (state) => {
    return ({
        movies: _.values(state.movies)
    });
};

export default connect(mapStateToProps, { getMovies })(MoviesContainer);