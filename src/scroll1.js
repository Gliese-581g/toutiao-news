//提供屏幕滚动使用axios的get请求数据无限加载内容的接口
//参数 请求url, method
//滚动到距离组件内容底部200px时，(用整个组件内容的高度offseHeight-滚动了多少高度scrollTop-可视窗口的高度window.innerHeight)发送ajax请求获取数据，并响应数据，实现无限加载
import axios from "axios";

export default {
  use(_this) {
    let bottomOfWindow =
      document.documentElement.offsetHeight -
        document.documentElement.scrollTop -
        window.innerHeight <=
      200;
    if (bottomOfWindow && !_this.isLoading) {
    //   isLoading = true;
      axios
        .get(_this.url)
        .then(response => {
          _this.method(response);
          _this.isLoading = false;
        })
        .catch(error => error);
    }
  },
  callback(response, _this) {
    const result = response.data.data;
    result.forEach(item => {
      _this.newsLists.push(item);
    });
  }
};
