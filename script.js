//SELECTORS:Finds th buttons and messages.b
const måndagButton=document.querySelector("#måndagButton");
const måndagMessage=document.querySelector("#måndag-message");

const tisdagButton=document.querySelector("#tisdagButton");
const tisdagMessage=document.querySelector("#tisdag-message");

const önsdagButton=document.querySelector("#önsdagButton");
const önsdagMessage=document.querySelector("#önsdag-message");

const törsdagButton=document.querySelector("#törsdagButton");
const törsdagMessage=document.querySelector("#törsdag-message");

const fredagButton=document.querySelector("#fredagButton");
const fredagMessage=document.querySelector("#fredag-message");

//Function:Reusable code that displays amessage.
function showOrderMessage(message, meal) {
    message.textContent="Du har valt:" + meal;
//The + joins two pieces of text together.This is called String concatenation.
}
//Event Listener: Runs the function when the day`s chosen are cliked.
måndagButton.addEventListener("click",function() {
    showOrderMessage(måndagMessage,"Fufu med egusi soppa");
})
tisdagButton.addEventListener("click",function() {
    showOrderMessage(tisdagMessage, "Grillad kyckling med ris och bönor sallad");
})
önsdagButton.addEventListener("click",function() {
    showOrderMessage(önsdagMessage,"Jollofris med matbabannan och kyckling");
})
törsdagButton.addEventListener("click", function() {
    showOrderMessage(törsdagMessage,"Stekt plantain och kriddigt kött");
})
fredagButton.addEventListener("click", function(){
    showOrderMessage(fredagMessage,"Puff puff med kriddig gryta");
})



