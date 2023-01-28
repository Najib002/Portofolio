const initialState = {
  myQuotes: [],
  kanyeQuotes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MY_QUOTE':
      return {
        ...state,
        myQuotes: state.myQuotes.concat(
          action.payload.myQuote
        ),
      };

    case 'ADD_KANYE_QUOTE':
      return {
        ...state,
        kanyeQuotes: state.kanyeQuotes.concat(
          action.payload.kanyeQuote
        ),
      };

    default:
      return state;
  }
}
