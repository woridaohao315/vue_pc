export default {
  //    存储cookie
  setCookie: function (json) {
    if (json) {
      for (var k in json) {
        document.cookie = k + "=" + json[k];

      }

    }

  },

  getCookie: function (cookie, key) {
    if (cookie) {
      //"username=xx; password=123456"
      var arr = cookie.split(";"); //["username=xx"," password=123456"];

      var newArr = [];
      //            遍历每一个元素 去掉首尾空格
      for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i].trim());
      }
      //           console.log(newArr);//["username=xx","password=123456"];
      for (var i = 0; i < newArr.length; i++) {
        var keyAndValueArr = newArr[i].split("=");
        //               console.log(keyAndValueArr);//["username","xx"]   ["password","123456"]
        if (keyAndValueArr[0] == key) {
          return keyAndValueArr[1];

        }

      }

      //循环都执行完了 证明没执行过return  表示没匹配if语句 也就是没找到
      return undefined;



    } else {

      //            cookie参数是undefined或者空字符串都[匹配这
      return undefined;
    }

  },
  deleteCookie: function (cookie, key) {
    //获取当前时间 
    var date = new Date();
    //将date设置为过去的时间 
    date.setTime(date.getTime() - 10000);
    //将userId这个cookie删除 
    document.cookie = cookie + "=" + key + "; expires=" + date.toGMTString();
    //--> 
  }
}
