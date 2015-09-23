
export const questionData = [
  { question: '我前往抗爭現場。', score: 'a', done: false },
  { question: '我經過鎮暴警察的盾牌前面。', score: 'b', done: false },
  { question: '我和警察發生推擠。', score: 'c', done: false },
  { question: '警察罵我，我罵回去。', score: 'd', done: false },
  { question: '警察抓我的時候我掙扎抗拒。', score: 'e', done: false },
  { question: '我被警察攻擊，並因此倒下。', score: 'f', done: false },
  { question: '我和大家一起罵政府機關。', score: 'g', done: false },
  { question: '我和大家一起罵政府機關的官員。', score: 'h', done: false },
  { question: '我拿著麥克風，對大家宣講。', score: 'i', done: false },
  { question: '我拿著麥克風，協助控制場面。', score: 'j', done: false },
  { question: '我和大家一起衝進政府機關。', score: 'k', done: false },
  { question: '我和大家圍著政府機關靜坐抗議。', score: 'l', done: false },
  { question: '我不小心破壞了政府機關的財物。', score: 'm', done: false },
  { question: '我在臉書上發文，請大家到現場幫忙。', score: 'n', done: false },
  { question: '警察舉牌三次後，群眾不想離開。', score: 'o', done: false },
  { question: '政府官員要離開，我擋在車子前面阻擋。', score: 'p', done: false },
  { question: '我把自己綁在路中間，希望官員的車子能在前面停下來。', score: 'q', done: false },
  { question: '建築物即將被強制拆除，我待在建築物內部，要阻止建築物被拆掉。', score: 'r', done: false },
  { question: '我對行政機關灑紙錢抗議。', score: 's', done: false },
  { question: '我對行政機關丟擲雞蛋。', score: 't', done: false },
  { question: '我對行政機關潑漆。', score: 'u', done: false },
  { question: '我在抗議現場焚燒中華民國國旗。', score: 'v', done: false },
  { question: '我把該部會匾額拆下來踩踏。', score: 'w', done: false },
  { question: '我合成靈堂照片諷刺政治人物。', score: 'x', done: false },
  { question: '為了衝進政府機關，我破壞拒馬與大門。', score: 'y', done: false }
];

export const answerData = [
  {
    answer: '刑法§135條，妨礙公務罪。',
    detail: '對於公務員依法執行職務時，施強暴脅迫者，處三年以下有期徒刑、拘役或三百元以下罰金。<br /><br />意圖使公務員執行一定之職務或妨害其依法執行一定之職務或使公務員辭職，而施強暴脅迫者，亦同。<br /><br />犯前二項之罪，因而致公務員於死者，處無期徒刑或七年以上有期徒刑；致重傷者，處三年以上、十年以下有期徒刑。',
    calculate: (state) => { return ( state.a || state.b || state.c || state.d || state.e || state.f || state.r ) ? true : false; },
    key: 'criminal135',
    references: [
      {
        name: '侵入行政院追加起訴開庭 沒踏進廣場都有事？',
        link: 'http://pnn.pts.org.tw/main/2015/07/22/%E4%BE%B5%E5%85%A5%E8%A1%8C%E6%94%BF%E9%99%A2%E8%BF%BD%E5%8A%A0%E8%B5%B7%E8%A8%B4%E9%96%8B%E5%BA%AD-%E6%B2%92%E8%B8%8F%E9%80%B2%E5%BB%A3%E5%A0%B4%E9%83%BD%E6%9C%89%E4%BA%8B%EF%BC%9F/'
      },
      {
        name: '「妨害公務」再逞威 華光擋拆五被告判拘役',
        link: 'http://pnn.pts.org.tw/main/2015/04/08/%E3%80%8C%E5%A6%A8%E5%AE%B3%E5%85%AC%E5%8B%99%E3%80%8D%E5%86%8D%E9%80%9E%E5%A8%81-%E8%8F%AF%E5%85%89%E6%93%8B%E6%8B%86%E4%BA%94%E8%A2%AB%E5%91%8A%E5%88%A4%E6%8B%98%E5%BD%B9/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '自訴國家暴力 26人遭檢追加起訴',
        link: 'http://pnn.pts.org.tw/main/2015/05/06/%E3%80%90%E6%94%BF%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E8%87%AA%E8%A8%B4%E5%9C%8B%E5%AE%B6%E6%9A%B4%E5%8A%9B-%E9%81%AD%E6%AA%A2%E6%96%B9%E8%BF%BD%E5%8A%A0%E8%B5%B7%E8%A8%B4/'
      },
      {
        name: '侵入政院案被告-法庭籲挽救司法獨立性',
        link: 'http://pnn.pts.org.tw/main/2015/03/25/%E3%80%90324%E9%80%B1%E5%B9%B4%E3%80%91%E4%BE%B5%E5%85%A5%E6%94%BF%E9%99%A2%E6%A1%88%E8%A2%AB%E5%91%8A-%E6%B3%95%E5%BA%AD%E7%B1%B2%E6%8C%BD%E6%95%91%E5%8F%B8%E6%B3%95%E7%8D%A8%E7%AB%8B%E6%80%A7/'
      },
      {
        name: '離開大廳之後',
        link: 'http://pnn.pts.org.tw/main/2015/03/24/%E3%80%90%E7%B5%90%E7%97%82324%E3%80%91%E9%9B%A2%E9%96%8B%E5%A4%A7%E5%BB%B3%E4%B9%8B%E5%BE%8C/'
      },
      {
        name: '路過中正一 洪崇晏等人北檢應訊',
        link: 'http://pnn.pts.org.tw/main/2014/08/28/%E8%B7%AF%E9%81%8E%E4%B8%AD%E6%AD%A3%E4%B8%80-%E6%B4%AA%E5%B4%87%E6%99%8F%E7%AD%89%E4%BA%BA%E5%8C%97%E6%AA%A2%E6%87%89%E8%A8%8A/'
      },
      {
        name: '砸雞蛋抗議 護苗7捍青遭公訴',
        link: 'http://news.ltn.com.tw/news/life/paper/757029'
      },
      {
        name: '黃國昌問檢方：是否爭執馬政府毀憲亂政？',
        link: 'http://pnn.pts.org.tw/main/2015/04/17/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E9%BB%83%E5%9C%8B%E6%98%8C%E5%95%8F%E6%AA%A2%E6%96%B9%EF%BC%9A%E6%98%AF%E5%90%A6%E7%88%AD%E5%9F%B7%E9%A6%AC%E6%94%BF%E5%BA%9C%E6%AF%80/'
      }
    ]
  }, {
    answer: '刑法§136條，聚眾妨礙公務罪。',
    detail: '公然聚眾犯前條之罪者，在場助勢之人，處一年以下有期徒刑、拘役或三百元以下罰金。首謀及下手實施強暴脅迫者，處一年以上、七年以下有期徒刑。',
    calculate: (state) => { return (( state.a || state.b || state.c || state.d || state.e || state.f || state.r ) && ( state.i || state.j )) ? true : false; },
    key: 'criminal136',
    references: [
      {
        name: '衝占行政院 陳廷豪5萬交保',
        link: 'http://www.cna.com.tw/news/firstnews/201403315010-1.aspx'
      }
    ]
  }, {
    answer: '刑法§140條侮辱公務人員、侮辱公署罪',
    detail: '於公務員依法執行職務時，當場侮辱，或對於其依法執行之職務公然侮辱者，處六月以下有期徒刑、拘役或一百元以下罰金。<br /><br />對於公署公然侮辱者亦同。',
    calculate: (state) => { return ( state.d || state.g || state.h || state.s || state.t || state.u || state.w ) ? true : false; },
    key: 'criminal140',
    references: [
      {
        name: '砸雞蛋抗議 護苗7捍青遭公訴',
        link: 'http://news.ltn.com.tw/news/life/paper/757029'
      },
      {
        name: '路過中正一 洪崇晏等人北檢應訊',
        link: 'http://pnn.pts.org.tw/main/2014/08/28/%E8%B7%AF%E9%81%8E%E4%B8%AD%E6%AD%A3%E4%B8%80-%E6%B4%AA%E5%B4%87%E6%99%8F%E7%AD%89%E4%BA%BA%E5%8C%97%E6%AA%A2%E6%87%89%E8%A8%8A/'
      },
      {
        name: '公投盟：馬英九才是318聚眾首謀',
        link: 'http://pnn.pts.org.tw/main/2015/03/26/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E5%85%AC%E6%8A%95%E7%9B%9F%EF%BC%9A%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%89%8D%E6%98%AF318%E8%81%9A%E7%9C%BE%E9%A6%96%E8%AC%80/'
      },
      {
        name: '佔領忠孝西路首謀？ 北院判蔡丁貴、洪崇晏無罪',
        link: 'http://pnn.pts.org.tw/main/2015/08/18/%E4%BD%94%E9%A0%98%E5%BF%A0%E5%AD%9D%E8%A5%BF%E9%A6%96%E8%AC%80%EF%BC%9F-%E8%94%A1%E4%B8%81%E8%B2%B4%E3%80%81%E6%B4%AA%E5%B4%87%E6%99%8F%E7%84%A1%E7%BD%AA/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '抗議遭驅離 大埔再爆衝突',
        link: 'http://www.chinatimes.com/newspapers/20130720000884-260102'
      }
    ]
  }, {
    answer: '刑法§153煽惑他人犯罪',
    detail: '以文字、圖畫、演說或他法，公然為左列行為之一者，處二年以下有期徒刑、拘役或一千元以下罰金：<br /><br />一、煽惑他人犯罪者。<br /><br />二、煽惑他人違背法令，或抗拒合法之命令者。',
    calculate: (state) => { return ( state.i || state.j || state.n ) ? true : false; },
    key: 'criminal153',
    references: [
      {
        name: '政院：寬容對待太陽花學運 但不撤告',
        link: 'http://www.chinatimes.com/newspapers/20150211000374-260102'
      },
      {
        name: '「妨害公務」再逞威 華光擋拆五被告判拘役',
        link: 'http://pnn.pts.org.tw/main/2015/04/08/%E3%80%8C%E5%A6%A8%E5%AE%B3%E5%85%AC%E5%8B%99%E3%80%8D%E5%86%8D%E9%80%9E%E5%A8%81-%E8%8F%AF%E5%85%89%E6%93%8B%E6%8B%86%E4%BA%94%E8%A2%AB%E5%91%8A%E5%88%A4%E6%8B%98%E5%BD%B9/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '衝占行政院 陳廷豪5萬交保',
        link: 'http://www.cna.com.tw/news/firstnews/201403315010-1.aspx'
      },
      {
        name: '公投盟：馬英九才是318聚眾首謀',
        link: 'http://pnn.pts.org.tw/main/2015/03/26/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E5%85%AC%E6%8A%95%E7%9B%9F%EF%BC%9A%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%89%8D%E6%98%AF318%E8%81%9A%E7%9C%BE%E9%A6%96%E8%AC%80/'
      },
      {
        name: '黃國昌問檢方：是否爭執馬政府毀憲亂政？',
        link: 'http://pnn.pts.org.tw/main/2015/04/17/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E9%BB%83%E5%9C%8B%E6%98%8C%E5%95%8F%E6%AA%A2%E6%96%B9%EF%BC%9A%E6%98%AF%E5%90%A6%E7%88%AD%E5%9F%B7%E9%A6%AC%E6%94%BF%E5%BA%9C%E6%AF%80/'
      }
    ]
  }, {
    answer: '刑法§306侵入建物罪',
    detail: '無故侵入他人住宅、建築物或附連圍繞之土地或船艦者，處一年以下有期徒刑、拘役或三百元以下罰金。<br /><br />無故隱匿其內，或受退去之要求而仍留滯者，亦同。',
    calculate: (state) => { return ( state.k || state.l ) ? true : false; },
    key: 'criminal306',
    references: [
      {
        name: '黃國昌問檢方：是否爭執馬政府毀憲亂政？',
        link: 'http://pnn.pts.org.tw/main/2015/04/17/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E9%BB%83%E5%9C%8B%E6%98%8C%E5%95%8F%E6%AA%A2%E6%96%B9%EF%BC%9A%E6%98%AF%E5%90%A6%E7%88%AD%E5%9F%B7%E9%A6%AC%E6%94%BF%E5%BA%9C%E6%AF%80/'
      },
      {
        name: '法官問視障者：警察在你眼中這麼沒有法治觀念？',
        link: 'http://pnn.pts.org.tw/main/2015/04/07/%E3%80%90324%E6%94%BF%E9%99%A2%E9%A9%85%E9%9B%A2%E3%80%91%E6%B3%95%E5%AE%98%E5%95%8F%E8%A6%96%E9%9A%9C%E8%80%85%EF%BC%9A%E8%AD%A6%E5%AF%9F%E5%9C%A8%E4%BD%A0%E7%9C%BC%E4%B8%AD%E9%80%99%E9%BA%BC/'
      },
      {
        name: '拒交保迫檢方退讓-三記者無保釋放',
        link: 'http://pnn.pts.org.tw/main/2015/07/24/%E3%80%90%E5%8F%8D%E8%AA%B2%E7%B6%B1%E5%A4%96%E5%82%B3%E3%80%91%E6%8B%92%E4%BA%A4%E4%BF%9D%E8%BF%AB%E6%AA%A2%E6%96%B9%E9%80%80%E8%AE%93-%E4%B8%89%E8%A8%98%E8%80%85%E7%84%A1%E4%BF%9D%E9%87%8B%E6%94%BE/'
      },
      {
        name: '政院：寬容對待太陽花學運 但不撤告',
        link: 'http://www.chinatimes.com/newspapers/20150211000374-260102'
      },
      {
        name: '那一天 在場的法律人可能都在流淚',
        link: 'http://pnn.pts.org.tw/main/2014/03/31/%E9%82%A3%E4%B8%80%E5%A4%A9-%E5%9C%A8%E5%A0%B4%E7%9A%84%E6%B3%95%E5%BE%8B%E4%BA%BA%E5%8F%AF%E8%83%BD%E9%83%BD%E5%9C%A8%E6%B5%81%E6%B7%9A/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '侵入行政院追加起訴開庭 沒踏進廣場都有事？',
        link: 'http://pnn.pts.org.tw/main/2015/07/22/%E4%BE%B5%E5%85%A5%E8%A1%8C%E6%94%BF%E9%99%A2%E8%BF%BD%E5%8A%A0%E8%B5%B7%E8%A8%B4%E9%96%8B%E5%BA%AD-%E6%B2%92%E8%B8%8F%E9%80%B2%E5%BB%A3%E5%A0%B4%E9%83%BD%E6%9C%89%E4%BA%8B%EF%BC%9F/'
      },
      {
        name: '衝占行政院 陳廷豪5萬交保',
        link: 'http://www.cna.com.tw/news/firstnews/201403315010-1.aspx'
      }
    ]
  }, {
    answer: '刑法§354毀損罪',
    detail: '毀棄、損壞前二條以外之他人之物或致令不堪用，足以生損害於公眾或他人者，處二年以下有期徒刑、拘役或五百元以下罰金。',
    calculate: (state) => { return ( state.m || state.u || state.y ) ? true : false; },
    key: 'criminal354',
    references: [
      {
        name: '趴蔡正元座車2公里　反核男緩起訴',
        link: 'http://www.appledaily.com.tw/realtimenews/article/new/20150608/625146/'
      },
      {
        name: '拒交保迫檢方退讓-三記者無保釋放',
        link: 'http://pnn.pts.org.tw/main/2015/07/24/%E3%80%90%E5%8F%8D%E8%AA%B2%E7%B6%B1%E5%A4%96%E5%82%B3%E3%80%91%E6%8B%92%E4%BA%A4%E4%BF%9D%E8%BF%AB%E6%AA%A2%E6%96%B9%E9%80%80%E8%AE%93-%E4%B8%89%E8%A8%98%E8%80%85%E7%84%A1%E4%BF%9D%E9%87%8B%E6%94%BE/'
      },
      {
        name: '政院：寬容對待太陽花學運 但不撤告',
        link: 'http://www.chinatimes.com/newspapers/20150211000374-260102'
      },
      {
        name: '那一天 在場的法律人可能都在流淚',
        link: 'http://pnn.pts.org.tw/main/2014/03/31/%E9%82%A3%E4%B8%80%E5%A4%A9-%E5%9C%A8%E5%A0%B4%E7%9A%84%E6%B3%95%E5%BE%8B%E4%BA%BA%E5%8F%AF%E8%83%BD%E9%83%BD%E5%9C%A8%E6%B5%81%E6%B7%9A/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '抗議遭驅離 大埔再爆衝突',
        link: 'http://www.chinatimes.com/newspapers/20130720000884-260102'
      },
      {
        name: '砸雞蛋抗議 護苗7捍青遭公訴',
        link: 'http://news.ltn.com.tw/news/life/paper/757029'
      },
      {
        name: '衝占行政院 陳廷豪5萬交保',
        link: 'http://www.cna.com.tw/news/firstnews/201403315010-1.aspx'
      }
    ]
  }, {
    answer: '集遊法§29集會遊行不解散之首謀',
    detail: '集會、遊行經該管主管機關命令解散而不解散，仍繼續舉行經制止而不遵從，首謀者處二年以下有期徒刑或拘役。',
    calculate: (state) => { return (( state.i || state.j ) && state.o ) ? true : false; },
    key: 'assembly29',
    references: [
      {
        name: '公投盟：馬英九才是318聚眾首謀',
        link: 'http://pnn.pts.org.tw/main/2015/03/26/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E5%85%AC%E6%8A%95%E7%9B%9F%EF%BC%9A%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%89%8D%E6%98%AF318%E8%81%9A%E7%9C%BE%E9%A6%96%E8%AC%80/'
      },
      {
        name: '佔領忠孝西路首謀？ 北院判蔡丁貴、洪崇晏無罪',
        link: 'http://pnn.pts.org.tw/main/2015/08/18/%E4%BD%94%E9%A0%98%E5%BF%A0%E5%AD%9D%E8%A5%BF%E9%A6%96%E8%AC%80%EF%BC%9F-%E8%94%A1%E4%B8%81%E8%B2%B4%E3%80%81%E6%B4%AA%E5%B4%87%E6%99%8F%E7%84%A1%E7%BD%AA/'
      }
    ]
  }, {
    answer: '集遊法§30集會遊行侮辱公署罪',
    detail: '集會﹑遊行時，以文字﹑圖畫﹑演說或他法，侮辱﹑誹謗公署﹑依法執行職務之公務員或他人者，處二年以下有期徒刑﹑拘役或科或併科新台幣六萬元以下罰金。',
    calculate: (state) => { return (( state.d || state.g || state.h || state.s || state.t || state.u || state.w ) && ( state.i || state.j )) ? true : false; },
    key: 'assembly30',
    references: [
      {
        name: '砸雞蛋抗議 護苗7捍青遭公訴',
        link: 'http://news.ltn.com.tw/news/life/paper/757029'
      },
      {
        name: '路過中正一 洪崇晏等人北檢應訊',
        link: 'http://pnn.pts.org.tw/main/2014/08/28/%E8%B7%AF%E9%81%8E%E4%B8%AD%E6%AD%A3%E4%B8%80-%E6%B4%AA%E5%B4%87%E6%99%8F%E7%AD%89%E4%BA%BA%E5%8C%97%E6%AA%A2%E6%87%89%E8%A8%8A/'
      },
      {
        name: '公投盟：馬英九才是318聚眾首謀',
        link: 'http://pnn.pts.org.tw/main/2015/03/26/%E3%80%90%E7%AB%8B%E9%99%A2%E4%BD%94%E9%A0%98%E6%A1%88%E3%80%91%E5%85%AC%E6%8A%95%E7%9B%9F%EF%BC%9A%E9%A6%AC%E8%8B%B1%E4%B9%9D%E6%89%8D%E6%98%AF318%E8%81%9A%E7%9C%BE%E9%A6%96%E8%AC%80/'
      },
      {
        name: '佔領忠孝西路首謀？ 北院判蔡丁貴、洪崇晏無罪',
        link: 'http://pnn.pts.org.tw/main/2015/08/18/%E4%BD%94%E9%A0%98%E5%BF%A0%E5%AD%9D%E8%A5%BF%E9%A6%96%E8%AC%80%EF%BC%9F-%E8%94%A1%E4%B8%81%E8%B2%B4%E3%80%81%E6%B4%AA%E5%B4%87%E6%99%8F%E7%84%A1%E7%BD%AA/'
      },
      {
        name: '太陽花學運 北檢起訴黃國昌、林飛帆等118人',
        link: 'http://www.chinatimes.com/realtimenews/20150210002370-260402'
      },
      {
        name: '抗議遭驅離 大埔再爆衝突',
        link: 'http://www.chinatimes.com/newspapers/20130720000884-260102'
      }
    ]
  }, {
    answer: '刑法§304強制罪',
    detail: '以強暴、脅迫使人行無義務之事或妨害人行使權利者，處三年以下有期徒刑、拘役或三百元以下罰金。<br /><br />前項之未遂犯罰之。',
    calculate: (state) => { return ( state.p || state.q ) ? true : false; },
    key: 'criminal304',
    references: [
      {
        name: '烏來擋車案被告：更想阻擋政府對中國無所不開的路',
        link: 'http://pnn.pts.org.tw/main/2015/03/03/%E3%80%90%E5%BC%B5%E5%BF%97%E8%BB%8D%E9%A4%98%E6%B3%A2%E3%80%91%E7%83%8F%E4%BE%86%E6%93%8B%E8%BB%8A%E6%A1%88%E8%A2%AB%E5%91%8A%EF%BC%9A%E6%9B%B4%E6%83%B3%E9%98%BB%E6%93%8B%E6%94%BF%E5%BA%9C%E5%B0%8D/'
      },
      {
        name: '衝占行政院 陳廷豪5萬交保',
        link: 'http://www.cna.com.tw/news/firstnews/201403315010-1.aspx'
      }
    ]
  }, {
    answer: '刑法§185妨害公眾往來安全罪',
    detail: '損壞或壅塞陸路、水路、橋樑或其他公眾往來之設備或以他法致生往來之危險者，處五年以下有期徒刑，拘役或五百元以下罰金。<br /><br />因而致人於死者，處無期徒刑或七年以上有期徒刑。致重傷者，處三年以上十年以下有期徒刑。<br /><br />第一項之未遂犯罰之。',
    calculate: (state) => { return ( state.q ) ? true : false; },
    key: 'criminal185',
    references: [
      {
        name: '烏來擋車案被告：更想阻擋政府對中國無所不開的路',
        link: 'http://pnn.pts.org.tw/main/2015/03/03/%E3%80%90%E5%BC%B5%E5%BF%97%E8%BB%8D%E9%A4%98%E6%B3%A2%E3%80%91%E7%83%8F%E4%BE%86%E6%93%8B%E8%BB%8A%E6%A1%88%E8%A2%AB%E5%91%8A%EF%BC%9A%E6%9B%B4%E6%83%B3%E9%98%BB%E6%93%8B%E6%94%BF%E5%BA%9C%E5%B0%8D/'
      }
    ]
  }, {
    answer: '刑法§309公然侮辱罪',
    detail: '公然侮辱人者，處拘役或三百元以下罰金。<br /><br />以強暴犯前項之罪者，處一年以下有期徒刑、拘役或五百元以下罰金。',
    calculate: (state) => { return ( state.x ) ? true : false; },
    key: 'criminal309',
    references: [
      {
        name: '靈堂照諷劉政鴻 無罪',
        link: 'http://www.appledaily.com.tw/appledaily/article/headline/20140418/35774519/'
      }
    ]
  }, {
    answer: '刑法§160侮辱國旗、國徽及國父遺像罪',
    detail: '意圖侮辱中華民國，而公然損壞、除去或污辱中華民國之國徽、國旗者，處一年以下有期徒刑、拘役或三百元以下罰金。<br /><br />意圖侮辱創立中華民國之孫先生，而公然損壞、除去或污辱其遺像者亦同。',
    calculate: (state) => { return ( state.v ) ? true : false; },
    key: 'criminal160',
    references: [
      {
        name: '燒毀國旗拒易科罰金 王獻極發監執行',
        link: 'http://news.ltn.com.tw/news/politics/paper/437706'
      }
    ]
  }
];

export const defaultScore = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
  g: false,
  h: false,
  i: false,
  j: false,
  k: false,
  l: false,
  m: false,
  n: false,
  o: false,
  p: false,
  q: false,
  r: false,
  s: false,
  t: false,
  u: false,
  v: false,
  w: false,
  x: false,
  y: false,
  z: false
};

export const readme = `<p>這些狀況，很多都不是危言聳聽，而是司改會收集案件後，整理出來的狀況。</p>
<p>當然，不是所有的人都會被起訴，一般來說，知名社運者被起訴的機會較高。但我們仍想提醒大家，在目前的台灣司法下，前往社運場合通常仍有相當的法律風險，尤其仍有衝突可能的場合。</p>
<p>而且，有些起訴社運者的檢察官，還可能更有機會升官。我們想提醒大家，在現在的台灣，司法很多時候仍對當權者相對友善。</p>
<p>該怎麼解決這個問題？事實上，如同行政、立法，司法一樣需要人民的監督。如果您有空，可以參與社運相關案件的法庭旁聽。如果您沒有時間，也歡迎您<a href="http://2015.jrf.org.tw/" target="_blank">支持民間司改會</a>，一起協助司法進行改革。</p>
<p><a href="http://pnn.pts.org.tw/main/2015/08/14/%E3%80%90%E8%AA%AA%E6%B3%95%E3%80%91%E8%B5%B7%E8%A8%B4%E5%A4%AA%E9%99%BD%E8%8A%B1%E7%9A%84%E6%AA%A2%E5%AF%9F%E5%AE%98%E5%8D%87%E5%AE%98%E4%BA%86/" target="_blank">起訴太陽花的檢察官升官了</a></p>
<p><a href="http://pnn.pts.org.tw/main/2014/04/02/%E3%80%90%E8%AA%AA%E6%B3%95%E3%80%91%E5%B0%8B%E6%89%BE%E5%85%B7%E5%82%99%E6%86%B2%E6%B3%95%E6%84%8F%E8%AD%98%E5%8F%88%E6%9C%89%E6%B0%91%E4%B8%BB%E9%97%9C%E6%87%B7%E7%9A%84%E6%AA%A2%E5%AF%9F%E5%AE%98/" target="_blank">尋找具備憲法意識又有民主關懷的檢察官</a></p>
<p><a href="http://pnn.pts.org.tw/main/2015/03/21/%E3%80%90%E7%B5%90%E7%97%82324%E3%80%91%E5%A4%AA%E9%99%BD%E8%8A%B1%E9%81%8B%E5%8B%95%E5%B0%87%E5%8F%B8%E6%B3%95%E6%89%93%E5%9B%9E%E5%8E%9F%E5%BD%A2%EF%BC%9F/" target="_blank">太陽花運動將司法打回原形？</a></p>`;

