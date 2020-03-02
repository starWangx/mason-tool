import util from '../../utils';

const enum PhoneType {
  ios,
  android,
}

export default function ucShare(type: 'wx' | 'wxline' | 'qq' | 'qzone' | 'sina', info: any) {
  const platForm = {
    'wx': ['kWeixin', 'WechatFriends'],
    'wxline': ['kWeixinFriend', 'WechatTimeline'],
    'qq': ['kQQ', 'QQ'],
    'qzone': ['kQZone', 'Qzone'],
    'sina': ['kSinaWeibo', 'SinaWeibo'],
  };

  try {
    if (util.ua.isFromIos) {
      const platFormType = platForm[type][PhoneType.ios];
      //@ts-ignore
      ucbrowser && ucbrowser.web_share(info.title, info.desc, info.link, platFormType, '', 'XXX', info.imgUrl);
    } else {
      const platFormType = platForm[type][PhoneType.android];
      //@ts-ignore
      ucweb && ucweb.startRequest('shell.page_share', [info.title, info.desc, info.link, platFormType, info.imgUrl, '']);
    }
  } catch (e) {
    console.error(e);
    const query = `url=${encodeURIComponent(info.link)}&title=${encodeURIComponent(info.desc)}&desc=${encodeURIComponent(info.desc)}&pic=${encodeURIComponent(info.imgUrl)}`;
    if (type === 'sina') {
      location.href = `http://service.weibo.com/share/share.php?${query}`;
      return;
    }
    if (type === 'qzone') {
      location.href = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?${query}`;
      return;
    }
  }
}
