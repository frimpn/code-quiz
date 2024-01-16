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

    let rightAnswer = questions[currentQuestion].answer

    questionTitle.innerHTML = questions[currentQuestion].question
    
        for(let i = 0; i < questions[currentQuestion].choices.length; i++){
            let pick = questions[currentQuestion].choices[i]

            let li = document.createElement('li')

            li.innerText = pick

            li.classList.add('choose')


            choicesEl.appendChild(li)

    
        }

        let checks = document.querySelectorAll('.choose')
        checks.forEach(check =>{
        
            check.addEventListener('click', function(){
                let answer = check.innerText

               checkAnswer(answer,rightAnswer)
            })
        })


    

}



function checkAnswer(answer,correct){
    
    console.log(answer)
    console.log()

    if(answer == correct){
    console.log('right')
    }else{
        console.log('wrong')
    }

    
}
