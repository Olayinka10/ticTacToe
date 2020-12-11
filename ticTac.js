var checkFunction = 0;
var input1 = inp1;
var input2 =inp2
var lastPlayer =1;
var clear;


function start(e){ 
if (!input1.value.trim() || !input2.value.trim() && !inp3.value.trim() || !inp4.value.trim()){
    name1.textContent ='Please enter players name to start this game';

}else{
    name1.textContent = input1.value +' {' + inp3.value + '}' + ' Vs ' + input2.value + ' {' + inp4.value + '}';
    luck.textContent = 'Good luck!'
    fist.innerHTML =0;
    sec.innerHTML = 0;
    input1.disabled = true;
    input2.disabled = true; 
    inp3.disabled =true;
    inp4.disabled =true; 
    if (e.target.value =='Start') {
        e.target.value ='End'
        e.target.style.background ='#00274E';
        score1.value = input1.value;
        score2.value = input2.value;
        hy.innerHTML = '-'
        e.target.style.color ='white'
        checkFunction = 1;
    }
    else if (e.target.value =='End') {
        e.target.value ='Start'
        e.target.style.background ='red';
        input1.disabled = false;
        input2.disabled = false;
        inp3.disabled =false;
        inp4.disabled =false;
        input1.value='';
        input2.value='';
        name1.textContent ='';
        luck.textContent = '';
        score1.value ='';
        score2.value ='';
        fist.innerHTML ='';
        sec.innerHTML ='';
        hy.innerHTML ='';
        inp3.value ='';
        inp4.value ='';
        butn1.innerHTML ='';
        butn2.innerHTML ='';
        butn3.innerHTML =''; 
        butn4.innerHTML ='';  
        butn5.innerHTML ='';
        butn6.innerHTML ='';  
        butn7.innerHTML =''; 
        butn8.innerHTML ='';  
        butn9.innerHTML ='';
        checkFunction = 1;
    }
   
   
}

}


function gameState(e){
    clear = e;
    console.log(lastPlayer)
    if (checkFunction==1 && clear.target.innerHTML =='' && lastPlayer == 1 ) {
        clear.target.innerHTML = inp3.value;
        checkFunction = 2;
        luck.innerHTML = input2.value + "'s  turn";
        lastPlayer=2
    }
    else if (checkFunction == 2 && clear.target.innerHTML=='' && lastPlayer ==2) {
        clear.target.innerHTML =inp4.value;
        luck.innerHTML = input1.value + "'s  turn"
        checkFunction = 1;
        lastPlayer=1;
    }
    displayWinner()
}

function displayWinner(){
    bt1 = butn1.innerHTML; 
    bt2 = butn2.innerHTML; 
    bt3 = butn3.innerHTML; 
    bt4 = butn4.innerHTML; 
    bt5 = butn5.innerHTML; 
    bt6 = butn6.innerHTML;
    bt7 = butn7.innerHTML; 
    bt8 = butn8.innerHTML; 
    bt9 = butn9.innerHTML;

if ((bt1 ==bt2 && bt2 == bt3 && bt1!='') ||
    (bt4 == bt5 && bt5 == bt6 && bt4!='') ||
    (bt7 == bt8 && bt8 == bt9 && bt7 !='')||
    (bt1 == bt4 && bt4 == bt7 && bt1 !='')||
    (bt2 == bt5 && bt5 == bt8 && bt2 !='')||
    (bt3 == bt6 && bt6 == bt9 && bt3 !='')||
    (bt1 == bt5 && bt5 == bt9 && bt1 !='')||
    (bt3 == bt5 && bt5 == bt7 && bt3 !='') 
   ) {
   if (lastPlayer == 1) {
           name1.textContent =  input2.value + " has won!";
           luck.textContent =  input1.value + ',' + "You too can  do better " ;
       if (checkFunction == 1) {
            sec.innerHTML++;        
            checkFunction = 3;
           
        }
   }else if (lastPlayer == 2){
             name1.textContent = input1.value + ' has won!';
            luck.textContent = input2.value + ',' + "You too can  do better ";
        if (checkFunction ==2) {
            fist.innerHTML++;
            checkFunction = 3;
            
        }
    
   } 
  } else if((bt1== bt2 && bt2 !=bt3) &&
            (bt4==bt5 && bt5 !=bt6) &&
            (bt7==bt8 && bt8 !=bt9) ||
            (bt1==bt3 && bt3 !=bt2) &&
            (bt4==bt6 && bt6 !=bt5) &&
            (bt7==bt9 && bt9 !=bt8) ||
            (bt3==bt2 && bt2 !=bt1) && 
            (bt6==bt5 && bt5 !=bt4) &&
            (bt9==bt8 && bt8 !=bt7) ||
            (bt1==bt5 && bt5 !=bt9) &&
            (bt1==bt9 && bt9 !=bt5) &&
            (bt9==bt5 && bt5 !=bt1) ||
            bt3==bt5 && bt5 !=bt7 &&
            bt3==bt7 && bt7 !=bt5 &&
            bt7==bt5 && bt5 !=bt3 
    ){
 name1.textContent = 'Ooops! draw game'
  }

}


function replay(){
    checkFunction = 1;
    lastPlayer=true
    butn1.innerHTML =''; 
    butn2.innerHTML =''; 
    butn3.innerHTML ='';
    butn4.innerHTML =''; 
    butn5.innerHTML ='';
    butn6.innerHTML ='';
    butn7.innerHTML ='';
    butn8.innerHTML ='';
    butn9.innerHTML ='';
    if (lastPlayer == true && checkFunction !==3) {
    luck.textContent = 'Another chance!!!'
    name1.textContent = input1.value +' {' + inp3.value + '}' + 
    ' Vs '+ input2.value + ' {' + inp4.value + '}';
       
    }
    else if (lastPlayer == false  && checkFunction != 3) {
        checkFunction = 1;
        luck.textContent = 'You have been given another chance'
    }
}

