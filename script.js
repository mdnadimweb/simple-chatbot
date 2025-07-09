function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();
  if (!userText) return;

  displayMessage(userText, "user");
  inputField.value = "";

  setTimeout(() => {
    const botReply = getBotReply(userText);
    displayMessage(botReply, "bot");
  }, 500);
}

function displayMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (lower.includes("price") || lower.includes("cost")) {
    return "Our pricing depends on your needs. Can you tell me more?";
  } else if (lower.includes("bye")) {
    return "Goodbye! Have a great day.";
  } else {
    return "I'm just a simple chatbot. Can you rephrase that?";
  }
}
