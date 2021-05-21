import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = (props) => {

    const handleMoreButtonClick = (e) => {
        props.onMoreMoviesButtonClick();
    }

    return (
        <div className='movies-card-list center'>
            <Preloader isVisible={props.isPreloaderVisible} />
            {props.searchResultMessage ? <p className='movies-card-list__search-result-message'>{props.searchResultMessage}</p> : <p></p>}
            <div className={`movies-card-list__container ${props.isMoviesCardListVisible ? 'movies-card-list__container_visible' : ''}`}>
                {
                    props.moviesList
                }
            </div>
            <button className={props.moreMoviesButtonClickClassName} onClick={handleMoreButtonClick}>
                Ещё
            </button>
        </div>
    )
}

export default MoviesCardList;