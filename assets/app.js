const $figFirst = document.getElementById('fig1');
const $figSecond = document.getElementById('fig2');
const $answerBox = document.getElementById('answer');
const $buttonJudge = document.getElementById('js-buttonjudge');
const $buttonNext = document.getElementById('js-buttonnext');
const $button = document.getElementById('js-btn');

const $correct = document.getElementById('correct');
const $wrong = document.getElementById('wrong')
const $playAll =  document.getElementById('playall');
const $scoreAll = document.getElementById('scoreall');
const $title = document.getElementsByClassName('titleline');
const $ruiImg = document.getElementsByClassName('pattern');


//初期値
$buttonJudge.style.display = 'block';
$scoreAll.style.display = 'none';

//カーソルをアンサーボックスに入れておく
$answerBox.focus();


//ランダム数字を表示
function random() {
    $figFirst.value = 1 + Math.floor(Math.random() * 4);//4の段まで
    $figSecond.value = 1 + Math.floor(Math.random() * 9);
};
window.addEventListener('load', random());


//正誤判定


function check() { //○×表示
    let answers = $figFirst.value * $figSecond.value;
    let $input = document.getElementById('answer');
    let inputAns = parseInt($input.value);
        
    if (answers === inputAns) {
        $correct.style.display = 'block';
        

    } else {
        $wrong.style.display = 'block';
    }
};

let score = 0;
function totalScore() { //scoreカウント
    
    let answers = $figFirst.value * $figSecond.value;
    let $input = document.getElementById('answer');
    let inputAns = parseInt($input.value);
    

    if (answers === inputAns) {

        score++;

    } else {
    }
    return score;
    //console.log(score);
};




//20問目で結果ページへ遷移
let firstClick = true;
let quizIndex = 1;
let quizNum =  20 //問題数
let quizEnd = quizNum * 2; //クリック回数

function branch(){ 
    
    if (firstClick) { //ボタン表示切り替え&入力欄を空にする

        $buttonNext.style.display = 'block';
        $buttonJudge.style.display = 'none';
        check();
        firstClick = false; 

        return totalScore();

} else {
    $buttonJudge.style.display = 'block';
    $buttonNext.style.display = 'none';
    firstClick = true;
    
    


    //入力を空にする
    $answerBox.value = " ";
    $correct.style.display = 'none';
    $wrong.style.display = 'none';

    //数字ランダム表示
    random();
}
};


/* $button.addEventListener('click', (e) => {

    e.preventDefault();


if (quizIndex < quizEnd) {
        
    //スコア表示
    let $result = document.getElementById('result');
    $result.value = branch();
    //console.log(branch());
    //console.log($result.value);
    
    }
    else {//問題が終わったら
        $buttonNext.style.display = 'block';

        //画面切り替え
        $playAll.style.display = 'none';
        $scoreAll.style.display = 'block';
        resultAll();
        console.log(totalScore());
        
        }
        
        
        quizIndex++;
}); */

//ボタンをクリックした時の処理
$button.addEventListener('click', (e) => {
    e.preventDefault();
    quizPlay();
});

//Enterを押した時の処理
window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
        quizPlay();
    }
};

function quizPlay(){

    if (quizIndex < quizEnd) {
        
        //スコア表示
        let $result = document.getElementById('result');
        $result.value = branch();
        //console.log(branch());
        //console.log($result.value);
        
        }
        else {//問題が終わったら
            $buttonNext.style.display = 'block';
    
            //画面切り替え
            $playAll.style.display = 'none';
            $scoreAll.style.display = 'block';
            resultAll();
            console.log(totalScore());
            
            }
            
            
            quizIndex++;
};






//まんてんと全問はずれとそれ以外のh1表示と画像切り替え

function resultAll(){

            if(quizNum + 1 <= totalScore()){ //満点なら
                //タイトル表示
                
                $title[0].style.display = 'block';
                $title[1].style.display = 'none';
                $title[2].style.display = 'none';

                //画像表示
                $ruiImg[0].style.display = 'block';
                $ruiImg[1].style.display = 'none';
                $ruiImg[2].style.display = 'none';

            }else if(totalScore() == 0 ){ //全問はずれなら

                //タイトル表示
                
                $title[0].style.display = 'none';
                $title[1].style.display = 'none';
                $title[2].style.display = 'block';

                //画像表示
                $ruiImg[0].style.display = 'none';
                $ruiImg[1].style.display = 'none';
                $ruiImg[2].style.display = 'block';

            }else{ //満点でも全問はずれでもない
                
                //タイトル表示
                $title[0].style.display = 'none';
                $title[1].style.display = 'block';
                $title[2].style.display = 'none';

                //画像表示
                $ruiImg[0].style.display = 'none';
                $ruiImg[1].style.display = 'block';
                $ruiImg[2].style.display = 'none';
            }

        };
          












