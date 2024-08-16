import { getPun } from "./utils.mjs";

const puns = getPun().puns;

function getRandom(){
    let randomNum = Math.floor(Math.random() * 200) + 1;
    return puns[randomNum];
};

//when user clicks 'punGeneratorButton'
//get random number between 1-200.
document.querySelector('#getPun').addEventListener('click',()=>{
    // console.log(getRandom().id);
    // console.log(getRandom().pun);
    const punQuestion = document.querySelector('#punQuestion');
    const punAnswer = document.querySelector('#showAnswer');
    punQuestion.innerHTML = getRandom().pun;

});

//find number in obj.


//get pun and answer from obj matching random number.


//display pun but hide the answer.


//click the button 'give up' to display answer.


