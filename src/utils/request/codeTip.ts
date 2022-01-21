// import { Toast } from 'vant'
const messageBox = Message

const errorMsg = {
  operationFailed: '操作失败',
  errorTip: '错误提示',
  errorMessage: '操作失败,系统异常!',
  timeoutMessage: '登录超时,请重新登录!',
  apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
  apiRequestFailed: '请求出错，请稍候重试',
  networkException: '网络异常',
  networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',

  errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
  errMsg403: '用户得到授权，但是访问是被禁止的。!',
  errMsg404: '网络请求错误,未找到该资源!',
  errMsg405: '网络请求错误,请求方法未允许!',
  errMsg408: '网络请求超时!',
  errMsg500: '服务器错误,请联系管理员!',
  errMsg501: '网络未实现!',
  errMsg502: '网络错误!',
  errMsg503: '服务不可用，服务器暂时过载或维护!',
  errMsg504: '网络超时!',
  errMsg505: 'http版本不支持该请求!'
}

const errorHandle = (error: any) => {
  const { message } = error || {}
  const errString = error.toString()
  const { status } = error
  let errMessage = '请求出错'

  if (message) {
    return messageBox.box(message)
  }

  if (errString.indexOf('timeout') !== -1) {
    errMessage = errorMsg.apiTimeoutMessage
  }
  if (errString.includes('Network Error')) {
    errMessage = errorMsg.networkExceptionMsg
  }

  switch (status) {
    case 400:
      errMessage = `${message}`
      break
    // 401: Not logged in
    case 401:
      errMessage = errorMsg.errMsg401
      break
    case 403:
      errMessage = errorMsg.errMsg403
      break
    // 404请求不存在
    case 404:
      errMessage = errorMsg.errMsg404
      break
    case 405:
      errMessage = errorMsg.errMsg405
      break
    case 408:
      errMessage = errorMsg.errMsg408
      break
    case 500:
      errMessage = errorMsg.errMsg500
      break
    case 501:
      errMessage = errorMsg.errMsg501
      break
    case 502:
      errMessage = errorMsg.errMsg502
      break
    case 503:
      errMessage = errorMsg.errMsg503
      break
    case 504:
      errMessage = errorMsg.errMsg504
      break
    case 505:
      errMessage = errorMsg.errMsg505
      break
    default:
  }

  return messageBox.box(errMessage)
}

export default errorHandle
