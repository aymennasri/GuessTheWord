//Returning necessary variables to change in HTML according to the game 
//except for inputs because it's an unchangeable word for each game (and the button too)

const inputs = document.querySelector(".inputs")
hintIn=document.querySelector("#hint")
guess=document.querySelector("#numL")
wrong=document.querySelector("#wrongl")
reset=document.querySelector(".btn")

//Words to be discovered

const words = [
    {word: "python", hint: "Famous among Data Science lovers"},
    {word: "javascript",hint: "What can be written using it, will eventually be written using it"},
    {word: "pascal",hint:"Most used language when modern computing became a thing"},
    {word: "typescript",hint:"Javascript but much better"},
    {word: "cuda",hint:"Nvidia says Long Live Monopoly!"},
    {word: "assembly",hint:"Machines language"},
    {word: "java",hint:"Minecraft is based on it"},
    {word: "matlab",hint:"All engineers love this one"},
    {word: "r",hint:"No it's not C, don't bother"},
    {word: "html",hint:"Paved the beginning of the Internet"},
    {word: "swift",hint:"For Apple enthusiasts"},
    {word: "rust",hint :"Attracts frustrated C++ devs"},
    {word: "perl",hint :"The Swiss Army knife of programming languages"}
]

//Declaration of necessary variables depending on the word

let word
let guessN
let letters = new Set()
let correctG = new Set()

//Randomization of the word for each game

function random(){
    let rand=words[Math.trunc(Math.random()*words.length)]
    word = rand.word
    guessN = word.length
    let hint = rand.hint
    console.log(word)
    let inHtml=""
    for (let i = 0; i < word.length; i++) {
        inHtml += `<input type="text" disabled>`
    }
    inputs.innerHTML=inHtml
    hintIn.innerHTML=hint
    guess.innerHTML=guessN
    wrong.innerHTML=""
    letters.clear()
    correctG.clear()
}
random()

//Main code inside of a game of guessing a word

reset.addEventListener("click",random)
document.addEventListener("keydown",event =>{
    for (let i = 0; i < word.length; i++) {
        letters.add(word[i])
    }
    console.log(event.key)
    let k=event.key
    let inp=inputs.querySelectorAll("input")
    console.log(letters)
    if (word.includes(k)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i]===k) {
                inp[i].value=k
                correctG.add(k)
                console.log(correctG)
            }
        }
    }
    else{
        wrong.innerHTML+=`${k}, `
        guessN--
        guess.innerHTML=guessN
        if(guess.innerHTML==="0"){
            alert("You lost.")
            for (let i = 0; i < word.length; i++) {
                inp[i].value=word[i]
            }
        }
    }
    if(correctG.size===letters.size){
        alert("Congrats!")
    }
})