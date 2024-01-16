let high = document.getElementById('highscores')


let resultName =  localStorage.getItem('initials')

  let resultScore = localStorage.getItem('score')
  //console.log(resultScore)

  
 let li = document.createElement('li')
li.textContent = `${resultName} : ${resultScore}`

high.appendChild(li)