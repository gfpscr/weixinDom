// import {request} from "../../request/index.js"
// import regeneratorRuntime from "../../lib/runtime/runtime"
import {request} from "../../request/index"
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({
  /**
   * 页面的初始数据
   */
  data: {
      tabs:[
        {
          id:0,
          value:"综合",
          isActive:true
        },
        {
          id:1,
          value:"销售",
          isActive:false
        },
        {
          id:2,
          value:"价格",
          isActive:false
        }
      ],
      goodsList:[],
      num:1,
  },
  QueryParams:{
    qurey:'',
    cid:'',
    pagenum:1,
    pagesize:10,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cat_id
    this.getGoodLists(this.QueryParams)
  },
  // 接受子组件传递的id
  handleTabsItemChange:function(e){
    let {index} = e.detail,
        tabsData = this.data.tabs;
    // this.tabs.map((item) =>{item.id == index?item.isActive = true:item.isActive = false;})
    tabsData.forEach((item) =>{item.id == index?item.isActive = true:item.isActive = false;})
    this.setData({
      tabs:tabsData
    })

  },
  // 获取商品列表数据
  async getGoodLists(data){
      let res = await request({"url":"/goods/search",data:data}),
      total = res.message.total,
      num = Math.ceil(total/(this.QueryParams.pagesize));
      this.setData({
        goodsList:[...this.data.goodsList,...res.message.goods],
        num
      });
      wx.stopPullDownRefresh()
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
    this.setData({
      goodsList:[]
    });
    this.QueryParams.pagenum = 1;
    this.getGoodLists(this.QueryParams)      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.num >= this.QueryParams.pagenum){
        wx.showToast({
          title: '到底了！'
        })
    }else{
      this.QueryParams.pagenum++
      this.getGoodLists(this.QueryParams)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      
  }
})