Page({
  backToMain: function () {
    wx.navigateTo({
      url: '../main/main'
    })
  },
  data:{
    imagesrc: "../../images/zhifubao.jpg"
  },
  PopZhiFuBao:function(){
    this.setData(
      {
        imagesrc: "../../images/zhifubao.jpg"
      }
    )
  },
  PopWeiXin: function () {
    this.setData(
      {
        imagesrc: "../../images/weixin.jpg"
      }
    )
  }
})