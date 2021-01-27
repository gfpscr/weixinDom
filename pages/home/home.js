// pages/home/home.js
import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiperData:[],
      casesList:[],
      floorList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getSwiperList();
     this.getCateList();
     this.getFloorList();
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
  // 获取轮播图数据
  getSwiperList(){
      request({"url":"/home/swiperdata"}).then((data) =>{
        this.setData({
          swiperData: data.message,
        })
    })    
  },
  // 获取 分类导航栏数据 
  getCateList(){
    request({"url":"/home/catitems"}).then(data => {
        this.setData({
          casesList:data.message,
        })
    })
  },
  // 楼层数据
  getFloorList(){
    request({"url":"/home/floordata"}).then(data => {
        this.setData({
          floorList:data.message,
        })
    })
  }
  
})