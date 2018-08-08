/**
 * 基础请求方法
 * @param url url
 * @param data 请求参数
 * @param requestMethod 请求方法
 * @param style 'fetch'
 * @returns {Promise<*>}
 */
export default async (url = '', data = {}, requestMethod = 'GET', style = 'fetch') => {

  requestMethod = requestMethod.toUpperCase();

  let requestConfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: "cors",
    method: requestMethod,
  }

  if ('GET' == requestMethod) {
    url = handlerGetRequest(data, url)
  } else {
    Object.defineProperty(requestConfig, 'body', {value: JSON.stringify(data)})
  }
  let response = null
  console.log('url: ' + url + ',method: ' + requestMethod)
  response = await fetch(url, requestConfig)
  let json = await response.json();

  return json;
}

// export const getRequest = async (url = '', data = {}) => {
//   return await fetch(url, data, 'GET')
// }
//
// export const postRequest = async (url = '', data = {}) => {
//   return await fetch(url, data, 'POST')
// }
//
// export const putRequest = (url = '', data = {}) => {
//   return fetch(url, data, 'PUT')
// }
//
// export const deleteRequest = (url = '', data = {}) => {
//   return fetch(url, data, 'PUT')
// }

/**
 * 处理get请求参数，拼接到 url 上
 * @param data 请求参数
 * @param url url
 * @returns {*}
 */
function handlerGetRequest(data, url) {
  let urlParams = ''
  Object.keys(data).forEach(key => {
    urlParams = urlParams + key + '=' + data[key] + '&'
  })

  if (urlParams.endsWith('&')) {
    urlParams = urlParams.substr(0, urlParams.length)
  }

  if (url.includes('?')) {
    urlParams += '&'
  } else {
    if (urlParams != null && urlParams != '') {
      urlParams = '?' + urlParams
    }
  }

  url += urlParams;

  return url
}
