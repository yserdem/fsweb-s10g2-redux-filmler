import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [
        {
            id: 0,
            title: "The Godfather",
        },
    ],
    displayFavorites: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if (state.favorites.find((fav) => fav.id === action.payload.id)) {
                return state;
            } else {
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }};
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }; 
};

export default reducer