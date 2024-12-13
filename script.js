// This function calculates the quiz results
function calculateResult() {
    // Object containing correct answers for each question
    const correctAnswers = {
        q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd',
        q6: 'c', q7: 'c', q8: 'b', q9: 'c', q10: 'a'
    };
    
    // Initialize score counter
    let score = 0;
    // Loop through all 10 questions
    for (let i = 1; i <= 10; i++) {
        // Get the selected radio button for current question
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        // If selected answer matches correct answer, increment score
        if (selected?.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }
    
    // Calculate percentage (each question worth 10%)
    const percentage = score * 10;
    // Initialize grade variable
    let grade = 'F';
    
    // Determine letter grade based on percentage
    if (percentage >= 90) grade = 'A';
    else if (percentage >= 80) grade = 'B';
    else if (percentage >= 70) grade = 'C';
    else if (percentage >= 60) grade = 'D';

    // Show results in alert box
    alert(`Quiz Results\nScore: ${score}/10\nPercentage: ${percentage}%\nGrade: ${grade}`);
}