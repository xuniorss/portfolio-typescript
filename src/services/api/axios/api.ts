import axios from 'axios'

export function setupAPIClient() {
   const api = axios.create({
      // baseURL: 'http://localhost:3333',
      baseURL: 'https://portfolio-api-amber.vercel.app/',
      headers: { 'Access-Control-Allow-Origin': '*' },
   })

   return api
}
