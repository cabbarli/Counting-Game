// 4 emel oyununun deyisenleri taninidilir 
let number1, Operator, number2, result, answer, True, False;
number1=document.querySelector("#element1");
Operator=document.querySelector("#operator1");
number2=document.querySelector("#element2");
result=document.querySelector(".result");
answer=document.querySelector(".answer");
True=document.querySelector("#true");
False=document.querySelector("#false");

// random sayi istehsal etm'k funksiyasi
function randomnumber(min, max) {
   let number= Math.floor(Math.random()*(max-min)) + min;
   return number;
}

// oyun baslayanda ve sonrasinda yeni sual formalasdirma funksiyasi
function newQuestion(){
    let operation= ["+","-","*","/"];
    Operator.textContent= operation[randomnumber(0,4)]; // operator secimi
    number1.textContent= randomnumber(0,50);
    number2.textContent= randomnumber(0,50);

 // eger bolme olarsa qaliqli olmasin deye formalasdirilan funksiya
  if(Operator.textContent== '/'){
    while(true){
        number2.textContent= randomnumber(0,50);
        if(number1.textContent%number2.textContent==0){
            break;
        }
    }}
 }
    // sehife yuklendiyinde yeni sorgu formalasdirma funksiyasi
    window.onload=function(){
        newQuestion();
    }
 
    // cavabla buttonuna basildiginda edilecek islem funksiyasi
    answer.onclick=function(){
        let ans, n1, n2, val;
        val=result.value;
        n1=Number(number1.textContent);
        n2=Number(number2.textContent);
    switch(Operator.textContent){
        case "+":ans=n1+n2; break;
        case "-":ans=n1-n2; break;
        case "*":ans=n1*n2; break;
        case "/":ans=n1/n2; break;
        default: break;
    }
    if(result.value==ans){
        True.textContent=Number(True.textContent) + 1;
    }else if(result.value==" "){
        alert("xananı boş qoymayın");
    }
    else if(isNaN(val)){
        alert("xanaya rəqəm yazın");
    }
    else if(True.textContent==30){
        alert("Təbrik edirik 30 düz cavaba çatdınız");
        reset();
    } else if(False.textContent==30){
       alert("Təəssüfki 30 səhv cavabınız var");
       reset();
    }
    else {
        False.textContent=Number(False.textContent) + 1;
    }
   
   function reset(){
    if(True.textContent>=30 || False.textContent>=30){
        True.textContent=0;
        False.textContent=0;
       }
    }
    document.querySelector(".result").value=" ";
   newQuestion();
   }
  