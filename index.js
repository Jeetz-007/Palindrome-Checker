const input = document.getElementById('inputText');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click',(e)=>{

    let text = input.value.trim().toLowerCase();
    if(!text){
        result.innerText = "Please enter a valid text 😐";
        return;
    }

    let reversedText = text.split("").reverse().join("")
    if(text === reversedText){
        result.innerText = `The word ${text} is a palindrome 😎`;
    }
    else{
        result.innerText = `The word ${text} is not a palindrome 😢`;
    }
})