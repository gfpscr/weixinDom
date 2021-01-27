export const request = (data) => {
  return new Promise((res,rej) => {
    wx.showLoading({
      title: '加载中',
    })
    const url ='https://api-hmugo-web.itheima.net/api/public/v1' + data.url;
    let loaddingTime = 0;
    // 如果多个网络请求 怎么取消 加载效果
      ++loaddingTime
    wx.request({
      ...data,
      url,
      success:(result) =>{
        res(result.data)
      },
      fail:(err) =>{
        rej(err)
      },
      complete:() =>{
        if(!(--loaddingTime))
          wx.hideLoading()
        }
    })
  })
} 