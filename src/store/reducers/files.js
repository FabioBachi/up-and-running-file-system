import qs from 'qs';

// Action Types

export const GET_FILES = 'bachi/files/GET_FILES';
export const GET_FILES_SUCCESS = 'bachi/files/GET_FILES_SUCCESS';
export const GET_FILES_FAIL = 'bachi/files/GET_FILES_FAIL';

// Reducer

const initialState = {
    loading: true,
    files: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILES:
            return { ...state, loading: true };
        case GET_FILES_SUCCESS:
            return { ...state, loading: false, files: action.payload.data.data };
        case GET_FILES_FAIL:
            return { ...state, loading: false, files: [], error: 'Não foi possível completar a requisição.' };
        default:
          return state;
    }
}

// Action Creators

export function getFiles() {
    return {
        type: GET_FILES,
        payload: {
            request: {
                url: `/files`,
                // data: qs.stringify(data)
            }
        }
    };
}