//提供屏幕滚动使用axios的get请求数据无限加载内容的接口
//参数 请求url, method
import axios from 'axios'

export default {
    use(url, method) {
        let isLoading = false;
        let page = 2;
        console.log(page);
        window.onscroll = () => {
            let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200;
            if (bottomOfWindow && !isLoading) {
                url = url + page;
                isLoading = true;
                axios.get(url)
                    .then(response => {
                        method(response);
                        isLoading = false;
                        page++;
                    })
                    .catch(error => error);
            }
        }
    }
}