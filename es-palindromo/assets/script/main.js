// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 

// prendiamo le variabili 
let playerWord = document.getElementById("playerWord")
let getResult = document.getElementById("getResult")

// div che da display-none compaiono all'occorrenza 
let parolaPalindroma = document.getElementById("parolaPalindroma")
let parolaNonPalindroma = document.getElementById("parolaNonPalindroma")

let palindroma = ""


getResult.addEventListener("click", function(){

    let playerWordValue = playerWord.value 
    let arrayWord = Array.from(playerWordValue)


    function invertiArray(arrayWord){

        let emptyArray = []
    
        for(let i = arrayWord.length - 1; i >= 0; i--){
            emptyArray.push(arrayWord[i])
        }
    
        return emptyArray 
    }

    emptyArray = invertiArray(arrayWord)

    // controlliamo in console 
    console.log(arrayWord)
    console.log(emptyArray) 


    for(let i = 0; i < arrayWord.length; i++){
        palindroma += emptyArray[i]
    } 

    console.log(playerWordValue)
    console.log(palindroma)


    if( playerWordValue == palindroma){
        parolaPalindroma.classList.remove("d-none")
    } else {
        parolaNonPalindroma.classList.remove("d-none")
    }


})

