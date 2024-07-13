// Define possible answers
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Function to generate a random answer
function generateAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

// Function to handle button click
function shakeBall() {
    const answerElement = document.getElementById("answer");
    const randomAnswer = generateAnswer();
    answerElement.textContent = randomAnswer;
}

// Event listener for the shake button
document.getElementById("shake-button").addEventListener("click", shakeBall);
