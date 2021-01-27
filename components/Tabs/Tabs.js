// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
       // tab点击事件
      handleItemTap:function(e){
        let {index} = e.currentTarget.dataset
        //  子传父
        this.triggerEvent("tabsItemChange",{index})
          // let index = e.
      }, 
      handleCart:function(e){
        console.log(e)
      },

      
  }
})
