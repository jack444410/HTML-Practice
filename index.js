const input1 = document.querySelector('.fill_in .txt')
const input2 = document.querySelector('.fill_in .submit')
const final_answer = document.querySelector('.fill_in .final_number')

var code = ' '

input1.addEventListener("click", function(e){
    input1.value = ""
})

input2.addEventListener("click", function(e){
    if(input1.value=='請於此輸入想猜的數字...' || code == 'running'){
        return;
    } else {
        try{
            randomNumber();
            rollNumber();
            console.log(typeof(input1.value))
        } catch(err){
            console.log(err)
        }
    }
})

console.log(input1)

console.log(input1.value)

const P = [
    ' ',
    '讀',
    '讀取',
    '讀取中',
    '讀取中 . ',
    '讀取中 . .',
    '讀取中 . . .'
];
let x = 0;0

let randomnumber1 = Math.floor(Math.random() *100);
console.log(randomnumber1)

function randomNumber(){
    randomnumber1 = Math.floor(Math.random() *100);
}

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }

function rollNumber(){
    value = Number(input1.value)
    console.log(typeof(value))
    if(isNaN(value)){
        final_answer.innerHTML = `<p class="final_number">系統辨別非數字! 請重試<p/>`
        console.log(`系統辨別非數字，請重試`);
    } else {
        code = 'running'
        do {
            randomNumber();
        } while (value < randomnumber1 || randomnumber1 ===0);
    }
    const loader = setInterval(() => {
        final_answer.innerHTML = `<p class="final_number">選出的數字為： ${P[x++]}<p/>`;
        x %= P.length;
      }, 250);

    setTimeout(() => {
        clearInterval(loader);
        final_answer.innerHTML = `<p class="final_number">選出的數字為：${randomnumber1}<p/>`
        code = 'finish'
        //console.log(`\n抽中的數字為：${randomnumber1}`);
        //console.log(`\n======================`);
        //syncDelay(5000)
      }, 5000);

    //final_answer.innerHTML = `<p class="final_number">選出的數字為：${randomnumber1}<p/>`

}