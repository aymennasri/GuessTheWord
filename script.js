const inputs = document.querySelector(".inputs")
reset=document.querySelector(".btn")
hintIn=document.querySelector("#hint")
guess=document.querySelector("#numL")
wrong=document.querySelector("#wrongl")

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

let word
let guessN
let letters = new Set()
let correctG = new Set()

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