import axios from 'axios'

const baseUrl = 'https://portfoliodb-production.up.railway.app/'

const api = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json , text/html",
    }
})

export default api
