// Chatbot elements
const chatbot = document.getElementById('chatbot');
const toggleBtn = document.getElementById('chatbot-toggle');
const closeBtn = document.getElementById('chatbot-close');
const sendBtn = document.getElementById('chatbot-send');
const input = document.getElementById('chatbot-input');
const messages = document.getElementById('chatbot-messages');

// Show chatbot
toggleBtn.addEventListener('click', () => {
  chatbot.classList.add('open');
  chatbot.setAttribute('aria-hidden', 'false');
  input.focus();
  toggleBtn.style.display = 'none';
});

// Close chatbot
closeBtn.addEventListener('click', () => {
  chatbot.classList.remove('open');
  chatbot.setAttribute('aria-hidden', 'true');
  toggleBtn.style.display = 'flex';
  toggleBtn.focus();
});

// Send message events
sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function appendMessage(message, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-message', sender);
  msgDiv.textContent = message;
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

function botResponse(userText) {
  userText = userText.toLowerCase();

  if (userText.includes('hello') || userText.includes('hi')) {
    return 'Hello! How can I assist you today?';
  }
  if (userText.includes('services')) {
    return 'We offer web development, mobile apps, and AI chatbot solutions.';
  }
  if (userText.includes('price') || userText.includes('cost')) {
    return 'Our pricing varies by project scope. Please contact us for a custom quote.';
  }
  if (userText.includes('bye') || userText.includes('thank')) {
    return 'Thank you for chatting with us! Have a great day!';
  }
  return "Sorry, I didn't quite get that. Could you please rephrase?";
}

function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;
  appendMessage(userText, 'user');
  input.value = '';

  setTimeout(() => {
    const reply = botResponse(userText);
    appendMessage(reply, 'bot');
  }, 600);
}

// ATS Resume Checker Logic (simple dummy simulation)
const atsForm = document.getElementById('ats-form');
const atsResult = document.getElementById('ats-result');

atsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  atsResult.hidden = true;
  atsResult.textContent = 'Checking your resume...';

  const fileInput = document.getElementById('resume-upload');
  const file = fileInput.files[0];

  if (!file) {
    atsResult.textContent = 'Please upload a resume file.';
    atsResult.hidden = false;
    return;
  }

  // Simulate checking delay
  setTimeout(() => {
    // Dummy random score from 60 to 95
    const score = Math.floor(Math.random() * 35) + 60;
    atsResult.textContent = `Your ATS Compatibility Score: ${score} / 100. ${
      score > 85
        ? 'Great job! Your resume is ATS-friendly.'
        : 'Consider using more keywords and simple formatting.'
    }`;
    atsResult.hidden = false;
    atsResult.focus();
  }, 1500);
});
