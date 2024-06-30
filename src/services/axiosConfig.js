import axios from 'axios'

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const defaultErrorMessage = 'An error occurred. Please try again later.'
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = 'Bad Request. Please check your input.'
          break
        case 401:
          error.message = 'Unauthorized. Please check your API key.'
          break
        case 404:
          error.message = 'Not Found. The requested resource could not be found.'
          break
        case 429:
          error.message = 'Too Many Requests. Please wait and try again later.'
          break
        case 500:
          error.message = 'Internal Server Error. Please try again later.'
          break
        default:
          error.message = `Error: ${error.response.status}. ${error.response.data.message || defaultErrorMessage}`
      }
    } else if (error.request) {
      error.message = 'No response received from the server. Please check your network connection.'
    } else {
      error.message = `Request error: ${error.message || defaultErrorMessage}`
    }
    return Promise.reject(error)
  }
)

export default apiClient
