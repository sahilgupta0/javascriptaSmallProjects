
const display = document.getElementById("display");


let num = "0";
let temp ;
let operator;
let pointFlag = true;
let calculateFlag = true;

function combine(x){
    if(x==-1){
        display.textContent = 0;
        num = "0";
        temp = "";

    }
    else if(x == -2){
        if(num[0] == "-"){
            num = num.slice(1);
        }
        else{
            num = "-" + num;
        }
        display.textContent = num;

    }
    else if(x==-3){
        if(pointFlag == true){
            num = num + ".";
            display.textContent = num;
            pointFlag = false;
        }
    }
    else{

        if(num=="0"){
            num = "" + x;
        }
        else{
            num = num + x;
        }
        display.textContent = num;
    }

}


function combine1(x){
    operator = x;
    pointFlag = true;
    if(num != "0"){
        temp = num;
    }
    num = "0";
    console.log(num);
    console.log(temp);
    display.textContent = temp;
    calculateFlag = true;
}

function calculate(){
    if (calculateFlag == true){

        result = eval(`${temp} ${operator} ${num}`);
        display.textContent = result;
        temp = result;
        num = "0";
        pointFlag = true;
        calculateFlag = false;
    }
}

















