const form = document.querySelector('.questions')
const finalScore = document.querySelector('.final-score')

const correctAnswers = ['A','D','B','C']

let score = 0

const getUserAnswers = () => {
    const userAnswers = []

    correctAnswers.forEach((_,index) => {
        userAnswers.push(form[`inputAnswer${index + 1}`].value)
    }) 
    
    return userAnswers
}

const calcultateUserScore = userAnswers => {
    score = 0
    userAnswers.forEach((userAnswer,index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
}

const showFinalScore = () => {
    finalScore.style.display = 'flex'
    scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
}

const animationFinalScore = () => {
    let cont = 0
    const animation = setInterval(() => {        
        if (cont === score) {
            clearInterval(animation)
        } 
            finalScore.textContent = `Sua pontuação foi de: ${cont}%`
            cont++
    },10)  
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()
    calcultateUserScore(userAnswers)
    showFinalScore()
    animationFinalScore()
})
