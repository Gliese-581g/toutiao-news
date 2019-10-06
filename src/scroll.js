//滚动到距离组件内容底部200px时，(用整个组件内容的高度offseHeight-滚动了多少高度scrollTop-可视窗口的高度window.innerHeight)发送ajax请求获取数据，并响应数据，实现无限加载
import axios from "axios";

export default {
  use(_this) {
    return new Promise((resovle, reject) => {
      let bottomOfWindow =
        document.documentElement.offsetHeight -
          document.documentElement.scrollTop -
          window.innerHeight <=
        200;
      if (bottomOfWindow && !_this.isLoading) {
        _this.isLoading = true;
        axios
          .get(_this.url)
          .then(response => {
            resovle(response);
          })
          .catch(error => reject(error));
      }
    });
  },

  scrolling(_this) {
    window.onscroll = () => {
      this.use(_this).then(response => {
        const result = response.data.data;
        result.forEach(item => {
          _this.newsLists.push(item);
        });
        _this.isLoading = false;
      });
    };
  }
}
