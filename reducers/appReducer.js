export default function reducer ( state = {
  threads: [],
  refreshing: false,
}, action) {
  switch (action.type) {
    case 'LOAD_REDDIT_DATA': {
      return {
        ...state,
        threads: action.payload,   
      }
    }
    case 'REFRESHING': {
      return {
        ...state,
        refreshing: !state.refreshing,
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