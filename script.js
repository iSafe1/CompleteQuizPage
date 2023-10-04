document.addEventListener('DOMContentLoaded', function () {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const timerText = document.getElementById('timer');
    const nextButton = document.getElementById('next-button');
    const resultText = document.getElementById('result-text');

    let currentQuestionIndex = 0;
    let score = 0;
    const questions = [
        {
            question: 'Can We Share Our Gmail Password With Friends?',
            options: ['YES', 'NO'],
            answer: 'NO',
        },
        {
            question: 'Is it safe to use the same password for multiple online accounts??',
            options: ['YES', 'NO'],
            answer: 'NO',
        },
        {
            question: 'Should you tell anyone your home address, phone number, or school name while chatting with someone online, even if they say they are a friend??',
            options: ['YES', 'NO'],
            answer: 'NO',
        },
    ];

    function displayQuestion(index) {
        const currentQuestion = questions[index];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="answer" value="${option}">${option}`;
            optionsContainer.appendChild(label);
        });

        startTimer();
    }

    function startTimer() {
        let timeLeft = 5;
        timerText.textContent = `Time Left: ${timeLeft} seconds`;

        const timerInterval = setInterval(() => {
            timeLeft--;
            timerText.textContent = `Time Left: ${timeLeft} seconds`;

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                nextQuestion();
            }
        }, 1000);
    }

    function nextQuestion() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            if (selectedOption.value === questions[currentQuestionIndex].answer) {
                score++;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                // Redirect to the results page with the score as a URL parameter
                window.location.href = `result.html?score=${score}`;
            }
        } else {
            alert('Please select an answer.');
        }
    }

    nextButton.addEventListener('click', nextQuestion);

    // Start the quiz
    displayQuestion(currentQuestionIndex);
});
