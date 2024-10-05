function checkAnswer() {
    // correct answer
    const correctAnswer = "4";

    // user’s selected answer using document.querySelector
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    // Checking if a selection was made
    if (!selectedRadio) {
        document.getElementById('feedback').textContent = 'Please select an answer!';
        return;
    }

    // Store the user's answer
    const userAnswer = selectedRadio.value;

    // Compare the user’s answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Well done.';
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
