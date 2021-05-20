const nullBird = {
    id: null,
    name: "",
    sciName: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    conserv: "",
    desc: "",
    imgUrl: ""
}

const initialState = {
    birds: [],
    selectedBird: nullBird,
    requesting: false
}

const birdsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_BIRD_REQUEST":
            return {...state, birds: [...state.birds], requesting: true}
        case "GET_BIRDS":
            return {...state, birds: action.payload, requesting: false}
        case "SET_SELECTED_BIRD":
            return {...state, selectedBird: action.payload}
        case "UNSET_BIRD":
            return {...state, selectedBird: nullBird}
        default: return state
    }
}

export default birdsReducer