export default (info:any) => {
  if (info.desc && !document.querySelector('meta[name$="description"]')) {
    const $meta = document.createElement('meta');
    $meta.setAttribute('description', info.desc);
  }
  // 添加隐藏的img标签在body最前面
  if (info.imgUrl) {
    const $img = document.createElement('img');
    $img.style.cssText = 'width: 0;height: 0;position: absolute;z-index: -9999;top: -99999px;left: -99999px;';
    $img.onload = () => {
      document.body.insertBefore($img, document.body.firstChild);
    };
    $img.onerror = () => {
      $img.remove();
    };
    $img.src = info.imgUrl;
  }
};