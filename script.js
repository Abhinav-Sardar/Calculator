let input = document.getElementById("input") ; 
let roots = document.querySelectorAll('.root');
let buttons = document.querySelectorAll('button') ; 
let numBtns = document.querySelectorAll('.nums') ;
let icon =document.getElementById('icon') ; 
// let more = document.querySelector('#more') ; 
let more = document.getElementById('more') ; 
more.addEventListener('click' , () => {
    // icon.style.transform = 'rotate(180deg)';
    // alert('Hi');
    if(icon.classList.contains('fa-chevron-up')){
    icon.classList.remove('fa-chevron-up') ; 
    icon.classList.add('fa-chevron-down') ; 
    roots.forEach(root => root.style.display = 'inline') ; 
    }
    else{
    icon.classList.remove('fa-chevron-down') ; 
    icon.classList.add('fa-chevron-up') ; 
    roots.forEach(root => root.style.display = 'none') ; 
    // console.log(roots);
    }
})
buttons.forEach(btn => {
    if(btn.innerText === 'C'){
        btn.onclick = () => input.value = '' ; 
    }
    else if(btn.innerText === 'DEL'){
        btn.onclick = () => {
            let currentValue = input.value ; 
            let sliced = currentValue.slice(0 , currentValue.length-1) ; //abcdefg
            console.log(currentValue.length)
            input.value = sliced ; 
        }
    }
    else if(btn.innerText === 'BG'){
        setInterval(() => {
            let bgColor = returnRandomHexValue() ; 
            btn.onclick = () => {
                numBtns.forEach(numBtn => {
                numBtn.style.backgroundColor = bgColor;
                })
            } 
        },);
    }
    else if(btn.innerText === "="){
        btn.onclick = ()=> {
            try{
                let value = String(input.value) ;
                let modifiedValue = LoopAndSwitch(value) ; 
                console.log(modifiedValue) ; 
                let summedUp = eval(modifiedValue) ; 
                if(summedUp.length ===0){
                    alert('Empty expression found')
                }
                if(!summedUp){
                    alert('Invalid Expression !') ; 
                }
                else{
                    input.value = summedUp;
                }
            }
            catch(error){
                console.log(error);
                alert('Invalid Expression!')
            }
                /**
                 * 
                 * 
                 * 
                 * 
                 */
        }
    }
    else {
        btn.onclick = () => input.value += btn.innerText ; 
    }
}) ; 

const numbersPonint = "1234567890." ; 
function returnRandomHexValue(){
    const letters = "ABCDEF" ; 
    const numbers = "1234567890" ; 
    let color = "#" ; 
    while(color.length !== 7){
        let randomNumber = Math.random() ; 
        if(randomNumber <= .5){
            color+= letters[Math.floor(Math.random()*letters.length)]
        }
        else{
            color += numbers[Math.floor(Math.random()*numbers.length)]
        }
    }
    return color ; 
}
// let sen = "1. hy" ; 
// console.log(sen.includes(numbersPonint))
let exp = "11 + 1 + Math.sqrt(9)"
console.log(eval(exp)) ; 

function LoopAndSwitch(value){
    for(let i = 0 ; i< value.length ; i++){
        value = value.replace('x' , '*') ; 
        value = value.replace('÷' , '/') ; 
        value = value.replace('3√' , 'Math.cbrt') ; 
        value = value.replace('√' , 'Math.sqrt') ; 
    }
    return value ; 
} ; 
