import request from '@/utils/request/index'
const baseUrl = process.env.VUE_APP_API_URL
// 请求参数可参考 axios 文档，axios github: https://github.com/axios/axios
/**
 * 获取xxx信息
 * @param { Object } params
 * @returns { Promise }
 */
export function getXxx(params: any) {
  return request({
    url: `${baseUrl}/xxx`,
    method: 'get',
    params
  })
}

export default {
  getXxx
}
