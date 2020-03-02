import util from '../../utils';

const qqShareJsSdk = '//jsapi.qq.com/get?api=app.setShareInfo,app.share';

type typeValue = 'wx' | 'wxline' | 'qq' | 'qzone' | 'sina';

export default (type: typeValue, info: any) => {
  const doShare = (to_app:number) => {
    const  browser  = typeof window !== 'undefined' ? (window as any).browser : null ;
    const _doShare = () => {
      console.info('exec do share func');
      setTimeout(() => {
        browser && browser.app && browser.app.share({
          title: info.title,
          description: info.desc,
          url: info.link,
          img_url: info.imgUrl,
          to_app
        }, (res:any) => {
          console.info(res);
        });
      });
    };
    if (browser && browser.app && browser.app.share) {
      _doShare();
    } else {
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
};