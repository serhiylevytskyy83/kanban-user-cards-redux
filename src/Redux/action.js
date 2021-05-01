import axios from 'axios';

export function cardGet() {
    return dispatch => axios({
        method: 'GET',
        url: 'https://users-api-kanban.herokuapp.com/user'
    }).then(res => {
        dispatch({type: 'GET_CARD', payload: res.data})
    });
}

export function cardColumn() {
    return dispatch => axios({
        method: 'GET',
        url: 'https://users-api-kanban.herokuapp.com/column'
    }).then(res => {
        dispatch({type: 'GET_COLUMN', payload: res.data})
        console.log((res.data))
    });
}

export function cardDeleteById(cardId) {
    return dispatch => axios({
        method: 'DELETE',
        url: `https://users-api-kanban.herokuapp.com/user/${cardId}`
    }).then(() => {
        dispatch(cardGet())
    });
}

export function createCard(body) {
    return dispatch => axios.post('https://users-api-kanban.herokuapp.com/user', body).then(() => {
        dispatch(cardGet())
    });

}

export function cardUpdate(body, cardId) {
    return dispatch => axios.patch(`https://users-api-kanban.herokuapp.com/user/${cardId}`, body).then(() => {
        dispatch(cardGet())
    });

}