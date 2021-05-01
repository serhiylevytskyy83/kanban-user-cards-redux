const initialState = {
    get_Cards: [],
    get_Column:[],
    // get_Column: ['to do', 'review', 'progress', 'done'],
    button: ['Delete', 'Update', 'Create'],
}

export let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARD":
            return {...state, get_Cards: action.payload}
        case "GET_COLUMN":
            return {...state, get_Column: action.payload}
        case "POST_CARD":
            return {...state, posted_Cards: action.payload}
    }
    return state
}
