
const request = {
  get (url, data) {
    uni.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: url,
        data: data,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          uni.hideLoading()
          if (res.statusCode !== 200) {
            uni.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            return false
          }
          resolve(res.data)
        },
        fail: function (error) {
          // fail
          uni.hideLoading()
          reject(error) // 请求失败
        },
        complete: function () {
          uni.hideLoading()
          // complete
        }
      })
    })
  },
  post (url, data) {
    uni.showLoading({
      title: '加载中'
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: url,
        data: data,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          uni.hideLoading()
          resolve(res.data)
        },
        fail: function (error) {
          // fail
          uni.hideLoading()
          reject(error)
        },
        complete: function () {
          // complete
          uni.hideLoading()
        }
      })
    })
  }
}

export default request
