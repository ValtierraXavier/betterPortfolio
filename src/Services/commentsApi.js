import axios from 'axios'

const baseUrl = process.env.MONGO_URL || 'http://localhost:3000/'

const commentsApi = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json , text/html"
    }
})

export default commentsApi
