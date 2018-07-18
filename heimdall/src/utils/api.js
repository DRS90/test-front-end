import axios from 'axios'

const publicKey = process.env.REACT_APP_PUBLIC_KEY

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  timeout: 10000,
})

export const getCaracters = async (caracterName, activePage = 1) => {
  const pageLimit = 8
  const limit = `limit=${pageLimit}`
  const offset = `offset=${(activePage - 1) * pageLimit}`
  const apikey = `apikey=${publicKey}`
  const nameStartsWith = `nameStartsWith=${caracterName}`
  try{
    const response = await api.get(`characters?${nameStartsWith}&${limit}&${offset}&${apikey}`)
    return response
  } catch (error){
    console.log('ERROR: ',error)
  }
}
