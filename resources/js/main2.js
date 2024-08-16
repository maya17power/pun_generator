import { getPun } from "./utils.mjs";

// console.log(getPun().puns[1].id);
// console.log(getPun().puns[1].pun);
// console.log(getPun().puns[1].answer);

const puns = getPun().puns;
console.log(puns)

function getRandom(){
    
};

//when user clicks 'punGeneratorButton'
//get random number between 1-200.
document.querySelector('#getPun').addEventListener('click',()=>{
    puns.filter((i)=>{
        if(i === getRandom()){

        }
    });
});

//find number in obj.


//get pun and answer from obj matching random number.


//display pun but hide the answer.


//click the button 'give up' to display answer.


