import React from 'react';
import Moment from 'react-moment';
import { StarFill } from 'react-bootstrap-icons';

const MovieList = (props) => {

    return (
        <>
            {props.movies && props.movies.map((movie => (

                <div className="movie-container" key={movie.id}>

                    <div className='image-container d-flex justify-content-center'>
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`} alt="official site link">
                            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt='movie poster' />
                        </a>
                    </div>

                    <div className="movie-info">
                        <center><p className="movie-title">{movie.title}</p></center>
                        <p><span className="movie-date">Release Date:</span> <Moment format="MMMM D, YYYY">{movie.release_date}</Moment></p>
                        <p><span className="movie-rating">Rating:</span> {movie.vote_average} <span className="movie-rating font-weight-bold"><StarFill /></span></p>
                        <p><span className="movie-overview">Overview:</span> {movie.overview}</p>
                    </div>

                </div>
            )))}



        </>
    );
};

export default MovieList;
