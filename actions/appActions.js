export default appAction = {

  loadRedditData: data => {
    return {
      type: 'LOAD_REDDIT_DATA',
      payload: data
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