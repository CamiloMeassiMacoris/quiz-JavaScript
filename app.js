const correctAnswers = ['A','D','B','C']
const form = document.querySelector('.questions')
const finalResult = document.querySelector('.finalResult')

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputAnswer1.value,
        form.inputAnswer2.value,
        form.inputAnswer3.value,
        form.inputAnswer4.value,
    ]

    let score = 0
    let cont = 0

    const calculateScore = (answer,index) =>{
        if(answer === correctAnswers[index]){
            score += 25
        }
    }
    const printScoreOnScreen = () => {
        if(cont === score){
            clearInterval(pontuationAnimation)
        } 
        finalResult.textContent = `Sua pontuação foi de: ${cont}%`
        cont++
    }
    
    userAnswers.forEach(calculateScore)

    finalResult.style.display = 'flex'

    scrollTo(0,0)

    const pontuationAnimation = setInterval(printScoreOnScreen,10)
    
    
})