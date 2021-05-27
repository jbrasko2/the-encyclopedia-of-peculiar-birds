const nullBird = {
    id: null,
    name: "",
    scientificName: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    conservation: "",
    description: "",
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
        case "SEARCH_BIRDS":
            return {...state, birds: action.payload}
        default: return state
    }
}

export default birdsReducer