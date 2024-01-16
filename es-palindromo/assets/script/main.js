// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 

// prendiamo le variabili 
let playerWord = document.getElementById("playerWord")
let getResult = document.getElementById("getResult")

// div che da display-none compaiono all'occorrenza 
let parolaPalindroma = document.getElementById("parolaPalindroma")
let parolaNonPalindroma = document.getElementById("parolaNonPalindroma")

getResult.addEventListener("click", function(){

    let playerWordValue = playerWord.value 

    let arrayWord = Array.from(playerWordValue)

    let emptyArray = []

    console.log(arrayWord)

    for(let i = arrayWord.length - 1; i >= 0; i--){
        emptyArray.push(arrayWord[i])
        console.log(emptyArray)
    }

    for(let i = 0; i <= emptyArray.length; i++){
        console.log(arrayWord)
        console.log(emptyArray)
    } 
})