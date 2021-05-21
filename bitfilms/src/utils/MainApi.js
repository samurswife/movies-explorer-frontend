const handleOriginalResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

class MainApi {
    constructor(config) {
        this._url = config.baseUrl;
        this._headers = config.headers;
    }

    setUserInfo(user) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: user.name,
                email: user.email
            })
        })
            .then(handleOriginalResponse);
    }

    saveMovieCard(movieCard) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: `${movieCard.country !== null ? movieCard.country : 'Unknown'}`,
                director: `${movieCard.director !== null ? movieCard.director : 'Unknown'}`,
                duration: `${movieCard.duration !== null ? movieCard.duration : 0}`,
                year: `${movieCard.year !== null ? movieCard.year : 'Unknown'}`,
                description: `${movieCard.description !== null ? movieCard.description : 'Unknown'}`,
                image: `${movieCard.image !== null ? `https://api.nomoreparties.co${movieCard.image.url}` : `https://avrorasochi.ru/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg`}`,
                trailer: `${movieCard.trailerLink !== null ? movieCard.trailerLink : 'https://youtu.be/6g82FwQfpGc'}`,
                thumbnail: `${movieCard.image !== null ? `https://api.nomoreparties.co${movieCard.image.formats.thumbnail.url}` : 'https://avrorasochi.ru/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg'}`,
                nameRU: `${movieCard.nameRU !== null ? movieCard.nameRU : 'Unknown'}`,
                nameEN: `${movieCard.nameEN !== null ? movieCard.nameEN : 'Unknown'}`,
                movieId: movieCard.id
            })
        })
            .then((handleOriginalResponse));
    }

    deleteMovieCard(movieCardId) {
        return fetch(`${this._url}/movies/${movieCardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(handleOriginalResponse);
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(handleOriginalResponse);
    }
}

export { MainApi };
