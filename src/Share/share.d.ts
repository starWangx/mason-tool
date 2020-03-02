export declare enum Types {'wx', 'wxline', 'qq', 'qzone', 'sina'}

interface ShareInfo {
  link?: string,
  title?: string,
  desc?: string,
  imgUrl?: string,
}

export interface Config extends  ShareInfo{
  types: Types[],
  customInfo: {
    wx?:ShareInfo,
    wxline?:ShareInfo,
    qq?:ShareInfo,
    qzone?:ShareInfo,
    sina?:ShareInfo,
  }
}

