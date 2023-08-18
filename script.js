const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: 'O nome correto do hidrocarboneto ramificado, cuja fórmula está esquematizada a seguir é:',
        image: 'pergunta1.jpg',
        answers: [
            { text: '3,4-dimetil-octano', correct: true },
            { text: '3,4-dietil-octano', correct: false },
            { text: '3,4-dietil-octeno', correct: false },
            { text: '3,4-dimetil-octeno', correct: false }
        ]
    },
    
    {
        question: 'Alcinos são hidrocarbonetos:',
        image: 'pergunta2.jpg',
        answers: [
            { text: 'alifáticos insaturados com dupla ligação.', correct: false },
            { text: 'alifáticos saturados.', correct: false },
            { text: 'alifáticos insaturados com tripla ligação.', correct: true },
            { text: 'alicíclicos insaturados com tripla ligação.', correct: false }
        ]
    },

    {
        question: 'O octano é um dos principais constituintes da gasolina, que é uma mistura de hidrocarbonetos. A fórmula molecular do octano é:',
        image: 'pergunta3.jpg',
        answers: [
            { text: 'C18H38', correct: false },
            { text: 'C12H24', correct: false },
            { text: 'C8H16', correct: false },
            { text: 'C8H18', correct: true }
        ]
    }, 

    {
        question: 'A fórmula molecular do 2,3 - dimetil butano, é:',
        image: 'pergunta4.jpg',
        answers: [
            { text: 'C6H12', correct: false },
            { text: 'C6H14', correct: true },
            { text: 'C4H10', correct: false },
            { text: 'C4H8', correct: false }
        ]
    },

    {
        question: 'A substância de fórmula C8H16 representa um:',
        image: 'pergunta5.jpg',
        answers: [
            { text: 'alcano de cadeia aberta.', correct: false },
            { text: 'alcino de cadeia fechada.', correct: false },
            { text: 'alceno de cadeia aberta.', correct: true },
            { text: 'alcino de cadeia aberta.', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = `Pergunta ${currentQuestionIndex + 1}: ${question.question}`;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(correct) {
    if (correct) {
        score += 10;
        scoreElement.textContent = score;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            questionContainer.innerHTML = '<h2>Quiz concluído!</h2>';
        }
    } else {
        questionContainer.innerHTML = '<h2>Você errou! Tente novamente.</h2>';
    }
    
}
