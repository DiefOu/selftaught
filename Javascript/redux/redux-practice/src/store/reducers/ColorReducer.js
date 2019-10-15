const initialState = {
  item: {}
}

export default function (state = initialState, action) {
  return {
        ...state,
        items: action.colors
      };
}