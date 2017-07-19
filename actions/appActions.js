export default appAction = {

  loadRedditData: data => {
    return {
      type: 'LOAD_REDDIT_DATA',
      payload: data
    }
  },

  refreshing: ()=> {
    return {
      type: 'REFRESHING'
    }
  },

  laggedOut: () => {
    return {
      type: 'LAG_OUT'
    }
  },

}