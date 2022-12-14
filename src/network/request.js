import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}
