// pages/search/search.js
import {request} from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leftData:[],
      rightData:[],
      currentIndex:0,
      scrollTop:0
  },
// 接口返回的数据
    Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 数据太多了
  const Cates = wx.getStorageSync('cates');
  if(Cates){
      //判断旧数据过期
    if(Date.now() - Cates.time >10000){
        this.getCates()
     }else{
      this.Cates = Cates.data
      let leftData = this.Cates.map(item => item.cat_name),
          rightData = this.Cates[0].children;
          this.setData({
            rightData,
            leftData
          })
    } 

  }else{
    this.getCates()
  }


    
  },
  onLazyLoad:function(e){
    console.log(e)
      console.log(e.currentTarget.dataset.src)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  // 获取商品分类的数据
  async getCates(){
    // request({'url':'/categories'}).then(res => {
    //   this.Cates = res.data.message;
    //   wx.setStorageSync('cates',{time:Date.now(),data:this.Cates})
    //   let leftData = this.Cates.map(item => item.cat_name),
    //       rightData = this.Cates[0].children;
    //   this.setData({
    //     rightData,
    //     leftData
    //   })
     
    // })
    const res = await request({'url':'/categories'})
    this.Cates = res.message;
    wx.setStorageSync('cates',{time:Date.now(),data:this.Cates})
    let leftData = this.Cates.map(item => item.cat_name),
        rightData = this.Cates[0].children;
    this.setData({
      rightData,
      leftData
    })
},
// 左侧点击事件
  handleItemTap:function(e){
    let {index} = e.currentTarget.dataset,
        rightData = this.Cates[index].children;
    this.setData({
      currentIndex:index,
      rightData,
      scrollTop:0
    })
  },
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})