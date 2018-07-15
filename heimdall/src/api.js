import axios from 'axios'

const publicKey = process.env.REACT_APP_PUBLIC_KEY

const url = 'http://gateway.marvel.com/v1/public/'
const api = axios.create({
  baseURL: url,
  timeout: 10000,
})

const actualPage = 0

export const getCaracters = caracters => {
  const pageLimit = 10
  const limit = `limit=${pageLimit}`
  const offset = `offset=${actualPage * pageLimit}`
  const apikey = `apikey=${publicKey}`
  const nameStartsWith = `nameStartsWith=${caracters}`
  
  api.get(`characters?${nameStartsWith}&${limit}&${offset}&${apikey}`)
    .then(response => console.log(response))
}
