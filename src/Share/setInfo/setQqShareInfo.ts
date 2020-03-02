import util from '../../utils';
import { Config, ShareInfo } from '../share';
const qqJsSdkUrl = '//open.mobile.qq.com/sdk/qqapi.js';
const mqq =  typeof window !== 'undefined' && (window as any).mqq;

const setShareInfo = (info: ShareInfo) => {
  mqq.data.setShareInfo({
    share_url: info.link,
    title: info.title,
    desc: info.desc,
    image_url: info.imgUrl
  });
};

export default (info: ShareInfo) => {
  if (mqq && mqq.data && mqq.data.setShareInfo) {
    setShareInfo(info);
  } else {
    util.loadScript(qqJsSdkUrl, () => {
      setShareInfo(info);
    });
  }
};
