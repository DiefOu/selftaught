import * as actionType from "./actionTypes.js";

export const updateColor = (player, color) => {
  return {
    type: actionType.UPDATE,
    player: player,
    color: color
  };
};