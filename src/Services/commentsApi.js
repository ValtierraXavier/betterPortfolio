import axios from 'axios'

const base = 'http://localhost:5000/'

const commentsApi = axios.create({
    baseURL: base,
    timeout: 2000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json , text/html"
    }
})

export default commentsApi
