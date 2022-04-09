/* eslint-disable import/no-cycle */
import axios from 'axios';
import Vue from 'vue';
import { Toast } from 'vant';
import { Base64 } from 'js-base64';
// 接口通用前缀
const baseURL = '/api';
// login过滤

// const dev = process.env.NODE_ENV === 'development';
class HttpRequest {
    constructor(configs) {
        this.baseUrl = configs.baseUrl;
        this.phoneNo = configs.loginPhoneNo;
        this.queue = {};
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            defaults: {
                withCredentials: true,
            },
            headers: {
                common: {
                    'PHONE-NO': this.phoneNo,
                },
                post: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
            },
        };
        return config;
    }

    distroy(url) {
        delete this.queue[url];
        const $dialog = document.querySelector('.yd-dialog-white-mask');
        $dialog && document.body.removeChild($dialog);
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }

    interceptors(instance, url) {
    // 请求拦截
        instance.interceptors.request.use((config) => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                //
            }
            const device = Base64.encode(JSON.stringify(Object.assign({}, deviceInfo, {
            })));
            if (config.method === 'post') {
            }
            if (config.method === 'get') {
            }
            config.url = baseURL + config.url;
            config.headers['X-TOKEN'] = localStorage.getItem('userInfo') || '';
            this.queue[url] = true;
            return config;
        }, error => Promise.reject(error));
        // 响应拦截
        instance.interceptors.response.use((res) => {
            this.distroy(url);
            if (res.status === 200) {
                if (res.data.code === '000005') {
                    // 清除用户信息
                    localStorage.setItem('userInfo', {
                        token: '',
                        mobile: '',
                        wu: '',
                        name: '',
                    });
                    window.location = process.env.VUE_APP_JUMPURL;
                } else if (res.data.code !== '000000' && res.data.msg) {
                    Toast.fail(res.data.msg);
                }
            }
            return res.data;
        }, (error) => {
            if (error.response.data.code === '50000') {
                const vm = new Vue();
                vm.jumpUrl();
            } else if (error.response.data.msg) {
                Toast.fail(error.response.data.msg);
            } else if (error.response.data.code === '000005') {
                // 清除用户信息
                localStorage.setItem('userInfo', {
                    token: '',
                    mobile: '',
                    wu: '',
                    name: '',
                });
                window.location = process.env.VUE_APP_JUMPURL;
            } else {
                Toast.fail('网络不佳~请稍后重试~');
            }
            this.distroy(url);
            return Promise.reject(error);
        });
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), { method: 'POST' }, options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}
export default HttpRequest;
