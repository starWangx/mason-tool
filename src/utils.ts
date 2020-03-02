
const userAgent = window.navigator.userAgent;
export default {
  loadScript(url:string, callback?:()=>void) {
    const doc = document;
    const head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

    interface IEHTMLScriptElement extends HTMLScriptElement {
      readyState?: any;
      onreadystatechange?: (() => void) | null;
    }

    const script:IEHTMLScriptElement = doc.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = url;
    head.appendChild(script);

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (/loaded|complete/i.test(script.readyState)) {
          script.onreadystatechange = null;
          setTimeout(() => {
            callback && callback();
          }, 300);
        }
      };
    } else {
      script.onload = function () {
        console.info('load script success!');
        setTimeout(() => {
          callback && callback();
        }, 300);
      };
    }
  },

  execStyle(cssText:string) {
    const document = typeof window !== 'undefined' &&  window.document;
    if(document){
      const styleTag = document.createElement('style') as any;
      styleTag.setAttribute('type', 'text/css');
      if (document.all) {
        styleTag.styleSheet.cssText = cssText;
      } else {
        styleTag.innerHTML = cssText;
      }
      const head = document.getElementsByTagName('head') && document.getElementsByTagName('head').item(0);
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