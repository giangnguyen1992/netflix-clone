import React, { Component } from 'react';

import FontAwesomeIcon from './FontAwesomeIcon';
import Movie from './Movie';
import Footer from './Footer';

import styles from '../styled/Movies.module.scss';
import btnStyles from '../styled/Button.module.scss';

class Movies extends Component {
    componentDidMount () {
        this.props.getMovies();
    };

    render () {
        return (
            <>
            <header className={styles.MoviesHeader}>
                <FontAwesomeIcon icon='bars' text='help' />
                <h1 className={styles.MoviesHeader__Title}>The Movie Recommender</h1>
                <FontAwesomeIcon icon='search' />
            </header>
            <div className={styles.MoviesScroll}>
                {this.props.movies.map(movie => (
                    <Movie 
                        key={movie.id}
                        name={movie.name}
                        poster={movie.poster}
                        duration={movie.duration}
                        year={movie.year}
                    />        
                ))}
            </div>
            <Footer>
                <button className={btnStyles.Button}>Get Recommended Movies</button>       
            </Footer>        
            </>
        );
    }
}

export default Movies;