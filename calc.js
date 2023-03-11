

var arrayTest = new Array(10);
//var arrayTest2 = new Array("ans_no0","ans_no1","ans_no2","ans_no3","ans_no4","ans_no5","ans_no6","ans_no7","ans_no8","ans_no9");
var arrayTest2 = [
                   [ "fm_no0", "ans_no0" ],
//                   [ "fm_no1", "ans_no1" ],
//                   [ "fm_no2", "ans_no2" ],
//                   [ "fm_no3", "ans_no3" ],
//                   [ "fm_no4", "ans_no4" ],
//                   [ "fm_no5", "ans_no5" ],
//                   [ "fm_no6", "ans_no6" ],
//                   [ "fm_no7", "ans_no7" ],
//                   [ "fm_no8", "ans_no8" ],
//                   [ "fm_no9", "ans_no9" ],
];


let num1 = 0;
let status = 0;

// ------------------------------------------------------------------------
//    描画更新系処理
// ------------------------------------------------------------------------

function init()
{
    updateFormula();
    updateAnswer();
}

function updateFormula() 
{
//  for (let i = 0; i < arrayTest2.length; i++){
      document.getElementById(arrayTest2[0][0]).innerHTML = get_test2(0);
//  }
}

function updateAnswer() 
{
  var str = "&nbsp;&nbsp;"+"?????"
//  for (let i = 0; i < arrayTest2.length; i++){
      document.getElementById(arrayTest2[0][1]).innerHTML = str;
//  }
}

// ------------------------------------------------------------------------
//    内部処理
// ------------------------------------------------------------------------

function get_test2(index) 
{
//    var num1=0
//    var num2=0
//    var num3 = 0;
//
    var min = 0;
    var max = 0;
  if ( status == 0 ) {
    max = week2.length;
  } else {
    max = arrayTest4.length;
	}

//  
//    while (num1==0) {
        num1= Math.floor(Math.random() * (max - min) + min);
//    }
//
//    min = 1;
//
//    while (num2==0 || Math.abs(num2)==Math.abs(num1)) {
//        num2= Math.floor(Math.random() * (max - min) + min);
//    }
//    num3 = Math.floor(Math.random() * (max - min) + min);
//    num4 = num1*num3 + num2*num3
//
//    var str;
//    if (num1>=0) {
//        str = "&nbsp;&nbsp;" + `${num1}x + ${num2}x = ${num4}`+"&nbsp;&nbsp;&nbsp;";
//    } else {
//        str = "&nbsp;" + `${num1}x + ${num2}x = ${num4}`+"&nbsp;&nbsp;&nbsp;";
//
//    }
//    arrayTest[index]=num3;

	// 単語の配列のlenの中から、ランダムな数字を出す
	// その数字を覚えておく
	// 


  if ( status == 0 ) {
    return "&nbsp;&nbsp;"+week2[num1][0];
  } else {
    return "&nbsp;&nbsp;"+arrayTest4[num1][0];
	}

}

// 指定されたNoの答えを、問題作成時に作った配列から取得
function get_ans2(num){
//    var str = `x = ${ arrayTest[num]}`;
  if ( status == 0 ) {
	return "&nbsp;&nbsp;"+week2[num1][1];
  } else {
	return "&nbsp;&nbsp;"+arrayTest4[num1][1];
	}
	
}



// ------------------------------------------------------------------------
//    クリックイベント
// ------------------------------------------------------------------------
function onClickNext() {
  init();
}


function onClickChat() {
  if ( status == 0 ) {
		status = 1;
		document.getElementById("chat").innerHTML = "&nbsp;Word&nbsp;";
  }else {
		status = 0;
		document.getElementById("chat").innerHTML = "&nbsp;Chat&nbsp;";
	}
	init();
}

function onClickAns(textNo) {
  var id = arrayTest2[textNo][1]
  document.getElementById(id).innerHTML = get_ans2(textNo);
};






