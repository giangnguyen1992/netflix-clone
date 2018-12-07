import React, { Component } from 'react';

import HelpMenuContainer from '../containers/HelpMenuContainer';
import HeaderTitle from './HeaderTitle';
import FontAwesomeIcon from './FontAwesomeIcon';
import Movie from './Movie';
import Footer from './Footer';

import styles from '../styled/Movies.module.scss';
import btnStyles from '../styled/Button.module.scss';

class Movies extends Component {
    state = {};
    static defaultProps = {
        movies: [],
        loading: true
    };

    componentDidMount () {
        this.props.getMovies();
    };

    render () {
        return (
            <>
            {/* header */}
            <header className={styles.Movies__header}>
                <HelpMenuContainer />
                <HeaderTitle>The Movie Recommender</HeaderTitle>
                <FontAwesomeIcon icon='search' />
            </header>
            {/* Liste aller Filme */}
            <div className={styles.Movies__scroll}>
                {this.props.loading
                    ? "loading..." : (
                        this.props.movies.map(movie => (
                            <a className={styles.Movies__link} href={`/movies/${movie.id}`} key={movie.id}>
                                <Movie 
                                    name={movie.name}
                                    poster={movie.poster}
                                    duration={movie.duration}
                                    year={movie.year}
                                />    
                            </a>    
                        ))
                    )}
            </div>
            <Footer>
                <button className={btnStyles.Button}>Get Recommended Movies</button>       
            </Footer>        
            </>
        );
    }
}

export default Movies;