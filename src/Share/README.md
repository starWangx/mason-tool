# Share

## Example
```typescript
import { Share } from "@hupu/tool";

// uc or qq浏览器 or safari 分享到 微信、朋友圈、qq、qq空间、新浪
// 注意*safari分享要在https环境下才能出发
type type = "wx" | "wxline" | "qq" | "qzone" | "sina";
type config = {
  title?: string;
  link?: stirng;
  desc?: string;
  imgUrl?: string;
  fnDoShare?: ()=>any; //分享前的回调
  diyShare:()=>any;//不支持的浏览器定制分享的回调
};
Share.to(type, config);

//配置微信分享信息
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

Share.wxConfig(wxConfig);

```