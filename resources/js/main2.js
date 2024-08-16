import { getPun } from "./utils.mjs";

// console.log(getPun().puns[1].id);
// console.log(getPun().puns[1].pun);
// console.log(getPun().puns[1].answer);

const puns = getPun().puns;

function getRandom(){
    let randomNum = Math.floor(Math.random() * 200) + 1;
    return randomNum;
};

//when user clicks 'punGeneratorButton'
//get random number between 1-200.
document.querySelector('#getPun').addEventListener('click',()=>{
    puns.map((i)=>{
        if(i.id === getRandom()){
            return console.log(i.pun);
        }
    });

});

//find number in obj.


//get pun and answer from obj matching random number.


//display pun but hide the answer.


//click the button 'give up' to display answer.


