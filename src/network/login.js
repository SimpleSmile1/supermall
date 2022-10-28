import { request } from './request.js'
import QueryString from 'qs'

export function getLoginView (metaData) {
  return request({
    url: '/login',
    method: 'post',
    data: QueryString.stringify(metaData)
  })
}

export function getRegisterView(metaData) {
  return request({
    url: 'register',
    method: 'post',
    data: metaData
  })
}