Page({
  data: {
    userName: 'Manager',
    userPwd: "",
    truePassword: ""
  }, 
  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  onLoad:function(){
    var that = this;
    wx.getStorage({
      key: 'password',
      success: function (res) {
        that.setData({
          truePassword: res.data
        })
      }
    })
  },
  ToLogin:function(){
    if (this.data.userPwd==this.data.truePassword)
    {
      wx.showToast({
        title: '成功',
        icon: 'succes',
        duration: 3000,
        mask: true
      })
      wx.navigateTo({
        url: '../main/main'
      })
    }
    else if(this.data.userPwd=="")
    {
      wx.showModal({
        title: '提示',
        content: '输入密码为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else
    {
      wx.showModal({
        title: '提示',
        content: '输入密码有误!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName + " 密码：" + this.data.userPwd);
  }
})