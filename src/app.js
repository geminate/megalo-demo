import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(VHtmlPlugin);

const app = new Vue(App);

app.$mount();

export default {
    config: {
        // pages 的首个页面会被编译成首页
        pages: [
            'pages/basic/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'megalo-demo',
            navigationBarTextStyle: 'black'
        }
    }
}