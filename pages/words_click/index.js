//index.js
//获取应用实例
const app = getApp()

Page({
      data: {
            word: "<p>The Israel Defense Forces (IDF) says its operation is against the Quds Force - elite units of the Iranian Revolutionary Guards. </p> <p>It provided no details.But there are reports of strikes around the Syrian capital Damascus early on Monday. </p><p>Syrian media say air defences have repelled \"an Israeli aerial attack\".On Sunday the IDF said it had intercepted a rocket over the Golan Heights.</p>",
            word_array:[]
      },
      onLoad: function() {
            var word_array = this.data.word.split(" ");

            this.setData({
                  word_array: word_array
            })
      },

      tap: function(e) {
            console.log(e);
      }
})