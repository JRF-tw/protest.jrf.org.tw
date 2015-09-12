
export const questionData = [
  { question: '我和警察發生推擠。', score: 'a', done: false },
  { question: '警察罵我，我罵回去。', score: 'b', done: false },
  { question: '警察抓我的時候我掙扎抗拒。', score: 'c', done: false },
  { question: '我和大家一起罵政府機關。', score: 'd', done: false },
  { question: '我和大家一起罵政府機關的官員。', score: 'e', done: false },
  { question: '我拿著麥克風，對大家宣講。', score: 'f', done: false },
  { question: '我拿著麥克風，協助控制場面。', score: 'g', done: false },
  { question: '我和大家一起衝進政府機關。', score: 'h', done: false },
  { question: '我和大家圍著政府機關靜坐抗議。', score: 'i', done: false },
  { question: '我不小心破壞了政府機關的財物。', score: 'j', done: false },
  { question: '我在臉書上發文，請大家到現場幫忙。', score: 'k', done: false },
  { question: '警察舉牌三次後，群眾不想離開。', score: 'l', done: false },
  { question: '政府官員要離開，我擋在車子前面阻擋。', score: 'm', done: false },
  { question: '我把自己綁在路中間，希望官員的車子能在前面停下來。', score: 'n', done: false },
  { question: '建築物即將被強制拆除，我待在建築物內部，要阻止建築物被拆掉。', score: 'o', done: false }
];

export const answerData = [
  {
    answer: '刑法§135條，妨礙公務罪。',
    detail: '對於公務員依法執行職務時，施強暴脅迫者，處三年以下有期徒刑、拘役或三百元以下罰金。<br /><br />意圖使公務員執行一定之職務或妨害其依法執行一定之職務或使公務員辭職，而施強暴脅迫者，亦同。<br /><br />犯前二項之罪，因而致公務員於死者，處無期徒刑或七年以上有期徒刑；致重傷者，處三年以上、十年以下有期徒刑。',
    calculate: (state) => { return ( state.a || state.b || state.c || state.o ) ? true : false; },
    key: 'criminal135'
  }, {
    answer: '刑法§136條，聚眾妨礙公務罪。',
    detail: '公然聚眾犯前條之罪者，在場助勢之人，處一年以下有期徒刑、拘役或三百元以下罰金。首謀及下手實施強暴脅迫者，處一年以上、七年以下有期徒刑。',
    calculate: (state) => { return (( state.a || state.b || state.c || state.o ) && ( state.f || state.g )) ? true : false; },
    key: 'criminal136'
  }, {
    answer: '刑法§140條侮辱公務人員、侮辱公署罪',
    detail: '於公務員依法執行職務時，當場侮辱，或對於其依法執行之職務公然侮辱者，處六月以下有期徒刑、拘役或一百元以下罰金。<br /><br />對於公署公然侮辱者亦同。',
    calculate: (state) => { return ( state.b || state.d || state.e ) ? true : false; },
    key: 'criminal140'
  }, {
    answer: '刑法§153煽惑他人犯罪',
    detail: '以文字、圖畫、演說或他法，公然為左列行為之一者，處二年以下有期徒刑、拘役或一千元以下罰金：<br /><br />一、煽惑他人犯罪者。<br /><br />二、煽惑他人違背法令，或抗拒合法之命令者。',
    calculate: (state) => { return ( state.f || state.g || state.k ) ? true : false; },
    key: 'criminal153'
  }, {
    answer: '刑法§306侵入建物罪',
    detail: '無故侵入他人住宅、建築物或附連圍繞之土地或船艦者，處一年以下有期徒刑、拘役或三百元以下罰金。<br /><br />無故隱匿其內，或受退去之要求而仍留滯者，亦同。',
    calculate: (state) => { return ( state.h || state.i ) ? true : false; },
    key: 'criminal306'
  }, {
    answer: '刑法§354損毀罪',
    detail: '毀棄、損壞前二條以外之他人之物或致令不堪用，足以生損害於公眾或他人者，處二年以下有期徒刑、拘役或五百元以下罰金。',
    calculate: (state) => { return ( state.j ) ? true : false; },
    key: 'criminal354'
  }, {
    answer: '集遊法§29集會遊行不解散之首謀',
    detail: '集會、遊行經該管主管機關命令解散而不解散，仍繼續舉行經制止而不遵從，首謀者處二年以下有期徒刑或拘役。',
    calculate: (state) => { return (( state.f || state.g ) && state.l ) ? true : false; },
    key: 'assembly29'
  }, {
    answer: '集遊法§30集會遊行侮辱公署罪',
    detail: '集會﹑遊行時，以文字﹑圖畫﹑演說或他法，侮辱﹑誹謗公署﹑依法執行職務之公務員或他人者，處二年以下有期徒刑﹑拘役或科或併科新台幣六萬元以下罰金。',
    calculate: (state) => { return (( state.d || state.e ) && ( state.f || state.g )) ? true : false; },
    key: 'assembly30'
  }, {
    answer: '刑法§304強制罪',
    detail: '以強暴、脅迫使人行無義務之事或妨害人行使權利者，處三年以下有期徒刑、拘役或三百元以下罰金。<br /><br />前項之未遂犯罰之。',
    calculate: (state) => { return ( state.m || state.n ) ? true : false; },
    key: 'criminal304'
  }, {
    answer: '刑法§185妨害公眾往來安全罪',
    detail: '損壞或壅塞陸路、水路、橋樑或其他公眾往來之設備或以他法致生往來之危險者，處五年以下有期徒刑，拘役或五百元以下罰金。<br /><br />因而致人於死者，處無期徒刑或七年以上有期徒刑。致重傷者，處三年以上十年以下有期徒刑。<br /><br />第一項之未遂犯罰之。',
    calculate: (state) => { return ( state.n ) ? true : false; },
    key: 'criminal185'
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
  o: false
};
