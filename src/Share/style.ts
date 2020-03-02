export default {
  cssText: `
  .m-share-mask {
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2147483646;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
  }
  .m-share-list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
  }
  .m-share-list img{
    width:40px;
  }
  
  #m-share-actionSheet {
    margin: 0;
    padding: 0;
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 2147483647;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px 20px;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: -webkit-transform .2s ease-in;
    transition: transform .2s ease-in;
  }
  #m-share-actionSheet div {
    margin: 0;
    padding: 0;
  }
  #m-share-actionSheet .m-share-sheet-title {
    font-size: 12px;
    color: #ababab;
    text-align: center;
    margin:10px 0 0 0;
  }
  #m-share-actionSheet .m-share-flex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
  #m-share-actionSheet .m-share-flex>.m-share-cell {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    padding: 0!important;
    position: relative;
    text-align: center;
  }
  #m-share-actionSheet .m-share-iconfont {
    margin: 0;
  }
  .m-share-tips {
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 3px;
    color: #fff;
    right: 20px;
    z-index: 2147483647;
    // background-color: #000;
  }
  .m-share-tips .m-share-tips-w {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 18px;
    position: relative;
    right: 1px;
    top: 7px;
  }
  .m-share-tips .m-share-tips-w .m-share-tips-p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 18px;
  }
  .m-share-tips-arrow {
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 54px;
    height: 55px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABuCAMAAAD1cAb0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3HoUvYAAAA9dFJOUwDIjg4CBPr98Av39C4GghgTQOAnv6h97AjcN2dGH+gcbxAVz1WWIqGvuko0tNP+5eN42YhaUF/WmsQ8Y8we7g2hAAAEn0lEQVQYGe3AVXbjSAAF0CcuMZllZnabE6ff/rc1Lqtp5rdVOfORiy9fvnz5nxvg8wyPBT7LY++LhYtPkdw92rXcxCewjivSrnXwCaxO4ZH87uIT5Os+STtKoZ7Z6fNJLFv4BDVKfjqGereM0v0M9QaRoCRSKGflW75kF6h3Zam/MaHaZudRck5dqBZv2yy1BxbUai0mLO1rBRS7zWz+cEigVnoW/GFfv0GpXpTxl0MPKvWiGn9bdaHQ6FjjHyYB1GkNF/yDc+pAnZvu8U+TIIQq6VmQwudPezGFKmmUkdrSoSTae7IZuFBjHmXke/yNktAzkmJoQol4oTn+yWhQct5nO5v0uy5UcOsTTraD+dLn016LNZL+2YUC7ptm3+uxNV1R8jf5xCZt3YUCtbadRTmMK1/01GjYpDObo2rhuEE2jw9gc6DUfjNCvUnapzEqZm0+yMM0BYxZm1IzALoZyXqOaoXdi2+LILZgdnS+3ACkGekceqjWbdhsag88halPqXY1gDxySC0wUaXrTIj6BZKr2Xzy3+YA3K1PsrBQoWDVb0YFXo6aw6f+EE/jq0/6QxfVGUwyMe2EkPKhT0kb4cmM7iSjMSozyLJv3cSCFMY7SqJI8GQNTiTrLqpi6dl7ARMvZo2St73gJdAcOnqOyqwvBX667RyS+2bdhWTGNZucJKiOYeGHgd6k1DZQGtcdOrM1FLC6S0reOkHJ0Gx6kxgKGFe+zKYmSvOZQ0fPocCgT+m0MPBD0ia91RjVGy/7fLLbAX5aR3s6tR4q1zpubUoN/JJopKPFJqrWOXuU3hITP+WRz714oGpu2qeUdQf4xbr2yeYlQcVa75R8/YHfzM3MtrUGqtagZK+O+FNrptXqLioWTPZ88pcu/sW9dBJULH9rUxI9/FeIihnH75T8aQjVrI83vgxzC6oFHx6l1bQF1QbrPqWsMYBqYfKdkr9IoV5EyXtvQL0GJUeru1AuZWkXQ7me4IvoQTkjYymFckaNpQbUq7GkmVCuwdIkMKBaylJ/HUC1nuCLPw2g2HiesTTsWFCrtzmwFG1aUCvpTliKYEKt0a3OUg2qjRoLvrTbBhRzFwuPUraNoVartd3ZlLRtALXcje45lDK9C7VGRYOlfpFCLXdR9yiJZieAUklSu9uUTqeHAaVGRZ2l9iKAUr3edskX73DpQKlH91vTobRr53MoFI47s4ylpZ5DodC9rL8JSnb7fR1DoXFcX3oszd6SFpSxRvGxLhxKTV+fGlCmhaL4nvHF7utTI4QilpV0dU1wT9LhbtfZQJWWMS2W77Qp+X29mMOEEta8NzyfhGNTEoeoMFwoEJrjXqo3DhPalGyxPD/GIf5WksCECRMlE61Rso7P0/u7ECyJg66P5jDxt+LGbHhbB904H82D3nUzvX4s6tru4LHk+dpkuBm0TPw9a6p5XibuWW21qi9PK+/OzLYdPjmO53ur3frozlGN8NHImsJ2bDrc8zeHTbHQ9HN3MDZRmTAdfNxW2/62eRdS29aaK205e/voBrEbomKW1XI7eRFE3eijMdQ7UV4kc8NIYEKZEC6SMAxh4sv/2T8XLefQYLd95QAAAABJRU5ErkJggg==');
    background-size: 100%;
  }
  .m-share-tips-bottom {
    font-family: "PingFang SC",Arial,"\\5FAE\\8F6F\\96C5\\9ED1",Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    font-size: 18px;
    position: fixed;
    color: #fff;
    top: 50%;
    left: 50%;
    width: 100%;
    z-index: 2147483647;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    width: 240px;
    line-height: 1.72;
  }
  @font-face {font-family: "m-share-iconfont";
    src: url('data:application/x-font-ttf;charset=utf-8;base64,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') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  }
  .m-share-iconfont {
    font-family:"m-share-iconfont" !important;
    font-size:26px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 5px;
    margin:0 0 0 10px;
  }
  .m-share-iconfont:first-child {
    margin: 0;
  }
  .m-share-iconfont-wx {
    color: #7bc549;
    border: 1px solid #7bc549;
    border-radius: 100%;
  }
  .m-share-iconfont-wx:active {
    background: #7bc549;
    color: #fff;
  }
  .m-share-iconfont-wx:before {
    content: "\\e61e";
  }
  .m-share-iconfont-sina {
    color: #ff763b;
    border: 1px solid #ff763b;
    border-radius: 100%;
  }
  .m-share-iconfont-sina:active {
    background: #ff763b;
    color: #fff;
  }
  .m-share-iconfont-sina:before {
    content: "\\e641";
  }
  .m-share-iconfont-qzone {
    color: #fdbe3d;
    border: 1px solid #fdbe3d;
    border-radius: 100%;
  }
  .m-share-iconfont-qzone:active {
    background: #fdbe3d;
    color: #fff;
  }
  .m-share-iconfont-qzone:before {
    content: "\\e728";
  }
  .m-share-iconfont-qq {
    color: #56b6e7;
    border: 1px solid #56b6e7;
    border-radius: 100%;
  }
  .m-share-iconfont-qq:active {
    background: #56b6e7;
    color: #fff;
  }
  .m-share-iconfont-qq:before {
    content: "\\e630";
  }
  .m-share-iconfont-wxline {
    color: #33b045;
    border: 1px solid #33b045;
    border-radius: 100%;
  }
  .m-share-iconfont-wxline:active {
    background: #33b045;
    color: #fff;
  }
  .m-share-iconfont-wxline:before {
    content: "\\e6e9";
  }
  .m-share-iconfont-menu {
    font-size: 12px;
  }
  .m-share-iconfont-menu:before {
    content: "\\e67e";
  }
  .m-share-iconfont-dots {
    font-size: 25px;
    color: #fff;
  }
  .m-share-iconfont-dots:before {
    content: "\\e656";
  }
  .m-share-iconfont-share {
    font-size: 17px;
    color: #fff;
    margin: 0;
  }
  .m-share-iconfont-share:before {
    content: "\\e6ae";
  }
  `
};