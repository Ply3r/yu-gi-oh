import { GAME_CHANGE } from '../store';

const gameAction = (array) => {
  const metade = 0.5;
  if (array.length) return;
  const sorted = array.sort(() => Math.random() - metade);
  return ({
    type: GAME_CHANGE,
    game: sorted,
  });
};

export default gameAction;
