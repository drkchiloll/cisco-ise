import axios from 'axios';

export const requestInstance = ({
  host,
  endpoint,
  auth
}) => {
  return axios.create({
    baseURL: `https://${host}${
      endpoint === 'ers' ? ':9060/ers/config':
        '/admin'
    }`,
    headers: {
      Accept: endpoint === 'ers' ? 'application/json':
        'application/xml'
    },
    auth
  })
}