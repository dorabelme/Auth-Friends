export const initialState = {
    friends: [],
    loggingIn: false,
    error: null,
    errorStatusCode: null,
    fetchingData: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                loggingIn: true
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggingIn: false
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: 'ACCESS DENIED'
            };
        case 'FETCH_START':
            return {
                ...state,
                fetchingData: true
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                fetchingData: false,
                friends: action.payload
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                err: action.payload
            };
        default:
            return state;
    }
};
