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
    },
    {
        question: "ما هي وظيفة الورقة في النبات؟",
        options: ["التنفس", "التمثيل الضوئي", "امتصاص الماء", "حماية الجذر"],
        answer: 1
    },
    {
        question: "ما هو الجزء الذي ينتج البذور في النبات؟",
        options: ["الورقة", "الجذر", "الزهرة", "الساق"],
        answer: 2
    },
    {
        question: "ما هو الجزء الذي يستخدم للنقل في النبات؟",
        options: ["الخشب", "اللحاء", "الجذر", "القصيبات"],
        answer: 0
    },
    {
        question: "ما هو الجزء الذي يحتوي على الكلوروفيل؟",
        options: ["الجذر", "الورقة", "الساق", "الزهرة"],
        answer: 1
    },
    {
        question: "ما هي وظيفة الجذر في النبات؟",
        options: ["امتصاص الماء والمعادن", "إنتاج الغذاء", "التنفس", "حماية الساق"],
        answer: 0
    },
    {
        question: "ما هي العملية التي تستخدم الضوء لإنتاج الغذاء؟",
        options: ["التنفس", "التمثيل الضوئي", "الانقسام الخلوي", "الإخصاب"],
        answer: 1
    },
    {
        question: "ما هو الجزء الذي يحتوي على الأوراق والسيقان؟",
        options: ["الجذر", "البذرة", "الزهرة", "النبات الكامل"],
        answer: 3
    },
    {
        question: "ما هو الجزء الذي ينمو تحت الأرض في النبات؟",
        options: ["الساق", "الورقة", "الجذر", "الزهرة"],
        answer: 2
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
