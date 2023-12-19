const buttonsEl= document.querySelectorAll("button");
let inputFieldEl= document.getElementById("result");


for (let i=0; i<buttonsEl.length; i++){

    buttonsEl[i].addEventListener("click",()=>{
       const buttonValue =buttonsEl[i].textContent;
       if(buttonValue==="C"){
            clearResult();
       }else if(buttonValue==="="){
            calculateResults();
       }
       else if(buttonValue==="DEL"){
            deleteValue();
       }
       else{
            appendValue(buttonValue);
       }

    })
}

function clearResult(){
    inputFieldEl.value="";
}
function calculateResults(){
    inputFieldEl.value= eval(inputFieldEl.value);
    console.log(inputFieldEl.value);
}
function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
    
}
function deleteValue(){
    input=inputFieldEl.value.slice(0,inputFieldEl.value.length-1);
    console.log(input)
    inputFieldEl=input;
}
