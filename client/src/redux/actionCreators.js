const API = 'http://localhost:3000/'

export const getBirds = () => {
    return dispatch => {
        dispatch({type: "START_BIRD_REQUEST"})
        fetch(API + '/birds')
        .then(res => res.json())
        .then(birdData => dispatch({
            type: "GET_BIRDS",
            payload: birdData
        }))
    }
}

export const setSelectedBird = id => {
    return dispatch => {
        fetch(API + '/birds/' + id)
        .then(res => res.json())
        .then(birdData => dispatch({
            type: "SET_SELECTED_BIRD",
            payload: birdData
        }))
    }
}

export const unsetBird = () => ({type: 'UNSET_BIRD'})