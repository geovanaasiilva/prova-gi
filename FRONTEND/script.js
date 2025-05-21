// Perguntas separadas por categoria
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

// Variáveis de controle
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// Pegando os elementos HTML
const categorySelection = document.getElementById('category-selection');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('time');

// Função para iniciar o quiz
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    categorySelection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

// Função para mostrar uma pergunta
function showQuestion() {
    resetState();
    startTimer();
    const questionData = questions[currentCategory][currentQuestionIndex];
    questionElement.innerText = questionData.question;

    questionElement.classList.add('fade-in'); // Adiciona animação
    setTimeout(() => questionElement.classList.remove('fade-in'), 500); // Remove depois de 0.5s

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

// Função para resetar o estado antes de mostrar a próxima pergunta
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

// Função para o timer
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

// Função para escolher a resposta
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

// Função para mudar a cor dos botões
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

// Limpa classes
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Desabilita todos os botões
function disableButtons() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Função para terminar o quiz
function endQuiz() {
    clearInterval(timer);
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    scoreElement.innerText = 'Você acertou ${score} de ${questions[currentCategory].length} perguntas!';
    resultContainer.classList.add('fade-in'); // Animação no resultado
    setTimeout(() => resultContainer.classList.remove('fade-in'), 500); // Remove depois de 0.5s
}

// Função para recomeçar o quiz
function restartQuiz() {
    categorySelection.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
}