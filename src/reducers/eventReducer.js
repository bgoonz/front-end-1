import {

    ADD_EVENT,
    ADD_EVENT_FAILURE,

    DELETE_EVENT,
    // DELETE_EVENT_FAILURE,
    EDIT_EVENT,
    // EDIT_EVENT_FAILURE,


} from '../actions/eventActions';

const initialState = {
    error: '',
    allOrganizerEvents: [],
    singleEvent: {}
};
export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case GET_EVENTS:
            return {
                ...state,
                isLoading: false,
                error: '',
                allOrganizerEvents: action.payload
            };
        case GET_EVENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case ADD_EVENT_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case ADD_EVENT:
            return {
                ...state,
                isLoading: false,
                error: '',
                allOrganizerEvents: [
                    ...state.allEvents,
                    action.payload
                ]
            };
        case ADD_EVENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case DELETE_EVENT_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_EVENT:
            console.log("Delete event:", state, action.payload)
            return {
                ...state,
                // isLoading: false,
                allOrganizerEvents: state.allOrganizerEvents.filter((event) => {
                    return event.event_id !== action.payload.event_id;
                })
            };
        case DELETE_EVENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case EDIT_EVENT_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case EDIT_EVENT:
            return {
                ...state,
                isLoading: false,
                error: ''
            };
        case EDIT_EVENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case GET_EVENT_BY_ID_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_EVENT_BY_ID:
            return {
                ...state,
                singleEvent: action.payload,
                isLoading: false
            };
        case GET_EVENT_BY_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
