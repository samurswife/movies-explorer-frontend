import { BASE_MAIN_API_URL } from './constants';

const handleOriginalResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.statusText} ${res.status}`);
}

const register = (name, email, password) => {
    return fetch(`${BASE_MAIN_API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            password: password,
            email: email
        })
    })
        .then(handleOriginalResponse)
};

const authorize = (email, password) => {
    return fetch(`${BASE_MAIN_API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(handleOriginalResponse)
};

const getContent = (token) => {
    return fetch(`${BASE_MAIN_API_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
        .then(handleOriginalResponse)
}

export { register, authorize, getContent };