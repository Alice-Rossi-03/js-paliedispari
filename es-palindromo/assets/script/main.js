// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 

// prendiamo le variabili 
let playerWord = document.getElementById("playerWord")
let getResult = document.getElementById("getResult")

// div che da display-none compaiono all'occorrenza 
let parolaPalindroma = document.getElementById("parolaPalindroma")
let parolaNonPalindroma = document.getElementById("parolaNonPalindroma")


function invertiArray(arrayWord){

    let emptyArray = []

    for(let i = arrayWord.length - 1; i >= 0; i--){
        emptyArray.push(arrayWord[i])
    }

    return emptyArray 
}

getResult.addEventListener("click", function(){

    let playerWordValue = playerWord.value 

    let arrayWord = Array.from(playerWordValue)


    emptyArray = invertiArray(arrayWord)

    // controlliamo in console 
    console.log(arrayWord)
    console.log(emptyArray)

    // controlliamo i contrari in console 
    console.log(invertiArray(arrayWord))
    console.log(invertiArray(emptyArray))


    if(arrayWord == emptyArray){
        parolaPalindroma.classList.remove("d-none")
    } else {
        parolaNonPalindroma.classList.remove("d-none")
    }


})