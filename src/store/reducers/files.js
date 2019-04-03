import qs from 'qs';

// Action Types

export const GET_FILES = 'bachi/files/GET_FILES';
export const GET_FILES_SUCCESS = 'bachi/files/GET_FILES_SUCCESS';
export const GET_FILES_FAIL = 'bachi/files/GET_FILES_FAIL';

export const GET_TAGS = 'bachi/files/GET_TAGS';
export const GET_TAGS_SUCCESS = 'bachi/files/GET_TAGS_SUCCESS';
export const GET_TAGS_FAIL = 'bachi/files/GET_TAGS_FAIL';

// Reducer

const initialState = {
    currentPage: 1,
    currentTag: null,
    files: [],
    loading: true,
    tags: [],
    total: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FILES:
            return {
                ...state,
                loading: true,
                files: []
            };
        case GET_FILES_SUCCESS:
            return {
                ...state,
                loading: false,
                files: action.payload.data.files,
                total: action.payload.data.total_files
            };
        case GET_FILES_FAIL:
            return { ...state, loading: false, files: [], error: 'We found a problem while fetching data.' };

        case GET_TAGS:
            return { ...state, loading: true };
        case GET_TAGS_SUCCESS:
            return {
                ...state,
                loading: false,
                tags: action.payload.data,
            };
        case GET_TAGS_FAIL:
            return { ...state, loading: false, files: [], error: 'We found a problem while fetching data.' };


        default:
          return state;
    }
}

// Action Creators

export function getFiles(data) {
    return {
        type: GET_FILES,
        payload: {
            params: data,
            request: {
                url: `/files?${qs.stringify(data)}`,
            }
        }
    };
}

export function getTags() {
    return {
        type: GET_TAGS,
        payload: {
            request: {
                url: `/tags`,
            }
        }
    };
}