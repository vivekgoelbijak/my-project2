// axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com'
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers)
    console.log('Request Interceptor:', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    console.log('Response Interceptor:', response)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
