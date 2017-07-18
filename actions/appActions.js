export default appAction = {

  showSearchBar: () => {
    return {
      type: 'LOAD_REDDIT_DATA'
    }
  },

  rendering: ()=> {
    return {
      type: 'RENDERING'
    }
  },

  laggedOut: () => {
    return {
      type: 'LAG_OUT'
    }
  },

}