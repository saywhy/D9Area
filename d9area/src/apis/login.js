
import req from './http.js'

// 定义接口

// 登录接口
// 手机登录
export const LOGINM = params => req('get', '/user/userLogin',params)
