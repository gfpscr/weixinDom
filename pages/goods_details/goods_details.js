// pages/goods_details/goods_details.js
import {request} from "../../request/index"
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.getGoodsDetail(options.goods_id)
      
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取商品详细数据
  async getGoodsDetail(id){
    let res = await request({url:'/goods/detail?goods_id='+id});
    this.setData({
      detail:res.message
    })
   },
   handlePreviewImage:function(e){
     console.log(e)
    //先构造要预览图片数组
    const urls = this.data.detail.pics.map(v=>v.pics_big_url),
          current = e.currentTarget.dataset.url;
          wx-wx.previewImage({
            urls,
            current
          })
   }
})