# 學習記錄
by 雨蒼 < billy3321 -at- gmail.com >

這邊記錄我怎麼練習使用ReactJS來撰寫一個小專案。

這個小網頁，原先是希望可以在選擇社運場合做的事情以後，就會跳出相應的法條。


## 學習使用ReactJS

我先參考 [這個網頁](https://facebook.github.io/react/docs/thinking-in-react.html)（[中文翻譯版](http://reactjs.cn/react/docs/thinking-in-react.html)），學習如何把網頁用React的方式重新思考一次。

我把網站分為問題表（questionTable）、問題列（questionrRow）、顯示結果按鈕（result）、答案表（answerTable）、答案列（answerRow）一共五個component，並用一個大的component包起來，讓最外層的component來處理狀態的變化。

我先使用單網頁的方式，從cdn載入JS，讓網頁可以運作。

[當時的網頁](https://github.com/JRF-tw/law_in_social_movement/blob/33ebbd92aeafd7bc75ffef2ff780d336b31b2a32/index.html)


## Webpack、ES2015與程式碼結構

完成網頁後，接著我需要進一步把網站以結構化的方式架構起來，並且轉移到ES2015。

我參考的template是 [這個](https://github.com/Ositoozy/react-example-es2015) 。

我把網頁修改成Webpack可以運作的方式，並且把語法轉為ES2015的語法。

[結果請點此](https://github.com/JRF-tw/law_in_social_movement/tree/61e0a038aab781594553248a64089b9e1b43fcef)


## Redux

接著，我把原先由外層component處理的state，修改為使用redux來處理資料流。

我參考的文章是 [Redux的官方文件](http://rackt.github.io/redux/) （[中文翻譯](http://camsong.github.io/redux-in-chinese/)）

當時做完的網站原始碼 [在此](https://github.com/JRF-tw/law_in_social_movement/tree/72300e8ade54d2500bebd9bd6e9ee7265c895790)

接下來，是請 @rschiang 幫忙使用css美化。美化後的成果 [在此](https://github.com/JRF-tw/law_in_social_movement/tree/c71cf4ab9bc89f85f0b552893b57e4e58a8fd469)


## Universal

接著，我想要挑戰 isomorphic，把網頁預先render出來，避免SEO的問題。

當時我有詢問過coodoo，也做了一些 [問答](https://gist.github.com/coodoo/59891964b06a603e2dc8) ，coodoo當時建議我參考他的範例，不過我稍微瀏覽過幾個以後，選擇了@erikras的 [範例](https://github.com/erikras/react-redux-universal-hot-example) 作為template。


其中這邊有兩個坑，大概卡了我兩天的時間。

這個坑的檔案[在此](https://github.com/JRF-tw/law_in_social_movement/blob/master/src/universalRouter.js)

第一個，react router的版本從0.13.3升級到1.0.0-beta2，這個版本的升級修改了 `Router.run` 的參數。這跟之前使用的不太一樣。

第二個， `children={routes}`這邊吃到的routes有問題，一直會跳錯。後來修改了routes成為下面這樣才解決了問題：

後來我修改了 [routes.js](https://github.com/JRF-tw/law_in_social_movement/blob/master/src/views/routes.js) 檔案：

```javascript
<Route>
  <Route handler={ App } path="/" />
</Route>
```

修改為

```javascript
<Route path="/" component={App}/>
```

才解決這個問題。

另外，這個template使用的css是inline css，他有 [特別解釋為何要這樣做](https://github.com/erikras/react-redux-universal-hot-example/blob/master/docs/InlineStyles.md) ；不過我的網站也就一個css，而且對這個原理還不熟悉，所以我選擇了使用傳統webpack的方式，把css包入javascript。所以我的webpack loader段多了這個：

```javascript
{ test: /\.css$/, loader: 'style!css' }
```

以把CSS包入Javascript。


## Forever，Daemonlized and use Nginx

最後，我要把App放上Server讓他提供服務，所以我選擇了forever來提供服務。

首先，先安裝forever：

```shell
npm install -g forever
```

然後添加一個/etc/init.d/forever來提供服務：

```shell
#!/bin/bash
#
# node      Start up node server daemon
#
# chkconfig: 345 85 15
# description: Forever for Node.js
#

# variable for run forever
APP_PATH=$WHERE_YOUR_APP
export NODE_PATH="./src"
DEAMON="./bin/server.js"
COMMAND="npm run start"
LOG=$WHERE_YOUR_APP/log
PID=$WHERE_YOUR_APP/pid/forever.pid

# variable for nodejs
export PORT=8080
export NODE_ENV=production

cd $APP_PATH

case "$1" in
    start)
        # npm run build
        /usr/local/node/bin/forever start -l $LOG/forever.log -o $LOG/forever_out.log -e $LOG/forever_err.log --pidFile $PID -a $DEAMON
        ;;
    stop)
        /usr/local/node/bin/forever stop --pidFile $PID $DEAMON
        ;;
    stopall)
        /usr/local/node/bin/forever stopall --pidFile $PID
        ;;
    restartall)
        /usr/local/node/bin/forever restartall --pidFile $PID
        ;;
    reload|restart)
        /usr/local/node/bin/forever stop --pidFile $PID $DEAMON
        npm run build
        /usr/local/node/bin/forever start -l $LOG/forever.log -o $LOG/forever_out.log -e $LOG/forever_err.log --pidFile $PID -a $DEAMON
        # /usr/local/node/bin/forever restart -l $LOG/forever.log -o $LOG/forever_out.log -e $LOG/forever_err.log --pidFile $PID -a $DEAMON
        ;;
    list)
        /usr/local/node/bin/forever list
        ;;
    *)
        echo "Usage: /etc/init.d/forever {start|stop|restart|reload|stopall|restartall|list}"
        exit 1
        ;;
esac
exit 0
```

新增以後，可以先添加執行屬性：

```shell
chmod +x /etc/init.d/forever
```

然後加入啟動清單：

```shell
update-rc.d forever defaults
```

並且在 /etc/nginx/sites-available/ 新增以下檔案，並且symbolic link到/etc/nginx/sites-enable/

```shell
server {
  listen 80;
  listen [::]:80;

    client_max_body_size       500m;
    client_body_buffer_size    128k;

  # Make site accessible from http://localhost/
  server_name $SERVER_NAME;

  location / {
    proxy_pass http://localhost:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

最後開啟服務：

```shell
/etc/init.d/forever start
/etc/init.d/nginx restart
```

這樣網站就成功運行囉！

有興趣的朋友可以打開 [這裡](http://protest.jrf.org.tw) 參考。
