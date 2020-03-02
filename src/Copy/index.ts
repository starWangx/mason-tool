export function Copy (text:string,callback?:(arg0:boolean)=>void) {
  var input = document.createElement('input');
  input.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  var res = document.execCommand('copy');
  document.body.removeChild(input);
  callback && callback(res);
}

export default Copy;