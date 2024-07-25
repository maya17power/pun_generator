
// window.addEventListener('load',searchPun);

window.onload = function() {

    const punAPI = "https://www.punapi.rest/api/pun";
    const showAnswer = document.querySelector('#showAnswer');
    const punAnswer = document.querySelector('#punAnswer');
    const punRefresh = document.querySelector('#punRefresh');
    const punQuestion = document.querySelector('#punQuestion');

    //on show answer button click
    showAnswer.onclick = function(){
      //show the answer div
      punAnswer.style.display = "block";
      //hide the show answer button
      showAnswer.style.display = "none";
    }
    
    //on generate Pun button click 
    punRefresh.onclick = function(){
    // punAnswer.innerHTML = "";
    //   //hide the answer div
    // punAnswer.style.display = "none";
    // searchPun();
    alert(' Pun API has been EOL :( ');
    };
  
    function searchPun(){
      xhr = new XMLHttpRequest();
      xhr.open("GET",punAPI,true);
      xhr.send();
      xhr.onreadystatechange = processPun;
    };
  
    function processPun(){
      if(xhr.readyState == 4 && xhr.status == 200){
        let myPun = JSON.parse(xhr.responseText);
        let qAnda = punFilter(myPun.pun);
          punQuestion.innerHTML =  qAnda[0];
          if(qAnda[1] != ""){
             showAnswer.style.display = "block";
             punAnswer.innerHTML = qAnda[1];
          }else{
             punAnswer.style.display = "none";
          }
        }else{
          punQuestion.innerHtml = "No pun, search again! :("
      }
    };
  
    function punFilter(pun){
      let punSpread = pun.split("");
      let punVal = punSpread.values();
      let punQ = [];
      let punA = [];
        for(const i of punVal){
          punQ.push(i);
          if(i === "?"){
            break;
          }
        }
        for(const i of punVal){
          punA.push(i);
        }
    return [punQ.join(""), punA.join("")];
    }
  };