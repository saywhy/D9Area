// 引入axios
import axios from 'axios'

// 创建实列
var publics = axios.create({
    baseURL: '/api',
    timeout: 6000
})

export default function (method, url, data = null) {
    method = method.toLowerCase();
    switch (method) {
        case 'post':
            return publics.post(url, data)
            break;
        case 'get':
          return publics.get(url, {
              params: data
          })
            break;
          case 'delete':
          return publics.delete(url, {
              params: data
          })
            break;
          case 'put':
          return publics.put(url, data)
          break;

        default:
            break;
    }
}