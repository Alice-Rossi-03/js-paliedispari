// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// funzione per generare un numero random 
function randomNumber (minimo, massimo) {
    return Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
}
  
let verification

function evenOrOdd (number){
    if(number % 2 === 0){
        console.log("The Number Is Even") 
        verification = true
        return
    } else {
        console.log("The Number Is Odd")
        verification = false 
        return 
    }

} 

// prendiamo il valore che ha scelto l'utente 
let playerChoice = document.getElementById("chooseEvenOdd")
let playerNumber = document.getElementById("playerNumber")

// prendiamo il bottone 
let getResult = document.getElementById("getResult")

let playerWins = document.getElementById("playerWins")
let computerWins = document.getElementById("computerWin")

let verificationPlayerChoice 


getResult.addEventListener("click", function(){

    // numero giocato dal computer 
    let computerNumber = randomNumber(1,5)

    // scelta del player 
    let playerChoiceValue = playerChoice.value 


    if (playerChoiceValue = "even"){
        verificationPlayerChoice = true  
    } else  if(playerChoiceValue = "odd"){
        verificationPlayerChoice = false 
    }


    // numero del player
    let playerNumberValue = playerNumber.value 

    console.log(computerNumber)
    console.log(playerChoiceValue)
    console.log(+playerNumberValue)

    // somma dei numeri 
    let sumOfAll = computerNumber + +playerNumberValue

    // verifichiamo 
    console.log(sumOfAll)

    evenOrOdd(sumOfAll)

    if (verification = verificationPlayerChoice){
        playerWins.classList.remove(".d-none")
    } else {
        computerWins.classList.remove(".d-none")
    }
    
})


