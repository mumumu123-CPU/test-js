/* 0から100までの数字を表示する
for(let i = 0; i<=100; i++){
    console.log(i);
}*/

/* 1から5までの数字の中で最大の数字を表示する
console.log(Math.max(1, 2, 3, 4, 5));
*/

/* 配列内の最大値を表示する
     配列の中から最大値を見つける関数
const findMax = (array) => {
     まず配列の最初の要素を最大値として仮定
    let max = array[0];
    
     配列の要素を1つずつチェック
    for(let i = 0; i < array.length; i++){
        // もし現在の要素が仮の最大値より大きければ
        if(array[i] > max){
            // その要素を新しい最大値として更新
            max = array[i];
        }
    }
    
     見つかった最大値を表示
    console.log(max);
};

 関数を実際に使用してみる
 [1, 2, 3, 4, 5]という配列の中から最大値を探す
findMax([1, 2, 3, 4, 5]);*/

/*配列内の最大値を求める
const findMax = (arr) => {
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        };
    };
    console.log(max);
};

findMax([5,20,60,90]);*/

/*ウインドウの立幅を表示する。
let windowwidth = window.innerHeight;
alert(windowwidth);*/

/*立幅と横幅同時に表示
let windowwidth = window.innerWidth;
let windowheight = window.innerHeight;
alert(`横幅${windowwidth}px,立幅${windowheight}px`);*/

/*変数で計算してアラートで表示する
let num1 = 5;
let num2 = 8;
alert(5+8);*/

/*変数の中の文字列を置き換える
let text1 = "リンゴ・バナナ";
let text2 = "レモン";
let newtext3 = text1.replaceAll("バナナ","");
alert(`${newtext3}${text2}`);*/

/*色の変更とクリック時にアラートで表示する
let button = document.getElementById('myButton');

button.addEventListener('click',() => {
    button.style.color = 'red';
    alert('クリックされたぜ');
});*/

/*背景の色を変更
let button = document.getElementById('myButton');

button.addEventListener('click',() => {
    button.style.color = 'red';
    button.style.backgroundColor = 'blue';
    alert('クリックされたぜ');
});+*/

/*テキスト変更
let button = document.getElementById('myButton');

button.addEventListener('click', () => {
   button.textContent ='クリックされたぜ';
});*/

/*  クリック時に、、、
    ボタンの文字を「クリックされました！」に変更
    ボタンの背景色を青色に変更
    ボタンの文字色を白色に変更
let button = document.getElementById('myButton');

button.addEventListener('click',() => {
    button.style.backgroundColor ='blue';
    button.style.color ='white';
    button.textContent = 'クリックされました';
});*/


/*　ボタンを押す度にと色が変更する
let button = document.getElementById("myButton");
let isClicked = false;

button.addEventListener("click",()=>{
    if(isClicked) {
        button.textContent ="クリックしてね";
        button.style.backgroundColor = "white";
        isClicked = false;
    }   else {
        button.textContent = "クリックされました";
        button.style.backgroundColor = "blue";
        isClicked = true;
    }
});*/

/*マウスを乗せているときに色、テキストを変更
let button = document.getElementById("myButton");
let isHovered = false;
button.addEventListener("mouseover",()=>{
    if (isHovered) {
    button.textContent = "マウスが乗ってません";
    button.style.color = "white";
    isHovered = false;
    }   else {
        button.textContent = "マウスが乗ってます";
        button.style.color = "red";
        isHovered = true;
    }
});*/

/*数値を入力したら２倍に計算してくれる
let number = document.getElementById ("numberInput");
let button = document.getElementById("calculateDouble");
let result = document.getElementById("result");

button.addEventListener("click",()=>{
    let inputValue = Number(number.value);

    if (inputValue===0){
        result.textContent = 0;
    } else if(!inputValue){
        result.textContent = "正しい数値を入力してください";
    }

    else　{
        result.textContent = inputValue * 2;
    }

});*/

/*jsで文字を表示させる
let $trigger = document.querySelector(".trigger");
let $target = document.querySelector(".target");

$trigger.addEventListener("click",()=>{
    $target.style.display = "block";
  
});*/


/*クリックするごとに文字を消したり、表示させたりする
let $trigger = document.querySelector(".trigger");
let $target = document.querySelector(".target");


$trigger.addEventListener("click",() => {
    if( $target.style.display !== "none"){
        $target.style.display ="none";  
    } else {
        $target.style.display = "block";
    }
});*/

/*秒数指定で表示
const IntervalId = setInterval (()=>{
    console.log("このメッセージは1秒ごとに表示されます");

}, 1000);

setTimeout(()=>{
    clearInterval(IntervalId);
    console.log("繰り返し処理を停止");
},5000);*/


/*文字をフェードインさせる
const targetElement =document.querySelector(".target");

const fadeIn = (element) =>{
    element.style.opacity = 0;
    element.style.display = "block";

    let opacity = 0;

    const interval = setInterval(()=>{
        if (opacity < 1){
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    },50);

};

window.onload = (()=>{
    fadeIn(targetElement); 
});*/

/*const add = (a,b) => {
   return a + b;
};
console.log(add(3,5));

const add2 = (a,b) =>{
    return a * b;
};
console.log(add2(6,7));*/

/*
const stringLength = (str)=>{
    return str.length;
}
console.log(stringLength("こんにちは"));
*/

/*
const findMax = (array)=>{
    let max = array[0];

    for (let i = 1; i < array.length; i++){

        if(array[i] > max ) {
            max = array[i];
        }

    };
    
    return max;
};

console.log(findMax([1,3,4,5,6]));*/

/*
const printArray = () =>{


let array = [1,2,3,4,5,6];

for (let i =0; i < array.length; i++){
    console.log(array[i]);
};
};

printArray();*/

/*
const sumArray = () => {

    let sum =0;
    let array = [1,2,3,4,5];

    for (let i =0; i < array.length; i++ ) {
        sum += array[i];
        console.log(sum);
    };
};

sumArray();*/

/*
const sumArray = (array) => {

    let sum =0;

    for (let i =0; i < array.length; i++ ) {
        sum += array[i];
    };
    return sum;
};

console.log(sumArray([1,2,3,4,5]));*/

const countEvens = (array) => {
    let count =0;
    for(let i =0; i < array.length; i++){
        if(array[i] % 2 === 0){
            count++;
        }

    }
    return count;

};

console.log(countEvens([1,2,3,4,5,6]));
