import * as actionType from "../actions/actionTypes.js";

const initialState = {
  playerColors: [
    { id: 0, color: 'Red' },
    { id: 1, color: 'Orange' },
    { id: 2, color: 'Yellow' },
    { id: 3, color: 'Green' }
  ],
  usedColors: {
    Red: true,
    Orange: true,
    Yellow: true,
    Green: true,
    Blue: false,
    Indigo: false,
    Violet: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE:
      // Maybe I can do this without creating an entirely new state but I don't know how
      // So I'mma "borrow" Edgar's code
      const playerColors = { ...state.playerColors };
      const usedColors = { ...state.usedColors };
      const prevColor = playerColors[action.player].color;
      const newColor = action.color;
      const colorList = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
      // the objects being iterated over in a for in loop through an array are the indices for some reason
      for (let colorIndex in colorList) {
        console.log(colorList[colorIndex])
        if (newColor === colorList[colorIndex]) {
          usedColors[newColor] = true;
        }
        if (prevColor === colorList[colorIndex]) {
          usedColors[prevColor] = false;
        }
      }
      // for (let i = 0; i < 7; i++) {
      //   if (newColor == colorList[i]) {
      //     usedColors[colorList[i]] = true;
      //   }
      //   if (prevColor == colorList[i]) {
      //     usedColors[colorList[i]] = false;
      //   }
      // }
      // Setting player color
      playerColors[action.player].color = action.color;
      return {
        ...state,
        playerColors: playerColors,
        usedColors: usedColors
      }
    default:
      return state;
  }
};

export default reducer;