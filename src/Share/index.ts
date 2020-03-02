import util from '../utils';
import init from './init';
import ucShare from './handleShare/ucShare';
import setWxShareInfo from './setInfo/setWxShareInfo';
import qbShare from './handleShare/qbShare';
import ui from './ui';
import Copy from '../Copy';

const typesMap = ['wx', 'wxline', 'qq', 'qzone', 'sina','copylink'];
let isRender = false;

type wxConfig = {
  appId: string;
  timestamp: string;
  nonceStr: string;
  signature: string;
  title?: string;
  link?: string;
  desc?: string;
  imgUrl?: string;
};

const getDefaultConfig = (config: any) => {
  config = config || {};
  const infoMapType = typeof config.infoMap;
  const MetaDom = document.querySelector('meta[name$="description"]');
  const ImgDom = document.querySelector('img');

  return {
    title: (config && config.title) || document.title,
    desc:
      (config && config.desc) ||
      (document.querySelector('meta[name$="description"]') &&
        MetaDom &&
        MetaDom.getAttribute('content')) ||
      '',
    link: encodeURI((config && config.link) ||(typeof window !== 'undefined' &&  window.location.href)),
    imgUrl:
      (config && config.imgUrl) ||
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
    infoMap:
      infoMapType === 'function' ||
      (infoMapType === 'object' && !!config.infoMap)
        ? config.infoMap
        : {}
  };
};


export default {

  wxConfig(config: wxConfig) {
    const _config = getDefaultConfig(config as wxConfig);
    if (
      util.ua.isFromWx &&
      _config.wx &&
      _config.wx.appId &&
      _config.wx.timestamp &&
      _config.wx.nonceStr &&
      _config.wx.signature
    ) {
      setWxShareInfo(['wx', 'wxline', 'qq', 'qzone'], _config);
    }
  },

  init(config: any) {
    const _config = getDefaultConfig(config);
    init(_config);
  },
  
  render(dom:any, config:any) {
    if(isRender){
      return;
    }
    isRender = true;
    const _config = getDefaultConfig(config);
    init(_config);
    const getTmpl = (type:string) => {
      if (typesMap.indexOf(type) >= 0) {
        return `<img class="m-share-${type}" src="https://w1.hoopchina.com.cn/images/share/${type}.png"/>`;
      }
      return '';
    };
    let tmp = '';
    _config.types.forEach((item:'wx'| 'wxline'| 'qq'| 'qzone'| 'sina'| 'copylink') => {
      tmp += getTmpl(item);
    });
    if (typeof dom === 'string') {
      dom = document.querySelector(dom);
    }
    if (!dom) {
      return;
    }

    
    dom.innerHTML = `<div class="m-share-list">${tmp}</div>`;
    dom.addEventListener('touchend', (e: { target: any; }) => {
      const target = e.target;
      let lock = true;

      typesMap.forEach(item => {
        if (target.classList.contains(`m-share-${item}`) && lock) {
          lock = false;
          const shareData = {
            title: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].title) || _config.title,
            desc: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].desc) || _config.desc,
            link: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].link) || _config.link,
            imgUrl: (_config.infoMap && _config.infoMap[item] && _config.infoMap[item].imgUrl) || _config.imgUrl,
            fnDoShare: _config.fnDoShare,
            diyShare:_config.diyShare,
          };
          this.to(item as 'wx' | 'wxline' | 'qq' | 'qzone' | 'sina' | 'copylink', shareData as any);
        }
      });
    });
  },

  to(
    type: 'wx' | 'wxline' | 'qq' | 'qzone' | 'sina' | 'copylink',
    config: {
      title?: string;
      link?: string;
      desc?: string;
      imgUrl?: string;
      fnDoShare?: () => any; //分享前的回调
      diyShare: (type: 'wx' | 'wxline' | 'qq' | 'qzone' | 'sina' | 'copylink') => any; //不支持的浏览器定制分享的回调
    }
  ) {
    const _config = getDefaultConfig(config);
    init(_config);
    
    if(type === 'copylink'){
      return Copy(config.link||(typeof window !== 'undefined' && window.location.href || ''),res=>{
        if(res){
          console.info('copy success');
          config.diyShare && config.diyShare(type);
        }else{
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

      const navigator = typeof window !== 'undefined' && window.navigator as any;

      if (navigator.share) {
        navigator
          .share({
            title: _config.title,
            text: _config.desc,
            url: _config.link
          })
          .then(() => {
            console.info('Successful share');
          })
          .catch((error: string) => {
            config.diyShare && config.diyShare(type);
          });
      } else {
        if(util.ua.isFromWx){
          ui.showMask();
          ui.showRightTopTips();
        }
  
        config.diyShare && config.diyShare(type);
      }
    }
  }
};
