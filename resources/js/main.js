

window.onload = function() {

    let punAPI = "https://www.punapi.rest/api/pun";
  
    //on show answer button click
    document.getElementById("showAnswer").onclick = function(){
      //show the answer div
      document.getElementById("punAnswer").style.display = "block";
      //hide the show answer button
      document.getElementById("showAnswer").style.display = "none";
    }
    
    //on generate Pun button click 
    document.getElementById("punRefresh").onclick = function() {
      //hide the answer div
      document.getElementById("punAnswer").style.display = "none";
      searchPun();
    };
  
    function searchPun() {
      xhr = new XMLHttpRequest();
      xhr.open("GET",punAPI,true);
      xhr.send();
      xhr.onreadystatechange = processPun;
    };
  
    function processPun() {
      if(xhr.readyState == 4 && xhr.status == 200){
        let myPun = JSON.parse(xhr.responseText);
        let qAnda = punFilter(myPun.pun);
          document.getElementById("punQuestion").innerHTML =  qAnda[0];
          if(qAnda[1] != ""){
             document.getElementById("showAnswer").style.display = "block";
             document.getElementById("punAnswer").innerHTML = qAnda[1];
          }else{
             document.getElementById("punAnswer").style.display = "none";
          }
        }else{
          document.getElementById("punQuestion").innerHtml = "No pun, search again! :("
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