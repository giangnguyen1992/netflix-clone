import React, { Component } from 'react';

import FontAwesomeIcon from './FontAwesomeIcon';
import Poster from './Poster';
import MovieTitle from './MovieTitle';
import MovieLengthYear from './MovieLengthYear';

import styles from '../styled/MovieDetails.module.scss';

class MovieDetails extends Component {
    static defaultProps = {
        selectedMovie: {
            name: '',
            poster: '',
            year: '',
            duration: '',
            trailer: '',
            details: '',
            id: '0'
        }
    };

    componentDidMount () {
        // react router übergibt props zu jedem component. Props kommen vom MovieDetailsContainer
        // zB man drückt die route /movies/:id, die id kommt von this.props.match.params.id
        const movieId = +this.props.match.params.id;
        this.props.selectMovie(movieId);
    };

    render () {
        const { poster, name, duration, details, year } = this.props.selectedMovie;

        return (
            <>
                {/* header */}
                <header className={styles.MovieDetails__header}>
                    <a href='/' className={styles.MovieDetails__header_link}>
                        <FontAwesomeIcon icon='chevron-left' text='Go back' />
                    </a>
                </header>
                {/* movie details */}
                <div className={styles.MovieDetails}>
                    <Poster src={poster} alt={`Movie: ${name}`} isExpanded />
                    <div className={styles.MovieDetails__info}>
                        <MovieTitle isLarge>{name}</MovieTitle>
                        <MovieLengthYear>{`${duration} ${year}`}</MovieLengthYear>
                        <div className={styles.MovieDetails__desc}>{details}</div>
                        <button className={styles.MovieDetails__btn}>watch trailer</button>
                    </div>
                </div>
            </>
        );
    };
};   

export default MovieDetails;