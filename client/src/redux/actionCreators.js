const API = 'https://peculiar-birds-api.herokuapp.com'

export const getBirds = () => {
    return dispatch => {
        dispatch({type: "START_BIRD_REQUEST"})
        fetch(API + '/birds')
        .then(res => res.json())
        .then(birds => birds.sort((a, b) => (a.name > b.name) ? 1 : -1))
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

export const searchBirds = query => {
    return dispatch => {
        fetch(API + "/birds")
        .then(res => res.json())
        .then(data => data.filter(bird => bird.name.includes(query)))
        .then(birdData => dispatch({
            type: "SEARCH_BIRDS",
            payload: birdData
        }))
    }
}