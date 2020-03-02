import util from '../utils';
import ui from './ui';
import setQQshareInfo from './setInfo/setQqShareInfo';
import setDefaultShareInfo from './setInfo/setDefaultShareInfo';

import {ShareInfo} from './share';

let isInit = false;

export default (config: ShareInfo) => {
  if (!isInit) {
    const info = {
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
};