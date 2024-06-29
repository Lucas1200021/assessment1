'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
function() {
  const userName = userNameInput.value;
  if (userName .length === 0){
    //名前がからの時は処理を終了する
    return;
  }
  //TODO 診断結果表示エリアの作成
  //作成の前にタグを空にする
  resultDivision.innerText = ' ';

const header = document.createElement('h3');//h3タグを作る
header.innerText = '診断結果';//中身の文章
resultDivision.appendChild(header);//divの子要素として追加

const paragraph = document.createElement('p');
const result =assessment(userName);
paragraph.innerText = result;
resultDivision.appendChild(paragraph);
  //TODO ツイートエリアの作成 
 
  tweetDivision.innerText = ' ';
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=#あなたのいいところ&ref_src=twsrc%5Etfw';


anchor.setAttribute('herf',hrefValue);
anchor.setAttribute('class','twitter-hashtag-button');
anchor.setAttribute('data-text', result);
anchor.innerText = 'Tweet #あなたのいいところ';

tweetDivision.appendChild(anchor);
const script = document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivision.appendChild(script);
}
);
userNameInput.onkeyDown = event =>{
  if(event.code === 'Enter'){
    assessmentButton.onclick()
    //TODO　Enterが押されたときに実行する処理
  }
}






const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
];
/**
 * 名前の文字列を渡すと診断結果を渡す関数
 * ＠param {string} userName ユーズーの名前
 * ＠return {string} 診断結果
 */
function assessment(userName) {
  //全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
  //文字コード番号の合計を回答の数で割って添字の数値を求めます
  const index = sumOfCharCode % answers.length; //0~answers.length - 1までの数字
  const result = answers[index];
  const resltWithUseName = result.replaceAll('###userName###', userName)
  return resltWithUseName;
}
console.log('太郎')
console.assert[
  assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
  '診断の文言の特定の部分を名前に置き換える処理が正しくありません'
];

console.assert[
  assessment('太郎') === assessment('太郎'),
  '同じ名前で診断をした場合、前回と診断結果が違います。'
]

console.assert[
  assessment('二郎') === assessment('二郎'),
  '同じ名前で診断をした場合、前回と診断結果が違います。'
]

console.assert[
  assessment('三郎') === assessment('三郎'),
  '同じ名前で診断をした場合、前回と診断結果が違います。'
]