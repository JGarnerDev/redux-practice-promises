import axios from 'axios'

const URL = 'http://localhost:3004'

export function artistListAll () {
  const request = axios.get(`${URL}/artists?_limit=6`).then(response => {
    return response.data
  })

  return {
    type: 'GET_ARTISTS_ALL',
    payload: request
  }
}
