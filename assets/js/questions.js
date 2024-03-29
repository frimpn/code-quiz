let questionBox = document.querySelector('#questions')
let questionTitle = document.querySelector('#question-title')
let choicesEl = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')
let showResult = document.querySelector('#show-result')
let endScreen = document.getElementById('end-screen')
 let button = document.getElementById('submit')
 let timer = document.getElementById('time')
 //let initials = document.querySelector('#initials').value.trim()

let start = document.querySelector('#start')
let currentQuestion = 0
let score = 0
let count = 60
let upSpeed = 1

start.addEventListener('click', startUp)

function startUp(){
  startScreen.innerHTML = ""
    questionBox.style.display ="block"
    renderQuestion()
    startTimer()
}

function renderQuestion(){
   

    let questions = [

        {
           question: 'How many sons does goku have?',
           choices: [2,3,5,0],
           answer: 2 
        },
        {
            question: 'who gave luffy his straw hat?',
            choices: ['buggy','shanks','whitebeard','kaido'],
            answer: 'shanks'

        },
        {
            question:'What is the last airbenders name?',
            choices: ['aang','zuko','katara','toph'],
          answer: 'aang'

        },
        {
            question: 'How many squads are there in the soul society?',
            choices: [30,13,11,3],
            answer: 13
        }, 
        {
            question: 'What is the power system in hunterxhunter?',
             choices: ['chakara','haki','nen','trion'],
             answer: 'nen'
            
        },
        {
            question: 'who is the older sibling in fullmetal alchemist?',
            choices: ['edward','alphonse'],
            answer: 'edward'
        },
        {
            question: 'how many dragon balls do you need to collect?',
            choices: [4,10,7,4,6],
            answer: 7

        },
        {
            question:'whats the name of the fruit that luffy ate?',
            choices:['gum-gum','bomu-bomu','doru-doru','yami-yami'],
            answer: 'gum-gum'
        },
        {
            question:'what is astas goal',
            choices: ['hokage','pirate-king','hunter','wizard-king'],
            answer: 'wizard-king'
        },
        {
            question:'what anime plot is about american football',
            choices:['eyeshield-21','slam-dunk','haikyuu','prince-of-tennis'],
            answer: 'eyeshield-21'
        },
        {
            question: 'Was Naruto a jonin ',
            choices:['true','false'],
            answer:'false'
        }



    


    ]



if(currentQuestion === questions.length){
    currentQuestion--
    questionBox.style.display = 'none'
    showEnd()
}


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
    


    if(answer == correct){
        score++
        localStorage.setItem('score',score)
        currentQuestion++
        showResult.innerText = 'correct!'
        showResult.setAttribute('style','margin-top: 60px; color:green; font-size:50px')
        removeChoices()
        renderQuestion()
    
    

    
    }else{
        currentQuestion++
        showResult.innerText = 'Wrong!'
        showResult.setAttribute('style','margin-top: 60px; color:red; font-size:50px')
        removeChoices()
        renderQuestion()
        upSpeed = 10
    }



}


function removeChoices(){
    let remove = document.querySelectorAll('.choose')
    remove.forEach(getRid =>{
     getRid.classList.add('hide')
    })

    
}

function showEnd(){

    endScreen.classList.remove('hide')
    let finalScore = document.querySelector('#final-score')
     finalScore.textContent = localStorage.getItem('score')
     
     
}

button.addEventListener('click', begin)


function begin(event){

    event.preventDefault()

    
    let initials = document.querySelector('#initials').value.trim()




 localStorage.setItem('initials',initials)
    

}

function startTimer(){
    timer.innerText = count

    let clock = setInterval(()=>{
        count = count - upSpeed
        timer.innerText =count

        if(count <= 0){
         timer.innerText = 0
            clearInterval(clock)
            questionBox.style.display = 'none'
            showEnd()
        }

    },1000)

    console.log(upSpeed)
} 

