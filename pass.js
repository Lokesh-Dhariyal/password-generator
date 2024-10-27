const input = document.getElementById("inp");
const copy = document.getElementById("copyy");
const pop = document.querySelector(".this")
let password = "";
copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(password);
    pop.innerHTML = "copied!";
})
copy.addEventListener('mouseout',()=>{
    pop.innerHTML = "copy"
})
let len = document.getElementById("num");
let range = document.getElementById("len");
len.addEventListener('input',(e)=>{
    range.value = e.target.value;
})
range.addEventListener("input", (e) => {
  len.value = e.target.value;
});
let hold = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let temp = [];
let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let num = ['0','1','2','3','4','5','6','7','8','9'];
let symb = ['!','@','#','$','%','^','&','*']; //,';',',','.',':','`'

const generate = document.getElementById("gen");
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols");
generate.addEventListener('click',()=>{
    password = "";
    temp = hold;
    if(uppercase.checked == true){
        temp = temp.concat(upper);
    }
    if(numbers.checked == true){
        temp = temp.concat(num);
    }
    if(symbols.checked == true){
        temp = temp.concat(symb);
    }
    let n = temp.length;
    for(let i = 0; i<len.value; i++){
        let final = Math.round(Math.random()*(n-1));
        password+=temp[final];
    }
    input.innerHTML = `${password}`;
})