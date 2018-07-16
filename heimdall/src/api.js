import axios from 'axios'

const publicKey = process.env.REACT_APP_PUBLIC_KEY

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  timeout: 10000,
})

export const getCaracters = caracterName => async actualPage => {
  const pageLimit = 6
  const limit = `limit=${pageLimit}`
  const offset = `offset=${(actualPage - 1) * pageLimit}`
  const apikey = `apikey=${publicKey}`
  const nameStartsWith = `nameStartsWith=${caracterName}`

  const response = await api.get(`characters?${nameStartsWith}&${limit}&${offset}&${apikey}`)
  return response
}
