import axios from 'axios'

export function setupAPIClient() {
   const api = axios.create({
      // baseURL: 'http://localhost:3333',
      baseURL: 'https://portfolio-api-4.onrender.com',
      // headers: { 'Access-Control-Allow-Origin': '*' },
   })

   return api
}
