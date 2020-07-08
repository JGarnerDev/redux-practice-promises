export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_ARTISTS_ALL':
      return { ...state, artistList: action.payload }
    case '':
      return
    case '':
      return
    default:
      return state
  }
}
