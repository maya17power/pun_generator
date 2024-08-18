import { getPun } from "./utils.mjs";

const puns = getPun().puns;
const punQuestion = document.querySelector('#punQuestion');
const punAnswer = document.querySelector('#punAnswer');
const showAnswer = document.querySelector('#answer');

function getRandom(){
    let randomNum = Math.floor(Math.random() * 200) + 1;
    return puns[randomNum];
};

//when user clicks 'punGeneratorButton'
//get random number between 1-200.
document.querySelector('#getPun').addEventListener('click',()=>{
    const newPun = getRandom();
    punQuestion.innerHTML = newPun.pun;
    punAnswer.innerHTML = newPun.answer;
    showAnswer.style.display = 'inline';
    punAnswer.style.display = 'none';
});

showAnswer.addEventListener('click',()=>{
    punAnswer.style.display = 'inline';
    showAnswer.style.display = 'none';
});

//find number in obj.


//get pun and answer from obj matching random number.


//display pun but hide the answer.


//click the button 'give up' to display answer.


