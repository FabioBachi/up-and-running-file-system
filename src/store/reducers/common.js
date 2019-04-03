// Action Types

export const TOGGLE_MENU = 'bachi/common/TOGGLE_MENU';

// Reducer

const initialState = {
    menuOpen: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return { ...state, menuOpen: action.payload.menuOpen };
        default:
            return state;
    }
}

// Action Creators

export function toggleMenu(menuOpen) {
    return {
        type: TOGGLE_MENU,
        payload: {
            menuOpen
        }
    };
}