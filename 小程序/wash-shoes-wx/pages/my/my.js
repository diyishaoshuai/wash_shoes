Page({
    data: {
      userInfo: {}
    },
    onGetUserInfo: function(e) {
      console.log(e.detail.userInfo)
      this.setData({
        userInfo: e.detail.userInfo
      })
    }
  })