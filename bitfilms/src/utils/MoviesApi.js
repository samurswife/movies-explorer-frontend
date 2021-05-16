import { BASE_MOVIES_URL } from './constants';

const handleOriginalResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
}

class MoviesApi {
    constructor(config) {
        this._url = config.baseUrl;
    }

    getMovies() {
        return fetch(this._url, {
            method: 'GET'
        })
            .then(handleOriginalResponse)
            .then((data) => data);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: `${BASE_MOVIES_URL}/beatfilm-movies`,
    headers: {
        'Content-Type': 'application/json',
    }
});

export { moviesApi };