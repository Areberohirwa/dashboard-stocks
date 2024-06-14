// console.log("main");

const askBtn = document.querySelector(".ask-btn");
const askInput = document.querySelector(".ask-input");
const container = document.querySelector(".list-group-2");


// Function to enable/disable the button based on input value
function toggleButtonState() {
    const text = askInput.value;
    if (text.length !== 0) {
        askBtn.classList.remove("disabled");
    } else {
        askBtn.classList.add("disabled");
    }
}

// Event listener for input field
askInput.addEventListener("input", toggleButtonState);

// Call the function initially to set the initial state of the button
toggleButtonState();

function addChatMessage(userInput, answerText) {
    const userHtml = `
        <li class="user-message align-self-end list-group-item border border-0 d-flex flex-row bg-transparent">
            <p class="bg-warning rounded-top rounded-start p-2 align-self-end mt-1 text-white fw-medium">${userInput}</p>
            <i class="bi bi-arrow-up-circle-fill bg-info px-1 fs-5 ms-2 align-self-start mt-1 rounded-end rounded-top"></i>
        </li>
    `;
    const answerHtml = `
    <li class="chatbot align-self-start list-group-item border border-0 d-flex flex-row bg-transparent">
    <i class="bi bi-android bg-info px-1 fs-5 me-2 align-self-start mt-1 rounded-start rounded-top"></i>
    <p class="bg-dark rounded-top rounded-end p-2 align-self-end mt-1 text-white fw-medium">${answerText}</p>
    </li>
    `;

    return userHtml + answerHtml;
}

function generateAnswer(userInput) {
    let answer;

    // Check user input and provide corresponding answers
    if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
        answer = "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        answer = "I'm just a bot, but thanks for asking!";
    } else if (userInput.toLowerCase().includes("help")) {
        answer = "Sure, I'll be happy to help. What do you need assistance with?";
    } else {
        answer = "I'm sorry, I didn't understand that. Can you please rephrase?";
    }

    return answer;
}

askBtn.addEventListener("click", function() {
    const userInput = askInput.value;
    // You would replace this with the actual answer from the chatbot
    const answerText = generateAnswer(userInput);

    const html = addChatMessage(userInput, answerText);

    // Append the user and answer messages to the chat messages container
    container.insertAdjacentHTML("beforeend", html);
    
    // Clear the input field
    askInput.value = "";
    toggleButtonState();
});