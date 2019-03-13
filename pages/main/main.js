var util = require('../../utils/util.js');
Page({
  data: {
    currentTab: 0,
    charCode1: "",
    charCode2: "",
    charCode3: "",
    charName: "",
    charBalance: "",
    charNum: "",
    charName2: "",
    charBalance2: "",
    charNum2: "",
    charPassword1: "",
    charPassword2: "",
    charPassword3: "",
    mainPassword: "",
    visableInformation: {},
    nowDate: '',
    listData: [],
    listData2:[]
  },
  TurnToDelete: function () {
    if (this.data.charCode1 == "" ) {
      wx.showModal({
        title: '提示',
        content: '输入内容不能为空!',
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
      var ishave = false;
      for(var x=0;x<this.data.listData.length;++x)
      {
        if(this.data.listData[x].code==this.data.charCode1)
        {
          ishave = true;
          this.data.listData.splice(x,1);
          break;
        }
      }
      if (ishave) {
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 3000,
          mask: true
        })
        var that = this;
        wx.setStorage({
          key: 'listdata',
          data: that.data.listData,
        })

        var that = this;
        var costMaxName = "未知";
        var costMaxMoney = 0;
        var costMinName = "未知";
        var costMinMoney = 0;
        var costSum = 0;
        for (var x = 0; x < that.data.listData.length; ++x) {
          var character = that.data.listData[x];
          var money = character.balance * character.num;
          costSum = costSum + money;
          if (x == 0) {
            costMaxName = character.name;
            costMaxMoney = money;
            costMinName = character.name;
            costMinMoney = money;
          }
          else {
            if (costMaxMoney < money) {
              costMaxName = character.name;
              costMaxMoney = money;
            }
            if (costMinMoney > money) {
              costMinName = character.name;
              costMinMoney = money;
            }
          }
        }
        that.data.listData2.pop();
        that.data.listData2.pop();
        that.data.listData2.pop();
        var obj = {};
        obj = { "code": 1, "name": "消费最高", "item": costMaxName };
        that.data.listData2.push(obj);
        obj = { "code": 2, "name": "消费最低", "item": costMinName };
        that.data.listData2.push(obj);
        obj = { "code": 3, "name": "总价格", "item": costSum };
        that.data.listData2.push(obj);
        wx.setStorage({
          key: 'listdata2',
          data: that.data.listData2,
        })
      }
      else
       {
        wx.showModal({
          title: '提示',
          content: '输入的id可能不存在!',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
  },
  TurnToChange: function () {
    if (this.data.charCode2 == "" || this.data.charBalance2 == "" || this.data.charName2 == "" || this.data.charNum2 == "" ) {
      wx.showModal({
        title: '提示',
        content: '输入内容不能为空!',
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
      var that = this;
      var isAccess = false;
      for(var x=0;x<that.data.listData.length;++x)
      {
        var character = that.data.listData[x];
        if(character.code==that.data.charCode2)
        {
          character.name = that.data.charName2;
          character.balance = that.data.charBalance2;
          character.num = that.data.charNum2;
          that.data.listData[x] = character;
          isAccess = true;
          break;
        }
      }
      if(isAccess)
      {
        var that = this;
        var costMaxName = "未知";
        var costMaxMoney = 0;
        var costMinName = "未知";
        var costMinMoney = 0;
        var costSum = 0;
        for (var x = 0; x < that.data.listData.length; ++x) {
          var character = that.data.listData[x];
          var money = character.balance * character.num;
          costSum = costSum + money;
          if (x == 0) {
            costMaxName = character.name;
            costMaxMoney = money;
            costMinName = character.name;
            costMinMoney = money;
          }
          else {
            if (costMaxMoney < money) {
              costMaxName = character.name;
              costMaxMoney = money;
            }
            if (costMinMoney > money) {
              costMinName = character.name;
              costMinMoney = money;
            }
          }
        }
        that.data.listData2.pop();
        that.data.listData2.pop();
        that.data.listData2.pop();
        var obj = {};
        obj = { "code": 1, "name": "消费最高", "item": costMaxName };
        that.data.listData2.push(obj);
        obj = { "code": 2, "name": "消费最低", "item": costMinName };
        that.data.listData2.push(obj);
        obj = { "code": 3, "name": "总价格", "item": costSum };
        that.data.listData2.push(obj);
        wx.setStorage({
          key: 'listdata2',
          data: that.data.listData2,
        })
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 3000,
          mask: true
        })
      }
      else
      {
        wx.showModal({
          title: '提示',
          content: '输入的Id可能未找到!',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }      
    }
  }, 
  TurnToRefer: function () {
    if (this.data.charCode3 == "") {
      wx.showModal({
        title: '提示',
        content: '输入内容不能为空!',
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
      var that = this;
      var isAccess = false;
      for (var x = 0; x < that.data.listData.length; ++x) {
        var character = that.data.listData[x];
        if (character.code == that.data.charCode3) {
          that.data.visableInformation = character;
          isAccess = true;
          break;
        }
      }
      if (isAccess) {
        wx.setStorage({
          key: 'visable',
          data: that.data.visableInformation,
        })
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 3000,
          mask: true
        })
      }
      else {
        wx.showModal({
          title: '提示',
          content: '输入的Id可能未找到!',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
  },
  InputForName: function (e) {
    this.setData({
      charName: e.detail.value
    })
  },
  InputForBalance: function (e) {
    this.setData({
      charBalance: e.detail.value
    })
  },
  InputForNum: function (e) {
    this.setData({
      charNum: e.detail.value
    })
  },
  InputForName2: function (e) {
    this.setData({
      charName2: e.detail.value
    })
  },
  InputForBalance2: function (e) {
    this.setData({
      charBalance2: e.detail.value
    })
  },
  InputForNum2: function (e) {
    this.setData({
      charNum2: e.detail.value
    })
  },
  changeCode1: function(e) {
    this.setData({
      charCode1: e.detail.value
    })
  },
  changeCode2: function(e) {
   this.setData(
     {
       charCode2: e.detail.value
     }
   ) 
  },
  changeCode3: function (e) {
    this.setData(
      {
        charCode3: e.detail.value
      }
    )
  },
  changePassword1: function (e) {
    this.setData({
      charPassword1: e.detail.value
    })
  },
  changePassword2: function (e) {
    this.setData({
      charPassword2: e.detail.value
    })
  },
  changePassword3: function (e) {
    this.setData({
      charPassword3: e.detail.value
    })
  },
  TurnToAdd: function () {
    if (this.data.charBalance == "" || this.data.charName == "" || this.data.charNum == "") {
      wx.showModal({
        title: '提示',
        content: '输入内容不能为空!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      var obj = {};
      var Maxsize = 0;
      for (var x = 1; x <= this.data.listData.length; ++x) {
        var itemcode = this.data.listData[x - 1].code;
        if (itemcode > Maxsize)
          Maxsize = itemcode;
      }
      obj.code = (Maxsize + 1);
      obj.name = this.data.charName;
      obj.num = parseInt(this.data.charNum);
      obj.balance = parseFloat(this.data.charBalance);
      obj.datatime = this.data.nowDate;
      this.data.listData.push(obj);

      wx.showToast({
        title: '成功',
        icon: 'succes',
        duration: 3000,
        mask: true
      })

      var that = this;
      wx.setStorage({
        key: 'listdata',
        data: that.data.listData,
      })

      var that = this;
      var costMaxName = "未知";
      var costMaxMoney = 0;
      var costMinName = "未知";
      var costMinMoney = 0;
      var costSum = 0;
      for (var x = 0; x < that.data.listData.length; ++x) {
        var character = that.data.listData[x];
        var money = character.balance * character.num;
        costSum = costSum + money;
        if (x == 0) {
          costMaxName = character.name;
          costMaxMoney = money;
          costMinName = character.name;
          costMinMoney = money;
        }
        else {
          if (costMaxMoney < money) {
            costMaxName = character.name;
            costMaxMoney = money;
          }
          if (costMinMoney > money) {
            costMinName = character.name;
            costMinMoney = money;
          }
        }
      }
      that.data.listData2.pop();
      that.data.listData2.pop();
      that.data.listData2.pop();
      var obj = {};
      obj = { "code": 1, "name": "消费最高", "item": costMaxName };
      that.data.listData2.push(obj);
      obj = { "code": 2, "name": "消费最低", "item": costMinName };
      that.data.listData2.push(obj);
      obj = { "code": 3, "name": "总价格", "item": costSum };
      that.data.listData2.push(obj);
      wx.setStorage({
        key: 'listdata2',
        data: that.data.listData2,
      })
    }
  },
  bindChange: function (e) {  
    var that = this; 
      that.setData({   
        currentTab: e.detail.current     
      });  
  }, 
  swichNav: function (e) {  
    var that = this;    
    if (this.data.currentTab === e.target.dataset.current) {
      return false;    
    } 
    else {      
      that.setData({        
        currentTab: e.target.dataset.current      
      })
    }  
  },
  Renew : function() {
    wx.navigateTo({
      url: '../main/main'
    });
  },
  ReLogin: function () {
    var that = this;
    wx.setStorage({
      key: 'listdata',
      data: that.data.listData,
    })
    wx.navigateTo({
      url: '../login/login'
    })
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'listdata',
      success: function (res) {
        that.setData({
          listData: res.data
        });
      }
    })
    wx.getStorage({
      key: 'listdata2',
      success: function (res) {
        that.setData({
          listData2: res.data
        });
      }
    })
    wx.getStorage({
      key: 'visable',
      success: function (res) {
        that.setData({
          visableInformation : res.data
        });
      }
    })
    wx.getStorage({
      key: 'password',
      success: function (res) {
        that.setData({
          mainPassword: res.data
        })
      }
    })
    var time = util.formatTime2(new Date());
    this.data.nowDate = time;
  },
  TurnToPay: function () {
    wx.navigateTo({
      url: '../paymaker/paymaker'
    });
  },
  TurnToChangePassword: function () {
    if ( this.data.charPassword2 == "" || this.data.charPassword3 == "") {
      wx.showModal({
        title: '提示',
        content: '输入内容不能为空!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else if (this.data.charPassword2 != this.data.charPassword3) {
      wx.showModal({
        title: '提示',
        content: '两次输入内容不一致!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else if (this.data.charPassword1 != this.data.mainPassword) {
      wx.showModal({
        title: '提示',
        content: '密码输入不正确!',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      var that = this;
      this.data.mainPassword = this.data.charPassword2;
      wx.setStorage({
        key: 'password',
        data: that.data.charPassword2,
      })
      wx.showToast({
        title: '成功',
        icon: 'succes',
        duration: 3000,
        mask: true
      })
    }
  }
})