const questions = {
    matematica: [
        {
            question: "Quanto é 5 + 7?",
            answers: [
                { text: "10", correct: false },
                { text: "12", correct: true },
                { text: "11", correct: false },
                { text: "13", correct: false }
            ]
        },
        {
            question: "Quanto é 9 × 3?",
            answers: [
                { text: "27", correct: true },
                { text: "26", correct: false },
                { text: "30", correct: false },
                { text: "24", correct: false }
            ]
        }
    ],
    ciencias: [
        {
            question: "Qual planeta é conhecido como o Planeta Vermelho?",
            answers: [
                { text: "Terra", correct: false },
                { text: "Marte", correct: true },
                { text: "Vênus", correct: false },
                { text: "Júpiter", correct: false }
            ]
        },
        {
            question: "Qual é o maior órgão do corpo humano?",
            answers: [
                { text: "Coração", correct: false },
                { text: "Pele", correct: true },
                { text: "Pulmão", correct: false },
                { text: "Fígado", correct: false }
            ]
        }
    ]
};


let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

 HTML
const categorySelection = document.getElementById('category-selection');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('time');


function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    categorySelection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    startTimer();
    const questionData = questions[currentCategory][currentQuestionIndex];
    questionElement.innerText = questionData.question;
animação
    setTimeout(() => questionElement.classList.remove('fade-in'), 500); Remove 

    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(timer);
    timeLeft = 10;
    timerElement.innerText = timeLeft;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextButton.classList.remove('hidden');
            disableButtons();
        }
    }, 1000);
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    setStatusClass(selectedButton, correct);
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });
    clearInterval(timer);
    nextButton.classList.remove('hidden');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function disableButtons() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    scoreElement.innerText = 'Você acertou ${score} de ${questions[currentCategory].length} perguntas!';
    resultContainer.classList.add('fade-in'); 
    setTimeout(() => resultContainer.classList.remove('fade-in'), 500); 
}
function restartQuiz() {
    categorySelection.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
}


function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
    }
    setStatusClass(selectedButton, correct);
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });
    clearInterval(timer);
    nextButton.classList.remove('hidden');

   
    if (correct) {
        selectedButton.classList.add('correct-animation'); 
    } else {
        selectedButton.classList.add('wrong-animation'); 
    }
}

function endQuiz() {
    clearInterval(timer);
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `Você acertou ${score} de ${questions[currentCategory].length} perguntas!`;
    
   
    saveScore(score);

    showRanking();
}

function saveScore(newScore) {
   
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

  
    scores.push(newScore);

    scores.sort((a, b) => b - a);

    
    scores = scores.slice(0, 5);
 
    localStorage.setItem('scores', JSON.stringify(scores));
}
function showRanking() {
    const rankingElement = document.createElement('div');
    rankingElement.innerHTML = `<h3>Ranking:</h3><ul id="ranking-list"></ul>`;
    
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    
    const rankingList = document.getElementById('ranking-list');
    scores.forEach(score => {
        const li = document.createElement('li');
        li.innerText = `Pontuação: ${score}`;
        rankingList.appendChild(li);
    });

    resultContainer.appendChild(rankingElement);
}