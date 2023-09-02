import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
    const app = createSSRApp(App);
    // 定义全局变量
    const imgUrl = 'https://xcx4hsmj.oss-cn-hangzhou.aliyuncs.com/xuezhuangxiu/find-daxu-for-decoration/';
    app.provide('imgUrl', imgUrl);
    return {
        app,
    };
}
