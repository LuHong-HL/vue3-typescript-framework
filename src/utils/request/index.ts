import axios from 'axios'
// import qs from 'qs'

import errorHandle from './codeTip'

const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded; charset=UTF-8'
const CONTENT_TYPE_JSON = 'application/json; charset=UTF-8'

// const ENV = process.env.VUE_APP_ENV

/**
 * loading: show loading
 * formType: change post methods content type
 * errorTip: show error tip
 */
interface optionsType {
  loading?: boolean
  formType?: boolean
  errorTip?: boolean
  [key: string]: any
}
let options: optionsType = {
  loading: false,
  formType: false,
  errorTip: true
}

const hideLoading = () => {
  if (options && options.loading) {
    Loading.close()
  }
}

const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
})

// request interceptor
request.interceptors.request.use(
  (config: optionsType) => {
    options = { ...options, ...config.options }

    if (options && options.loading) {
      Loading.show()
    }

    const type = config.method.toLowerCase()

    if (type === 'post') {
      config.headers.post['Content-Type'] = options.formType ? CONTENT_TYPE_FORM : CONTENT_TYPE_JSON
    }


    return config
  },
  (error) => {
    hideLoading()
    if (options.errorTip) {
      errorHandle(error)
    }
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  (response) => {
    hideLoading()
    const res = response.data
    if (res.code !== 200) {
      if (options.errorTip) {
        errorHandle(res)
      }
      return Promise.reject(res)
    }
    return res.data
  },
  (error) => {
    hideLoading()
    if (options.errorTip) {
      errorHandle(error)
    }
    return Promise.reject(error)
  }
)

export default request
