const request = (url: string, method: any = 'GET', data: any, dailyRecord?: any, HOST?: string, isToken: boolean = false) => {
    //获取缓存中的token
    const TOKEN = uni.getStorageSync('token');
    // 是否要验证token 该接口是否需要token
    if (isToken && !TOKEN) {
        uni.navigateTo({ url: '/pages/login/index' });
    }
    uni.showLoading({ title: '加载中', mask: true });
    // 将token放入header中
    const header: any = { Authorization: ' Bearer ' + TOKEN };
    header['content-type'] = 'application/x-www-form-urlencoded';
    // 默认host
    const host = ' ';
    // 设置日志参数
    const requestData = dailyRecord ? { ...data, dailyRecord: JSON.stringify(dailyRecord) } : { ...data };
    return new Promise((resolve, reject) => {
        uni.request({
            url: HOST || host + url,
            method,
            data: requestData,
            header,
            success: (res) => {
                uni.hideLoading();
                resolve(res.data);
            },
            fail: (err) => {
                uni.hideLoading();
                reject(err);
            },
        });
    });
};
export default request;
