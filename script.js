const questions = [
    {
        question: "ما هو التركيب الذي يحمي جذور النبات؟",
        options: ["الطبقة الجلدية", "الجذر", "البشرة", "القصيبات"],
        answer: 0
    },
    {
        question: "ما هو الجزء المسؤول عن نقل الغذاء في النبات؟",
        options: ["الخشب", "اللحاء", "القصيبات", "الجذر"],
        answer: 1
    }
];

function loadQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.innerText = q.question;
        questionDiv.appendChild(questionText);
        
        q.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = i;
            optionDiv.appendChild(input);
            
            const label = document.createElement('label');
            label.innerText = option;
            optionDiv.appendChild(label);
            
            questionDiv.appendChild(optionDiv);
        });
        
        questionsContainer.appendChild(questionDiv);
    });
}

function checkAnswers() {
    const finishButton = document.getElementById('finish-button');
    if (finishButton.disabled) return;

    finishButton.disabled = true;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        const result = document.createElement('span');
        
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            result.innerText = " (صحيح)";
            result.style.color = "green";
        } else {
            result.innerText = " (خطأ)";
            result.style.color = "red";
        }
        
        const questionDiv = document.querySelector(`.question:nth-child(${index + 1})`);
        questionDiv.appendChild(result);
    });
}

window.onload = loadQuestions;
