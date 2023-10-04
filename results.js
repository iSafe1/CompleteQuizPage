document.addEventListener('DOMContentLoaded', function () {
    const resultText = document.getElementById('result-text');

    // Get the score from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');

    if (score !== null) {
        const resultPercentage = (score / 3) * 100; // Assuming there are 3 questions
        resultText.innerHTML = `You scored ${score}/3. (${resultPercentage.toFixed(2)}%)`;
    } else {
        resultText.innerHTML = 'No score available.';
    }
});
