const initialState = {
  colors: {}
}

export default function (state = initialState, action) {
  return {
        ...state,
        colors: action.colors
      };
}