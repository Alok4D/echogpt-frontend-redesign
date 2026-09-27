document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('prompt-input');
  const sendBtn = document.getElementById('send-btn');
  const messagesList = document.getElementById('messages-list');
  const welcomeBox = document.getElementById('welcome-box');
  const modelSelect = document.getElementById('model-select');
  const newChatBtn = document.getElementById('new-chat-btn');

  function appendMessage(role, text) {
    if (welcomeBox) welcomeBox.style.display = 'none';
    const bubble = document.createElement('div');
    bubble.className = `msg-bubble ${role === 'user' ? 'msg-user' : 'msg-ai'}`;
    bubble.textContent = text;
    messagesList.appendChild(bubble);
    messagesList.scrollTop = messagesList.scrollHeight;
  }

  function handleSend(text = input.value) {
    if (!text.trim()) return;
    appendMessage('user', text);
    input.value = '';

    const modelName = modelSelect.value;
    setTimeout(() => {
      appendMessage('assistant', `[${modelName}]: Understood. Here is the response analyzing your request regarding "${text}".`);
    }, 600);
  }

  sendBtn.addEventListener('click', () => handleSend());
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  document.querySelectorAll('.grid-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.getAttribute('data-prompt');
      handleSend(prompt);
    });
  });

  document.querySelectorAll('.sugg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleSend(btn.textContent);
    });
  });

  newChatBtn.addEventListener('click', () => {
    messagesList.innerHTML = '';
    if (welcomeBox) welcomeBox.style.display = 'flex';
  });
});
