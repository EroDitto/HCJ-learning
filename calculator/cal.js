const diplay = document.getElementById("display");

function appendtoDisplay(input){
    diplay.value += input
}

function clearDisplay(){
    diplay.value = '';
}

function calculate(){
    try{
        diplay.value = eval(diplay.value);
    }
    catch(error){
        diplay.value = 'Error';
    }
    
}