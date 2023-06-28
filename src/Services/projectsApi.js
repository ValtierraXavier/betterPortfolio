import axios from 'axios'

const baseUrl = 'http://localhost:5000/'

const api = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "text/html"
    }
})

export default api
