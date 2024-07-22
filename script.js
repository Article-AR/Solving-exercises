document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "ما هو العضو المسؤول عن إنتاج الأنسولين في الجسم؟",
            options: ["الكبد", "البنكرياس", "الطحال", "الكلى"],
            answer: "البنكرياس"
        },
        {
            question: "أي من الآتي يعتبر من البروتينات؟",
            options: ["الجلوكوز", "الأدينين", "الأنسولين", "السليلوز"],
            answer: "الأنسولين"
        },
        {
            question: "ما هي الوحدة الأساسية للبناء في الكائنات الحية؟",
            options: ["النواة", "الخلية", "الأنسجة", "الأعضاء"],
            answer: "الخلية"
        },
        {
            question: "ما هي المرحلة التي يتم فيها تبادل المادة الوراثية بين الكروموسومات أثناء الانقسام الميوزي؟",
            options: ["الطور التمهيدي الأول", "الطور الاستوائي الأول", "الطور الانفصالي الأول", "الطور النهائي الأول"],
            answer: "الطور التمهيدي الأول"
        },
        {
            question: "أي من الآتي يُعتبر مثالاً على التكاثر اللاجنسي في النباتات؟",
            options: ["التلقيح", "الإخصاب", "التكاثر بالترقيد", "التكاثر عن طريق البذور"],
            answer: "التكاثر بالترقيد"
        },
        {
            question: "ما هي العملية التي يتم من خلالها تحويل الضوء إلى طاقة كيميائية في النباتات؟",
            options: ["التنفس الخلوي", "التمثيل الضوئي", "التخمر", "الانقسام المتساوي"],
            answer: "التمثيل الضوئي"
        },
        {
            question: "أي من العوامل التالية يُعتبر غير حيوي في البيئة؟",
            options: ["النبات", "الحيوانات", "الصخور", "البكتيريا"],
            answer: "الصخور"
        },
        {
            question: "ما هو الحمض النووي الذي يحمل الشفرة الوراثية من النواة إلى الريبوسومات؟",
            options: ["DNA", "rRNA", "mRNA", "tRNA"],
            answer: "mRNA"
        },
        {
            question: "ما هي المرحلة التي تتضاعف فيها الكروموسومات خلال دورة الخلية؟",
            options: ["الطور البيني", "الطور التمهيدي", "الطور الاستوائي", "الطور الانفصالي"],
            answer: "الطور البيني"
        },
        {
            question: "أي من الآتي يُعتبر مثالاً على الانتحاء الضوئي في النباتات؟",
            options: ["تحرك الجذور نحو الماء", "انحناء السيقان نحو الضوء", "استجابة النبات للمس", "نمو النبات في التربة الصخرية"],
            answer: "انحناء السيقان نحو الضوء"
        }
    ];

    const questionsContainer = document.getElementById('questions-container');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `السؤال ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');

        q.options.forEach(option => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('option');
            optionItem.textContent = option;

            optionItem.addEventListener('click', () => {
                document.querySelectorAll(`.question:nth-child(${index + 1}) .option`).forEach(item => {
                    item.style.backgroundColor = '#e0e0e0';
                });
                optionItem.style.backgroundColor = '#b3d9ff';
                q.selected = option;
            });

            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        questionsContainer.appendChild(questionDiv);
    });

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', () => {
        const scoreDiv = document.getElementById('score');

        let correctCount = 0;

        questions.forEach((q, index) => {
            const questionDiv = document.querySelector(`.question:nth-child(${index + 1})`);
            const resultDiv = document.createElement('div');

            if (q.selected === q.answer) {
                correctCount++;
                resultDiv.classList.add('correct');
                resultDiv.textContent = `إجابة صحيحة: ${q.selected}`;
            } else {
                resultDiv.classList.add('incorrect');
                resultDiv.textContent = `إجابة خاطئة: ${q.selected || 'لم تُحدد إجابة'} (الإجابة الصحيحة: ${q.answer})`;
            }

            questionDiv.appendChild(resultDiv);
        });

        scoreDiv.textContent = `عدد الإجابات الصحيحة: ${correctCount} من ${questions.length}`;
        document.getElementById('results-container').style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight);

        // تعطيل زر إنهاء بعد الضغط عليه
        submitBtn.disabled = true;
    });
});
