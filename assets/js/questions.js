let questionBox = document.querySelector('#questions')
let questionTitle = document.querySelector('#question-title')
let choicesEl = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')

let start = document.querySelector('#start')

start.addEventListener('click', startUp)

function startUp(){
  startScreen.innerHTML = ""
    questionBox.style.display ="block"
    renderQuestion()
}

function renderQuestion(){

    let currentQuestion = 0

    let questions = [

        {
           question: 'How many sons does goku have?',
           choices: [2,3,5,0],
           answer: 2 
        }

    ]

    questionTitle.innerHTML = questions[currentQuestion].question
    
        for(let i = 0; i < questions[currentQuestion].choices.length; i++){
            let pick = questions[currentQuestion].choices[i]

            let li = document.createElement('li')

            li.innerText = pick

            console.log(li)

            choicesEl.appendChild(li)

    
        }

}