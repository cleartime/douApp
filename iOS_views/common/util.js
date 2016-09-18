/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */
import Dimensions from 'Dimensions';

import React,{
    PixelRatio,
    ActivityIndicatorIOS
} from 'react-native';

module.exports = {
    navigationHeight: 44,
    navigationBarBGColor: '#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    get: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch(function (err) {
                failCallback(err);
            });
    },
    post: function (url, data, successCallback, failCallback) {
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch(function (err) {
                failCallback(err);
            });
    },
    transformRequest: function (obj) {
        const str = [];
        for (const p of Object.keys(obj)) {
            str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
        }
        return str.join('&');
    },
    /*loading效果*/
    loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40}}/>
};
