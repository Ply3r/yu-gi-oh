import { createStore, combineReducers } from 'redux';

export const GAME_CHANGE = 'GAME_CHANGE';

const INITIAL_STATE = { game: [] };

const gameReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case GAME_CHANGE:
    return { ...state, game: actions.game };
  default:
    return state;
  }
};

const rootReducer = combineReducers({ gameReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
