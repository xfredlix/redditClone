export default function reducer ( state = {
  threads: [],
}, action) {
  switch (action.type) {
    case 'LOAD_REDDIT_DATA': {
      return {
        ...state,
        threads: action.payload,   
      }
    }
    case 'RENDERING': {
      return {
        ...state,
        // rendering: !state.rendering,
      }
    }
    case 'LAG_OUT': {
      return {
        ...state,
      }
    }
  }
  return state;
}