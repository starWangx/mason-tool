var A,n=window.navigator.userAgent,e=function(A,n){var e=document,i=e.head||e.getElementsByTagName("head")[0]||e.documentElement,o=e.createElement("script");o.type="text/javascript",o.charset="utf-8",o.src=A,i.appendChild(o),o.readyState?o.onreadystatechange=function(){/loaded|complete/i.test(o.readyState)&&(o.onreadystatechange=null,setTimeout((function(){n&&n()}),300))}:o.onload=function(){console.info("load script success!"),setTimeout((function(){n&&n()}),300)}},i=function(A){var n="undefined"!=typeof window&&window.document;if(n){var e=n.createElement("style");e.setAttribute("type","text/css"),n.all?e.styleSheet.cssText=A:e.innerHTML=A;var i=n.getElementsByTagName("head")&&n.getElementsByTagName("head").item(0);i&&i.appendChild(e)}},o={isFromAndroid:/android/gi.test(n),isFromIos:/iphone|ipod|ios/gi.test(n),isFromWx:/MicroMessenger/gi.test(n),isFromQQ:/mobile.*qq/gi.test(n),isFromUC:/ucbrowser/gi.test(n),isFromQQBrower:/mqqbrowser[^LightApp]/gi.test(n),isFromQQBrowerLight:/MQQBrowserLightApp/gi.test(n)},t='\n  .m-share-mask {\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    z-index: 2147483646;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: 0;\n    -webkit-transition: opacity .2s ease-in;\n    transition: opacity .2s ease-in;\n  }\n  .m-share-list{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n  }\n  .m-share-list img{\n    width:40px;\n  }\n  \n  #m-share-actionSheet {\n    margin: 0;\n    padding: 0;\n    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;\n    position: fixed;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n    z-index: 2147483647;\n    background: #fff;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 30px 20px;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    -webkit-transition: -webkit-transform .2s ease-in;\n    transition: transform .2s ease-in;\n  }\n  #m-share-actionSheet div {\n    margin: 0;\n    padding: 0;\n  }\n  #m-share-actionSheet .m-share-sheet-title {\n    font-size: 12px;\n    color: #ababab;\n    text-align: center;\n    margin:10px 0 0 0;\n  }\n  #m-share-actionSheet .m-share-flex {\n    display: -webkit-box!important;\n    display: -webkit-flex!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap\n  }\n  #m-share-actionSheet .m-share-flex>.m-share-cell {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    width: 0;\n    -webkit-flex-basis: 0;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n    display: block;\n    padding: 0!important;\n    position: relative;\n    text-align: center;\n  }\n  #m-share-actionSheet .m-share-iconfont {\n    margin: 0;\n  }\n  .m-share-tips {\n    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 3px;\n    color: #fff;\n    right: 20px;\n    z-index: 2147483647;\n    // background-color: #000;\n  }\n  .m-share-tips .m-share-tips-w {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    font-size: 18px;\n    position: relative;\n    right: 1px;\n    top: 7px;\n  }\n  .m-share-tips .m-share-tips-w .m-share-tips-p {\n    margin: 0;\n    padding: 0;\n    color: #fff;\n    font-size: 18px;\n  }\n  .m-share-tips-arrow {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    width: 54px;\n    height: 55px;\n    background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABuCAMAAAD1cAb0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3HoUvYAAAA9dFJOUwDIjg4CBPr98Av39C4GghgTQOAnv6h97AjcN2dGH+gcbxAVz1WWIqGvuko0tNP+5eN42YhaUF/WmsQ8Y8we7g2hAAAEn0lEQVQYGe3AVXbjSAAF0CcuMZllZnabE6ff/rc1Lqtp5rdVOfORiy9fvnz5nxvg8wyPBT7LY++LhYtPkdw92rXcxCewjivSrnXwCaxO4ZH87uIT5Os+STtKoZ7Z6fNJLFv4BDVKfjqGereM0v0M9QaRoCRSKGflW75kF6h3Zam/MaHaZudRck5dqBZv2yy1BxbUai0mLO1rBRS7zWz+cEigVnoW/GFfv0GpXpTxl0MPKvWiGn9bdaHQ6FjjHyYB1GkNF/yDc+pAnZvu8U+TIIQq6VmQwudPezGFKmmUkdrSoSTae7IZuFBjHmXke/yNktAzkmJoQol4oTn+yWhQct5nO5v0uy5UcOsTTraD+dLn016LNZL+2YUC7ptm3+uxNV1R8jf5xCZt3YUCtbadRTmMK1/01GjYpDObo2rhuEE2jw9gc6DUfjNCvUnapzEqZm0+yMM0BYxZm1IzALoZyXqOaoXdi2+LILZgdnS+3ACkGekceqjWbdhsag88halPqXY1gDxySC0wUaXrTIj6BZKr2Xzy3+YA3K1PsrBQoWDVb0YFXo6aw6f+EE/jq0/6QxfVGUwyMe2EkPKhT0kb4cmM7iSjMSozyLJv3cSCFMY7SqJI8GQNTiTrLqpi6dl7ARMvZo2St73gJdAcOnqOyqwvBX667RyS+2bdhWTGNZucJKiOYeGHgd6k1DZQGtcdOrM1FLC6S0reOkHJ0Gx6kxgKGFe+zKYmSvOZQ0fPocCgT+m0MPBD0ia91RjVGy/7fLLbAX5aR3s6tR4q1zpubUoN/JJopKPFJqrWOXuU3hITP+WRz714oGpu2qeUdQf4xbr2yeYlQcVa75R8/YHfzM3MtrUGqtagZK+O+FNrptXqLioWTPZ88pcu/sW9dBJULH9rUxI9/FeIihnH75T8aQjVrI83vgxzC6oFHx6l1bQF1QbrPqWsMYBqYfKdkr9IoV5EyXtvQL0GJUeru1AuZWkXQ7me4IvoQTkjYymFckaNpQbUq7GkmVCuwdIkMKBaylJ/HUC1nuCLPw2g2HiesTTsWFCrtzmwFG1aUCvpTliKYEKt0a3OUg2qjRoLvrTbBhRzFwuPUraNoVartd3ZlLRtALXcje45lDK9C7VGRYOlfpFCLXdR9yiJZieAUklSu9uUTqeHAaVGRZ2l9iKAUr3edskX73DpQKlH91vTobRr53MoFI47s4ylpZ5DodC9rL8JSnb7fR1DoXFcX3oszd6SFpSxRvGxLhxKTV+fGlCmhaL4nvHF7utTI4QilpV0dU1wT9LhbtfZQJWWMS2W77Qp+X29mMOEEta8NzyfhGNTEoeoMFwoEJrjXqo3DhPalGyxPD/GIf5WksCECRMlE61Rso7P0/u7ECyJg66P5jDxt+LGbHhbB904H82D3nUzvX4s6tru4LHk+dpkuBm0TPw9a6p5XibuWW21qi9PK+/OzLYdPjmO53ur3frozlGN8NHImsJ2bDrc8zeHTbHQ9HN3MDZRmTAdfNxW2/62eRdS29aaK205e/voBrEbomKW1XI7eRFE3eijMdQ7UV4kc8NIYEKZEC6SMAxh4sv/2T8XLefQYLd95QAAAABJRU5ErkJggg==\');\n    background-size: 100%;\n  }\n  .m-share-tips-bottom {\n    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    position: fixed;\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    z-index: 2147483647;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width: 240px;\n    line-height: 1.72;\n  }\n  @font-face {font-family: "m-share-iconfont";\n    src: url(\'data:application/x-font-ttf;charset=utf-8;base64,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\') format(\'truetype\'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/\n  }\n  .m-share-iconfont {\n    font-family:"m-share-iconfont" !important;\n    font-size:26px;\n    font-style:normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    padding: 5px;\n    margin:0 0 0 10px;\n  }\n  .m-share-iconfont:first-child {\n    margin: 0;\n  }\n  .m-share-iconfont-wx {\n    color: #7bc549;\n    border: 1px solid #7bc549;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-wx:active {\n    background: #7bc549;\n    color: #fff;\n  }\n  .m-share-iconfont-wx:before {\n    content: "\\e61e";\n  }\n  .m-share-iconfont-sina {\n    color: #ff763b;\n    border: 1px solid #ff763b;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-sina:active {\n    background: #ff763b;\n    color: #fff;\n  }\n  .m-share-iconfont-sina:before {\n    content: "\\e641";\n  }\n  .m-share-iconfont-qzone {\n    color: #fdbe3d;\n    border: 1px solid #fdbe3d;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-qzone:active {\n    background: #fdbe3d;\n    color: #fff;\n  }\n  .m-share-iconfont-qzone:before {\n    content: "\\e728";\n  }\n  .m-share-iconfont-qq {\n    color: #56b6e7;\n    border: 1px solid #56b6e7;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-qq:active {\n    background: #56b6e7;\n    color: #fff;\n  }\n  .m-share-iconfont-qq:before {\n    content: "\\e630";\n  }\n  .m-share-iconfont-wxline {\n    color: #33b045;\n    border: 1px solid #33b045;\n    border-radius: 100%;\n  }\n  .m-share-iconfont-wxline:active {\n    background: #33b045;\n    color: #fff;\n  }\n  .m-share-iconfont-wxline:before {\n    content: "\\e6e9";\n  }\n  .m-share-iconfont-menu {\n    font-size: 12px;\n  }\n  .m-share-iconfont-menu:before {\n    content: "\\e67e";\n  }\n  .m-share-iconfont-dots {\n    font-size: 25px;\n    color: #fff;\n  }\n  .m-share-iconfont-dots:before {\n    content: "\\e656";\n  }\n  .m-share-iconfont-share {\n    font-size: 17px;\n    color: #fff;\n    margin: 0;\n  }\n  .m-share-iconfont-share:before {\n    content: "\\e6ae";\n  }\n  ',a=!1,r={initStyle:function(){a||(i(t),a=!0)},showMask:function(){var A=this;if(!document.querySelector(".m-share-mask")){var n=document.createElement("div");n.className="m-share-mask",n.addEventListener("click",(function(){A.hideBottomTips(),A.hideRightTips(),A.hideMask()})),document.body.appendChild(n),"undefined"!=typeof window&&window.setTimeout((function(){n&&n.style&&(n.style.opacity="0.7")}),0)}},hideMask:function(){for(var A=document.querySelectorAll(".m-share-mask"),n=function(n){A[n].remove()},e=0;e<A.length;e++)n(e)},showBottomTips:function(){var A=this;this.showMask();var n=document.createElement("div");n.className="m-share-tips-bottom",n.innerHTML='请打开浏览器的菜单进行分享点击“<i class="m-share-iconfont m-share-iconfont-menu"></i>”或“<i class="m-share-iconfont m-share-iconfont-share"></i>”',document.body.appendChild(n),"undefined"!=typeof window&&window.setTimeout((function(){A.hideMask(),A.hideBottomTips()}),1400)},hideBottomTips:function(){for(var A=document.querySelectorAll(".m-share-tips-bottom"),n=0;n<A.length;n++){A[n].remove()}},showRightTopTips:function(){var A=this;this.showMask();var n=document.createElement("div");n.className="m-share-tips",n.innerHTML='\n      <div class="m-share-tips-w">\n        <div class="m-share-tips-p">点击右上角“<i class="m-share-iconfont m-share-iconfont-dots"></i>”</div>\n        <div class="m-share-tips-p">分享给朋友吧！</div>\n      </div>\n      <div class="m-share-tips-arrow"></div>\n    ',document.body.appendChild(n),"undefined"!=typeof window&&window.setTimeout((function(){A.hideMask(),A.hideRightTips()}),1400)},hideRightTips:function(){for(var A=document.querySelectorAll(".m-share-tips"),n=0;n<A.length;n++){A[n].remove()}}},s="undefined"!=typeof window&&window.mqq,c=function(A){s.data.setShareInfo({share_url:A.link,title:A.title,desc:A.desc,image_url:A.imgUrl})},d=!1,f=function(A){if(!d){var n={title:A.title||"",desc:A.desc||"",link:A.link||"",imgUrl:A.imgUrl||""};d=!0,r.initStyle(),function(A){A.desc&&!document.querySelector('meta[name$="description"]')&&document.createElement("meta").setAttribute("description",A.desc);if(A.imgUrl){var n=document.createElement("img");n.style.cssText="width: 0;height: 0;position: absolute;z-index: -9999;top: -99999px;left: -99999px;",n.onload=function(){document.body.insertBefore(n,document.body.firstChild)},n.onerror=function(){n.remove()},n.src=A.imgUrl}}(n),o.isFromQQ&&function(A){s&&s.data&&s.data.setShareInfo?c(A):e("//open.mobile.qq.com/sdk/qqapi.js",(function(){c(A)}))}(n)}};!function(A){A[A.ios=0]="ios",A[A.android=1]="android"}(A||(A={}));
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
var m=function(){return(m=Object.assign||function(A){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(A[o]=n[o]);return A}).apply(this,arguments)},l="undefined"!=typeof window&&window.wx,h=function(A,n){var i=n.wx,o=function(){m({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone","onMenuShareWeibo"]},i);l.ready((function(){try{A.forEach((function(A){!function(A,n){switch(A){case"wx":l.onMenuShareAppMessage(n);break;case"wxline":l.onMenuShareTimeline(n);break;case"qq":l.onMenuShareQQ(n);break;case"qzone":l.onMenuShareQZone(n)}}(A,{title:n.infoMap&&n.infoMap[A]&&n.infoMap[A].title||n.title,desc:n.infoMap&&n.infoMap[A]&&n.infoMap[A].desc||n.desc,link:n.infoMap&&n.infoMap[A]&&n.infoMap[A].link||n.link,imgUrl:n.infoMap&&n.infoMap[A]&&n.infoMap[A].imgUrl||n.imgUrl})}))}catch(A){console.error(A)}}))};l?o():e("//res.wx.qq.com/open/js/jweixin-1.2.0.js",(function(){o()}))};function g(A,n){var e=document.createElement("input");e.setAttribute("readonly","readonly"),e.setAttribute("value",A),document.body.appendChild(e),e.select();var i=document.execCommand("copy");document.body.removeChild(e),n&&n(i)}var p=["wx","wxline","qq","qzone","sina","copylink"],B=!1,w=function(A){var n=typeof(A=A||{}).infoMap,e=document.querySelector('meta[name$="description"]'),i=document.querySelector("img");return{title:A&&A.title||document.title,desc:A&&A.desc||document.querySelector('meta[name$="description"]')&&e&&e.getAttribute("content")||"",link:encodeURI(A&&A.link||"undefined"!=typeof window&&window.location.href),imgUrl:A&&A.imgUrl||document.querySelector("img")&&i&&i.getAttribute("src")||"",types:A&&Array.isArray(A.types)&&A.types||["wx","wxline","qq","qzone","sina"],wx:A&&A.wx||null,fnDoShare:A.fnDoShare,diyShare:A.fnDoShare,infoMap:"function"===n||"object"===n&&A.infoMap?A.infoMap:{}}},Q={wxConfig:function(A){var n=w(A);o.isFromWx&&n.wx&&n.wx.appId&&n.wx.timestamp&&n.wx.nonceStr&&n.wx.signature&&h(["wx","wxline","qq","qzone"],n)},init:function(A){var n=w(A);f(n)},render:function(A,n){var e=this;if(!B){B=!0;var i=w(n);f(i);var o="";i.types.forEach((function(A){var n;o+=(n=A,p.indexOf(n)>=0?'<img class="m-share-'+n+'" src="https://w1.hoopchina.com.cn/images/share/'+n+'.png"/>':"")})),"string"==typeof A&&(A=document.querySelector(A)),A&&(A.innerHTML='<div class="m-share-list">'+o+"</div>",A.addEventListener("touchend",(function(A){var n=A.target,o=!0;p.forEach((function(A){if(n.classList.contains("m-share-"+A)&&o){o=!1;var t={title:i.infoMap&&i.infoMap[A]&&i.infoMap[A].title||i.title,desc:i.infoMap&&i.infoMap[A]&&i.infoMap[A].desc||i.desc,link:i.infoMap&&i.infoMap[A]&&i.infoMap[A].link||i.link,imgUrl:i.infoMap&&i.infoMap[A]&&i.infoMap[A].imgUrl||i.imgUrl,fnDoShare:i.fnDoShare,diyShare:i.diyShare};e.to(A,t)}}))})))}},to:function(n,i){var t=w(i);if(f(t),"copylink"===n)return g(i.link||"undefined"!=typeof window&&window.location.href||"",(function(A){if(!A)throw i.diyShare&&i.diyShare(n),new Error("copy failed!");console.info("copy success"),i.diyShare&&i.diyShare(n)}));if(p.indexOf(n)>=0){if(t.fnDoShare&&t.fnDoShare(n),o.isFromUC)return void function(n,e){var i={wx:["kWeixin","WechatFriends"],wxline:["kWeixinFriend","WechatTimeline"],qq:["kQQ","QQ"],qzone:["kQZone","Qzone"],sina:["kSinaWeibo","SinaWeibo"]};try{if(o.isFromIos){var t=i[n][A.ios];ucbrowser&&ucbrowser.web_share(e.title,e.desc,e.link,t,"","XXX",e.imgUrl)}else{t=i[n][A.android];ucweb&&ucweb.startRequest("shell.page_share",[e.title,e.desc,e.link,t,e.imgUrl,""])}}catch(A){console.error(A);var a="url="+encodeURIComponent(e.link)+"&title="+encodeURIComponent(e.desc)+"&desc="+encodeURIComponent(e.desc)+"&pic="+encodeURIComponent(e.imgUrl);if("sina"===n)return void(location.href="http://service.weibo.com/share/share.php?"+a);if("qzone"===n)return void(location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+a)}}(n,i);if(o.isFromQQBrower)return void function(A,n){var i=function(A){var i="undefined"!=typeof window?window.browser:null,o=function(){console.info("exec do share func"),setTimeout((function(){i&&i.app&&i.app.share({title:n.title,description:n.desc,url:n.link,img_url:n.imgUrl,to_app:A},(function(A){console.info(A)}))}))};i&&i.app&&i.app.share?o():(console.error("loadqqjsapi"),e("//jsapi.qq.com/get?api=app.setShareInfo,app.share",o))};switch(A){case"wx":i(1);break;case"wxline":i(8);break;case"qq":i(4);break;case"qzone":i(3);break;case"sina":i(11)}}(n,i);var a="undefined"!=typeof window&&window.navigator;a.share?a.share({title:t.title,text:t.desc,url:t.link}).then((function(){console.info("Successful share")})).catch((function(A){i.diyShare&&i.diyShare(n)})):(o.isFromWx&&(r.showMask(),r.showRightTopTips()),i.diyShare&&i.diyShare(n))}}};export{g as Copy,Q as Share};
