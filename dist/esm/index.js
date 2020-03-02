var userAgent = window.navigator.userAgent;
var util = {
    loadScript: function (url, callback) {
        var doc = document;
        var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
        var script = doc.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = url;
        head.appendChild(script);
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (/loaded|complete/i.test(script.readyState)) {
                    script.onreadystatechange = null;
                    setTimeout(function () {
                        callback && callback();
                    }, 300);
                }
            };
        }
        else {
            script.onload = function () {
                console.info('load script success!');
                setTimeout(function () {
                    callback && callback();
                }, 300);
            };
        }
    },
    execStyle: function (cssText) {
        var document = typeof window !== 'undefined' && window.document;
        if (document) {
            var styleTag = document.createElement('style');
            styleTag.setAttribute('type', 'text/css');
            if (document.all) {
                styleTag.styleSheet.cssText = cssText;
            }
            else {
                styleTag.innerHTML = cssText;
            }
            var head = document.getElementsByTagName('head') && document.getElementsByTagName('head').item(0);
            head && head.appendChild(styleTag);
        }
    },
    ua: {
        isFromAndroid: /android/gi.test(userAgent),
        isFromIos: /iphone|ipod|ios/gi.test(userAgent),
        isFromWx: /MicroMessenger/gi.test(userAgent),
        isFromQQ: /mobile.*qq/gi.test(userAgent),
        isFromUC: /ucbrowser/gi.test(userAgent),
        isFromQQBrower: /mqqbrowser[^LightApp]/gi.test(userAgent),
        isFromQQBrowerLight: /MQQBrowserLightApp/gi.test(userAgent)
    }
};

var style = {
    cssText: "\n  .m-share-mask {\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    z-index: 2147483646;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: 0;\n    -webkit-transition: opacity .2s ease-in;\n    transition: opacity .2s ease-in;\n  }\n  .m-share-list{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n  }\n  .m-share-list img{\n    width:40px;\n  }\n  \n  #m-share-actionSheet {\n    margin: 0;\n    padding: 0;\n    font-family: \"PingFang SC\",Arial,\"\\5FAE\\8F6F\\96C5\\9ED1\",Helvetica,sans-serif;\n    position: fixed;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n    z-index: 2147483647;\n    background: #fff;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 30px 20px;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    -webkit-transition: -webkit-transform .2s ease-in;\n    transition: transform .2s ease-in;\n  }\n  #m-share-actionSheet div {\n    margin: 0;\n    padding: 0;\n  }\n  #m-share-actionSheet .m-share-sheet-title {\n    font-size: 12px;\n    color: #ababab;\n    text-align: center;\n    margin:10px 0 0 0;\n  }\n  #m-share-actionSheet .m-share-flex {\n    display: -webkit-box!important;\n    display: -webkit-flex!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap\n  }\n  #m-share-actionSheet .m-share-flex>.m-share-cell {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    width: 0;\n    -webkit-flex-basis: 0;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n    display: block;\n    padding: 0!important;\n    position: relative;\n    text-align: center;\n  }\n  #m-share-actionSheet .m-share-iconfont {\n    margin: 0;\n  }\n  .m-share-tips {\n    font-family: \"PingFang SC\",Arial,\"\\5FAE\\8F6F\\96C5\\9ED1\",Helvetica,sans-serif;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 3px;\n    color: #fff;\n    right: 20px;\n    z-index: 2147483647;\n    // background-color: #000;\n  }\n  .m-share-tips .m-share-tips-w {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    font-size: 18px;\n    position: relative;\n    right: 1px;\n    top: 7px;\n  }\n  .m-share-tips .m-share-tips-w .m-share-tips-p {\n    margin: 0;\n    padding: 0;\n    color: #fff;\n    font-size: 18px;\n  }\n  .m-share-tips-arrow {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    width: 54px;\n    height: 55px;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABuCAMAAAD1cAb0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3HoUvYAAAA9dFJOUwDIjg4CBPr98Av39C4GghgTQOAnv6h97AjcN2dGH+gcbxAVz1WWIqGvuko0tNP+5eN42YhaUF/WmsQ8Y8we7g2hAAAEn0lEQVQYGe3AVXbjSAAF0CcuMZllZnabE6ff/rc1Lqtp5rdVOfORiy9fvnz5nxvg8wyPBT7LY++LhYtPkdw92rXcxCewjivSrnXwCaxO4ZH87uIT5Os+STtKoZ7Z6fNJLFv4BDVKfjqGereM0v0M9QaRoCRSKGflW75kF6h3Zam/MaHaZudRck5dqBZv2yy1BxbUai0mLO1rBRS7zWz+cEigVnoW/GFfv0GpXpTxl0MPKvWiGn9bdaHQ6FjjHyYB1GkNF/yDc+pAnZvu8U+TIIQq6VmQwudPezGFKmmUkdrSoSTae7IZuFBjHmXke/yNktAzkmJoQol4oTn+yWhQct5nO5v0uy5UcOsTTraD+dLn016LNZL+2YUC7ptm3+uxNV1R8jf5xCZt3YUCtbadRTmMK1/01GjYpDObo2rhuEE2jw9gc6DUfjNCvUnapzEqZm0+yMM0BYxZm1IzALoZyXqOaoXdi2+LILZgdnS+3ACkGekceqjWbdhsag88halPqXY1gDxySC0wUaXrTIj6BZKr2Xzy3+YA3K1PsrBQoWDVb0YFXo6aw6f+EE/jq0/6QxfVGUwyMe2EkPKhT0kb4cmM7iSjMSozyLJv3cSCFMY7SqJI8GQNTiTrLqpi6dl7ARMvZo2St73gJdAcOnqOyqwvBX667RyS+2bdhWTGNZucJKiOYeGHgd6k1DZQGtcdOrM1FLC6S0reOkHJ0Gx6kxgKGFe+zKYmSvOZQ0fPocCgT+m0MPBD0ia91RjVGy/7fLLbAX5aR3s6tR4q1zpubUoN/JJopKPFJqrWOXuU3hITP+WRz714oGpu2qeUdQf4xbr2yeYlQcVa75R8/YHfzM3MtrUGqtagZK+O+FNrptXqLioWTPZ88pcu/sW9dBJULH9rUxI9/FeIihnH75T8aQjVrI83vgxzC6oFHx6l1bQF1QbrPqWsMYBqYfKdkr9IoV5EyXtvQL0GJUeru1AuZWkXQ7me4IvoQTkjYymFckaNpQbUq7GkmVCuwdIkMKBaylJ/HUC1nuCLPw2g2HiesTTsWFCrtzmwFG1aUCvpTliKYEKt0a3OUg2qjRoLvrTbBhRzFwuPUraNoVartd3ZlLRtALXcje45lDK9C7VGRYOlfpFCLXdR9yiJZieAUklSu9uUTqeHAaVGRZ2l9iKAUr3edskX73DpQKlH91vTobRr53MoFI47s4ylpZ5DodC9rL8JSnb7fR1DoXFcX3oszd6SFpSxRvGxLhxKTV+fGlCmhaL4nvHF7utTI4QilpV0dU1wT9LhbtfZQJWWMS2W77Qp+X29mMOEEta8NzyfhGNTEoeoMFwoEJrjXqo3DhPalGyxPD/GIf5WksCECRMlE61Rso7P0/u7ECyJg66P5jDxt+LGbHhbB904H82D3nUzvX4s6tru4LHk+dpkuBm0TPw9a6p5XibuWW21qi9PK+/OzLYdPjmO53ur3frozlGN8NHImsJ2bDrc8zeHTbHQ9HN3MDZRmTAdfNxW2/62eRdS29aaK205e/voBrEbomKW1XI7eRFE3eijMdQ7UV4kc8NIYEKZEC6SMAxh4sv/2T8XLefQYLd95QAAAABJRU5ErkJggg==');\n    background-size: 100%;\n  }\n  .m-share-tips-bottom {\n    font-family: \"PingFang SC\",Arial,\"\\5FAE\\8F6F\\96C5\\9ED1\",Helvetica,sans-serif;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    position: fixed;\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    z-index: 2147483647;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width: 240px;\n    line-height: 1.72;\n  }\n  @font-face {font-family: \"m-share-iconfont\";\n    src: url('data:application/x-font-ttf;charset=utf-8;base64,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') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  }\n  .m-share-iconfont {\n    font-family:\"m-share-iconfont\" !important;\n    font-size:26px;\n    font-style:normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    padding: 5px;\n    margin:0 0 0 10px;\n  }\n  .m-share-iconfont:first-child {\n    margin: 0;\n  }\n  .m-share-iconfont-wx {\n    color: #7bc549;\n    border: 1px solid #7bc549;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-wx:active {\n    background: #7bc549;\n    color: #fff;\n  }\n  .m-share-iconfont-wx:before {\n    content: \"\\e61e\";\n  }\n  .m-share-iconfont-sina {\n    color: #ff763b;\n    border: 1px solid #ff763b;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-sina:active {\n    background: #ff763b;\n    color: #fff;\n  }\n  .m-share-iconfont-sina:before {\n    content: \"\\e641\";\n  }\n  .m-share-iconfont-qzone {\n    color: #fdbe3d;\n    border: 1px solid #fdbe3d;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-qzone:active {\n    background: #fdbe3d;\n    color: #fff;\n  }\n  .m-share-iconfont-qzone:before {\n    content: \"\\e728\";\n  }\n  .m-share-iconfont-qq {\n    color: #56b6e7;\n    border: 1px solid #56b6e7;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-qq:active {\n    background: #56b6e7;\n    color: #fff;\n  }\n  .m-share-iconfont-qq:before {\n    content: \"\\e630\";\n  }\n  .m-share-iconfont-wxline {\n    color: #33b045;\n    border: 1px solid #33b045;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-wxline:active {\n    background: #33b045;\n    color: #fff;\n  }\n  .m-share-iconfont-wxline:before {\n    content: \"\\e6e9\";\n  }\n  .m-share-iconfont-menu {\n    font-size: 12px;\n  }\n  .m-share-iconfont-menu:before {\n    content: \"\\e67e\";\n  }\n  .m-share-iconfont-dots {\n    font-size: 25px;\n    color: #fff;\n  }\n  .m-share-iconfont-dots:before {\n    content: \"\\e656\";\n  }\n  .m-share-iconfont-share {\n    font-size: 17px;\n    color: #fff;\n    margin: 0;\n  }\n  .m-share-iconfont-share:before {\n    content: \"\\e6ae\";\n  }\n  "
};

var isStyleLoaded = false;
var ui = {
    initStyle: function () {
        if (!isStyleLoaded) {
            util.execStyle(style.cssText);
            isStyleLoaded = true;
        }
    },
    showMask: function () {
        var _this = this;
        if (document.querySelector('.m-share-mask')) {
            return;
        }
        var $div = document.createElement('div');
        $div.className = 'm-share-mask';
        $div.addEventListener('click', function () {
            _this.hideBottomTips();
            _this.hideRightTips();
            _this.hideMask();
        });
        document.body.appendChild($div);
        typeof window !== 'undefined' && window.setTimeout(function () {
            if ($div && $div.style) {
                $div.style.opacity = '0.7';
            }
        }, 0);
    },
    hideMask: function () {
        var domList = document.querySelectorAll('.m-share-mask');
        var _loop_1 = function (i) {
            var item = domList[i];
            var removeDom = function () { return item.remove(); };
            // 渐变消失
            // item.addEventListener('webkitTransitionend', removeDom);
            // item.addEventListener('transitionend', removeDom);
            // item.style.cssText = 'opacity: 0';
            removeDom();
        };
        for (var i = 0; i < domList.length; i++) {
            _loop_1(i);
        }
    },
    showBottomTips: function () {
        var _this = this;
        this.showMask();
        var $tips = document.createElement('div');
        $tips.className = 'm-share-tips-bottom';
        $tips.innerHTML = '请打开浏览器的菜单进行分享点击“<i class="m-share-iconfont m-share-iconfont-menu"></i>”或“<i class="m-share-iconfont m-share-iconfont-share"></i>”';
        document.body.appendChild($tips);
        typeof window !== 'undefined' && window.setTimeout(function () {
            _this.hideMask();
            _this.hideBottomTips();
        }, 1400);
    },
    hideBottomTips: function () {
        var domList = document.querySelectorAll('.m-share-tips-bottom');
        for (var i = 0; i < domList.length; i++) {
            var item = domList[i];
            item.remove();
        }
    },
    showRightTopTips: function () {
        var _this = this;
        this.showMask();
        var $tips = document.createElement('div');
        $tips.className = 'm-share-tips';
        $tips.innerHTML = "\n      <div class=\"m-share-tips-w\">\n        <div class=\"m-share-tips-p\">\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C<i class=\"m-share-iconfont m-share-iconfont-dots\"></i>\u201D</div>\n        <div class=\"m-share-tips-p\">\u5206\u4EAB\u7ED9\u670B\u53CB\u5427\uFF01</div>\n      </div>\n      <div class=\"m-share-tips-arrow\"></div>\n    ";
        document.body.appendChild($tips);
        typeof window !== 'undefined' && window.setTimeout(function () {
            _this.hideMask();
            _this.hideRightTips();
        }, 1400);
    },
    hideRightTips: function () {
        var domList = document.querySelectorAll('.m-share-tips');
        for (var i = 0; i < domList.length; i++) {
            var item = domList[i];
            item.remove();
        }
    }
};

var qqJsSdkUrl = '//open.mobile.qq.com/sdk/qqapi.js';
var mqq = typeof window !== 'undefined' && window.mqq;
var setShareInfo = function (info) {
    mqq.data.setShareInfo({
        share_url: info.link,
        title: info.title,
        desc: info.desc,
        image_url: info.imgUrl
    });
};
var setQQshareInfo = (function (info) {
    if (mqq && mqq.data && mqq.data.setShareInfo) {
        setShareInfo(info);
    }
    else {
        util.loadScript(qqJsSdkUrl, function () {
            setShareInfo(info);
        });
    }
});

var setDefaultShareInfo = (function (info) {
    if (info.desc && !document.querySelector('meta[name$="description"]')) {
        var $meta = document.createElement('meta');
        $meta.setAttribute('description', info.desc);
    }
    // 添加隐藏的img标签在body最前面
    if (info.imgUrl) {
        var $img_1 = document.createElement('img');
        $img_1.style.cssText = 'width: 0;height: 0;position: absolute;z-index: -9999;top: -99999px;left: -99999px;';
        $img_1.onload = function () {
            document.body.insertBefore($img_1, document.body.firstChild);
        };
        $img_1.onerror = function () {
            $img_1.remove();
        };
        $img_1.src = info.imgUrl;
    }
});

var isInit = false;
var init = (function (config) {
    if (!isInit) {
        var info = {
            title: config.title || '',
            desc: config.desc || '',
            link: config.link || '',
            imgUrl: config.imgUrl || ''
        };
        isInit = true;
        ui.initStyle(); // 加载样式
        // 配置通用分享设置
        setDefaultShareInfo(info);
        // 配置手q分享内容
        if (util.ua.isFromQQ) {
            setQQshareInfo(info);
        }
    }
});

var PhoneType;
(function (PhoneType) {
    PhoneType[PhoneType["ios"] = 0] = "ios";
    PhoneType[PhoneType["android"] = 1] = "android";
})(PhoneType || (PhoneType = {}));
function ucShare(type, info) {
    var platForm = {
        'wx': ['kWeixin', 'WechatFriends'],
        'wxline': ['kWeixinFriend', 'WechatTimeline'],
        'qq': ['kQQ', 'QQ'],
        'qzone': ['kQZone', 'Qzone'],
        'sina': ['kSinaWeibo', 'SinaWeibo'],
    };
    try {
        if (util.ua.isFromIos) {
            var platFormType = platForm[type][PhoneType.ios];
            //@ts-ignore
            ucbrowser && ucbrowser.web_share(info.title, info.desc, info.link, platFormType, '', 'XXX', info.imgUrl);
        }
        else {
            var platFormType = platForm[type][PhoneType.android];
            //@ts-ignore
            ucweb && ucweb.startRequest('shell.page_share', [info.title, info.desc, info.link, platFormType, info.imgUrl, '']);
        }
    }
    catch (e) {
        console.error(e);
        var query = "url=" + encodeURIComponent(info.link) + "&title=" + encodeURIComponent(info.desc) + "&desc=" + encodeURIComponent(info.desc) + "&pic=" + encodeURIComponent(info.imgUrl);
        if (type === 'sina') {
            location.href = "http://service.weibo.com/share/share.php?" + query;
            return;
        }
        if (type === 'qzone') {
            location.href = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + query;
            return;
        }
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var wxJsSdkUrl = '//res.wx.qq.com/open/js/jweixin-1.2.0.js';
var wx = typeof window !== 'undefined' && window.wx;
var setShareInfo$1 = function (type, info) {
    switch (type) {
        case 'wx':
            wx.onMenuShareAppMessage(info); // 设置分享到微信好友内容
            break;
        case 'wxline':
            wx.onMenuShareTimeline(info); // 设置分享到微信朋友圈内容
            break;
        case 'qq':
            wx.onMenuShareQQ(info); // 设置分享到微信好友内容
            break;
        case 'qzone':
            wx.onMenuShareQZone(info); // 设置分享到qq空间
            break;
    }
};
var setWxShareInfo = (function (types, config) {
    var wxConfig = config.wx;
    var doSet = function () {
        var _wxConfig = __assign({ jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo'] }, wxConfig);
        wx.ready(function () {
            try {
                types.forEach(function (item) {
                    var _info = {
                        title: (config.infoMap && config.infoMap[item] && config.infoMap[item].title) || config.title,
                        desc: (config.infoMap && config.infoMap[item] && config.infoMap[item].desc) || config.desc,
                        link: (config.infoMap && config.infoMap[item] && config.infoMap[item].link) || config.link,
                        imgUrl: (config.infoMap && config.infoMap[item] && config.infoMap[item].imgUrl) || config.imgUrl
                    };
                    setShareInfo$1(item, _info);
                });
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    if (wx) {
        doSet();
    }
    else {
        util.loadScript(wxJsSdkUrl, function () {
            doSet();
        });
    }
});

var qqShareJsSdk = '//jsapi.qq.com/get?api=app.setShareInfo,app.share';
var qbShare = (function (type, info) {
    var doShare = function (to_app) {
        var browser = typeof window !== 'undefined' ? window.browser : null;
        var _doShare = function () {
            console.info('exec do share func');
            setTimeout(function () {
                browser && browser.app && browser.app.share({
                    title: info.title,
                    description: info.desc,
                    url: info.link,
                    img_url: info.imgUrl,
                    to_app: to_app
                }, function (res) {
                    console.info(res);
                });
            });
        };
        if (browser && browser.app && browser.app.share) {
            _doShare();
        }
        else {
            console.error('loadqqjsapi');
            util.loadScript(qqShareJsSdk, _doShare);
        }
    };
    switch (type) {
        case 'wx':
            doShare(1);
            break;
        case 'wxline':
            doShare(8);
            break;
        case 'qq':
            doShare(4);
            break;
        case 'qzone':
            doShare(3);
            break;
        case 'sina':
            doShare(11);
            break;
    }
});

function Copy(text, callback) {
    var input = document.createElement('input');
    input.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var res = document.execCommand('copy');
    document.body.removeChild(input);
    callback && callback(res);
}

var typesMap = ['wx', 'wxline', 'qq', 'qzone', 'sina', 'copylink'];
var isRender = false;
var getDefaultConfig = function (config) {
    config = config || {};
    var infoMapType = typeof config.infoMap;
    var MetaDom = document.querySelector('meta[name$="description"]');
    var ImgDom = document.querySelector('img');
    return {
        title: (config && config.title) || document.title,
        desc: (config && config.desc) ||
            (document.querySelector('meta[name$="description"]') &&
                MetaDom &&
                MetaDom.getAttribute('content')) ||
            '',
        link: encodeURI((config && config.link) || (typeof window !== 'undefined' && window.location.href)),
        imgUrl: (config && config.imgUrl) ||
            (document.querySelector('img') && ImgDom && ImgDom.getAttribute('src')) ||
            '',
        types: (config && Array.isArray(config.types) && config.types) || [
            'wx',
            'wxline',
            'qq',
            'qzone',
            'sina'
        ],
        wx: (config && config.wx) || null,
        fnDoShare: config.fnDoShare,
        diyShare: config.fnDoShare,
        infoMap: infoMapType === 'function' ||
            (infoMapType === 'object' && !!config.infoMap)
            ? config.infoMap
            : {}
    };
};
var index = {
    wxConfig: function (config) {
        var _config = getDefaultConfig(config);
        if (util.ua.isFromWx &&
            _config.wx &&
            _config.wx.appId &&
            _config.wx.timestamp &&
            _config.wx.nonceStr &&
            _config.wx.signature) {
            setWxShareInfo(['wx', 'wxline', 'qq', 'qzone'], _config);
        }
    },
    init: function (config) {
        var _config = getDefaultConfig(config);
        init(_config);
    },
    render: function (dom, config) {
        var _this = this;
        if (isRender) {
            return;
        }
        isRender = true;
        var _config = getDefaultConfig(config);
        init(_config);
        var getTmpl = function (type) {
            if (typesMap.indexOf(type) >= 0) {
                return "<img class=\"m-share-" + type + "\" src=\"https://w1.hoopchina.com.cn/images/share/" + type + ".png\"/>";
            }
            return '';
        };
        var tmp = '';
        _config.types.forEach(function (item) {
            tmp += getTmpl(item);
        });
        if (typeof dom === 'string') {
            dom = document.querySelector(dom);
        }
        if (!dom) {
            return;
        }
        dom.innerHTML = "<div class=\"m-share-list\">" + tmp + "</div>";
        dom.addEventListener('touchend', function (e) {
            var target = e.target;
            var lock = true;
            typesMap.forEach(function (item) {
                if (target.classList.contains("m-share-" + item) && lock) {
                    lock = false;
                    var shareData = {
                        title: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].title) || _config.title,
                        desc: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].desc) || _config.desc,
                        link: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].link) || _config.link,
                        imgUrl: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].imgUrl) || _config.imgUrl,
                        fnDoShare: _config.fnDoShare,
                        diyShare: _config.diyShare,
                    };
                    _this.to(item, shareData);
                }
            });
        });
    },
    to: function (type, config) {
        var _config = getDefaultConfig(config);
        init(_config);
        if (type === 'copylink') {
            return Copy(config.link || (typeof window !== 'undefined' && window.location.href || ''), function (res) {
                if (res) {
                    console.info('copy success');
                    config.diyShare && config.diyShare(type);
                }
                else {
                    config.diyShare && config.diyShare(type);
                    throw new Error('copy failed!');
                }
            });
        }
        if (typesMap.indexOf(type) >= 0) {
            if (_config.fnDoShare) {
                _config.fnDoShare(type);
            }
            if (util.ua.isFromUC) {
                ucShare(type, config);
                return;
            }
            if (util.ua.isFromQQBrower) {
                qbShare(type, config);
                return;
            }
            var navigator = typeof window !== 'undefined' && window.navigator;
            if (navigator.share) {
                navigator
                    .share({
                    title: _config.title,
                    text: _config.desc,
                    url: _config.link
                })
                    .then(function () {
                    console.info('Successful share');
                })
                    .catch(function (error) {
                    config.diyShare && config.diyShare(type);
                });
            }
            else {
                if (util.ua.isFromWx) {
                    ui.showMask();
                    ui.showRightTopTips();
                }
                config.diyShare && config.diyShare(type);
            }
        }
    }
};

export { Copy, index as Share };
