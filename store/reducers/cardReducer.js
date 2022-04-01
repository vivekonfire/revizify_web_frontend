const initialState = {
  cards: null,
  card: null,
  deck: null,
  bookmark: false,
};

const reducer = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: aciton.payload,
      };
    case "GET_CARD":
      return {
        ...state,
        card: aciton.payload,
      };
    case "DECK_STATUS":
      return {
        ...state,
        deck: aciton.payload,
      };
    case "BOOKMARK":
      return {
        ...state,
        bookmark: aciton.payload.saved,
      };
    default:
      return state;
  }
};

export default reducer;
