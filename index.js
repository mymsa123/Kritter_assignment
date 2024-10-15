function normalizeString() {
    let input = document.getElementById('inputString').value;

    let trimmedInput = input.trim();

    let alphanumericInput = trimmedInput.replace(/[^a-zA-Z0-9\s]/g, '');

    let singleSpacedInput = alphanumericInput.replace(/\s+/g, ' ');

    let camelCaseString = singleSpacedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    document.getElementById('output').textContent = camelCaseString;
}

const qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

function askChatbot() {
    let userQuestion = document.getElementById('userQuestion').value.toLowerCase().trim();
    
    userQuestion = userQuestion.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, ' ');

    let bestMatch = null;
    let bestMatchScore = 0;

    qaPairs.forEach(pair => {
        let predefinedQuestion = pair.question.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, ' ');
        let matchScore = calculateWordMatchScore(predefinedQuestion, userQuestion);

        if (matchScore > bestMatchScore) {
            bestMatchScore = matchScore;
            bestMatch = pair;
        }
    });

    let chatbotResponse = bestMatch ? bestMatch.answer : "Sorry, I don't understand the question.";
    document.getElementById('chatbotOutput').textContent = chatbotResponse;
}

function calculateWordMatchScore(predefinedQuestion, userQuestion) {
    let predefinedWords = predefinedQuestion.split(' ');
    let userWords = userQuestion.split(' ');

    let commonWordCount = predefinedWords.filter(word => userWords.includes(word)).length;

    return commonWordCount;
}
