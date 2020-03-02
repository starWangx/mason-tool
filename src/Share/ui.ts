import util from '../utils';
import style from './style';

let isStyleLoaded = false;
export default {
  initStyle() {
    if (!isStyleLoaded) {
      util.execStyle(style.cssText);
      isStyleLoaded = true;
    }
  },

  showMask() {
    if (document.querySelector('.m-share-mask')) {
      return;
    }
    const $div = document.createElement('div');
    $div.className = 'm-share-mask';
    $div.addEventListener('click', () => {
      this.hideBottomTips();
      this.hideRightTips();
      this.hideMask();
    });
    document.body.appendChild($div);
    typeof window !== 'undefined' && window.setTimeout(() => {
      if($div && $div.style){
        $div.style.opacity = '0.7';
      }
    }, 0);
  },

  hideMask() {
    const domList = document.querySelectorAll('.m-share-mask');
    for (let i = 0; i < domList.length; i++) {
      const item = domList[i];
      const removeDom = () => item.remove();
      // 渐变消失
      // item.addEventListener('webkitTransitionend', removeDom);
      // item.addEventListener('transitionend', removeDom);
      // item.style.cssText = 'opacity: 0';
      removeDom();
    }
  },

  showBottomTips() {
    this.showMask();
    const $tips = document.createElement('div');
    $tips.className = 'm-share-tips-bottom';
    $tips.innerHTML = '请打开浏览器的菜单进行分享点击“<i class="m-share-iconfont m-share-iconfont-menu"></i>”或“<i class="m-share-iconfont m-share-iconfont-share"></i>”';
    document.body.appendChild($tips);
    typeof window !== 'undefined' && window.setTimeout(() => {
      this.hideMask();
      this.hideBottomTips();
    }, 1400);
  },

  hideBottomTips() {
    const domList = document.querySelectorAll('.m-share-tips-bottom');
    for (let i = 0; i < domList.length; i++) {
      const item = domList[i];
      item.remove();
    }
  },

  showRightTopTips() {
    this.showMask();
    const $tips = document.createElement('div');
    $tips.className = 'm-share-tips';
    $tips.innerHTML = `
      <div class="m-share-tips-w">
        <div class="m-share-tips-p">点击右上角“<i class="m-share-iconfont m-share-iconfont-dots"></i>”</div>
        <div class="m-share-tips-p">分享给朋友吧！</div>
      </div>
      <div class="m-share-tips-arrow"></div>
    `;
    document.body.appendChild($tips);
    typeof window !== 'undefined' && window.setTimeout(() => {
      this.hideMask();
      this.hideRightTips();
    }, 1400);
  },
  
  hideRightTips() {
    const domList = document.querySelectorAll('.m-share-tips');
    for (let i = 0; i < domList.length; i++) {
      const item = domList[i];
      item.remove();
    }
  }
};