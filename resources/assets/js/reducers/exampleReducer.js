export default function reducer(state={
    byId: {},
    allIds: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "EXAMPLE_ACTION_PENDING": {
            return {...state, fetching: true, fetched: false}
        }
        case "EXAMPLE_ACTION_FULFILLED": {

            let nextId = 1;

            if(state.allIds.length !== 0){
                nextId = state.allIds.reduce(function(a, b) {
                    return Math.max(a, b);
                }) + 1;
            }

            return {
                ...state,
                byId: {
                    ...state.byId,
                    [nextId]: action.payload.data
                },
                allIds: [...state.allIds, nextId],
                fetching: false,
                fetched: true}
        }
        case "EXAMPLE_ACTION_REJECTED": {
            return {...state, fetching: false, fetched: false}
        }
        case "STORE::RESET": {

            return {
                byId: {},
                allIds: [],
                fetching: false,
                fetched: false,
                error: null
            }

        }

        default:
    }
    return state;
}
