import { request } from './request.js'
import QueryString from 'qs'

export function loginCarRepairInfo(metaData) {
  return request({
    url: '/carRepairLogin',
    method: 'post',
    data: metaData
  })
}

export function updateCarRepair(metaData) {
  return request({
    url: '/carRepairUpdate',
    method: 'post',
    data: metaData
  })
}

export function getCarRepairInfo(metaData) {
  return request({
    url: '/getCarRepairInfo',
    method: 'post',
    data: QueryString.stringify(metaData)
  })
}

export function getCarRepairInfoById(metaData) {
  return request({
    url: '/getCarRepairInfoById',
    method: 'post',
    data: QueryString.stringify(metaData)
  })
}

export function csvInfoLoad(id) {
  return request({
    url: '/repairInfoLoad',
    params: {
      format: 'csv',
      carId: id
    }
  })
}

export function pdfInfoLoad(id) {
  return request({
    url: '/repairInfoLoad',
    params: {
      format: 'pdf',
      carId: id
    }
  })
}

