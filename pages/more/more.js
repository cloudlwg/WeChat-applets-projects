//detail.js
//获取应用实例
var app = getApp()

Page({

  binddeliver: function (e) {
    wx.navigateTo({
      url: '/pages/deliver/deliver'
    })
  },
  bindweather: function (e) {
    wx.navigateTo({
      url: '/pages/weather/weather'
    })
  },
  bindsong: function(e){
    wx.navigateTo({
      url: "/pages/player/player"
    })
  },
  bindwords: function (e) {
    wx.navigateTo({
      url: "/pages/words/words"
    })
  },

  binddaily: function (e) {
    wx.navigateTo({
      url: "/pages/daily/daily"
    })
  },



})