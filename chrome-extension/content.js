// EchoGPT Floating Selection Toolbar
let toolbar = null;
let resultBox = null;

function createToolbar() {
  if (toolbar) return;
  toolbar = document.createElement('div');
  toolbar.id = 'echogpt-floating-toolbar';
  toolbar.innerHTML = `
    <button class="egpt-btn" data-action="explain">⚡ Explain</button>
    <button class="egpt-btn" data-action="summarize">📄 Summarize</button>
    <button class="egpt-btn" data-action="translate">🌐 Translate</button>
    <button class="egpt-btn" data-action="code">💻 Code</button>
  `;
  document.body.appendChild(toolbar);

  toolbar.querySelectorAll('.egpt-btn').forEach(btn => {
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      handleAction(action);
    });
  });
}

function handleAction(action) {
  const selection = window.getSelection().toString().trim();
  if (!selection) return;

  if (!resultBox) {
    resultBox = document.createElement('div');
    resultBox.id = 'echogpt-result-popup';
    document.body.appendChild(resultBox);
  }

  const rect = toolbar.getBoundingClientRect();
  resultBox.style.top = `${window.scrollY + rect.bottom + 8}px`;
  resultBox.style.left = `${window.scrollX + rect.left}px`;
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div class="egpt-res-header">
      <strong>EchoGPT ${action.toUpperCase()}</strong>
      <button id="egpt-close-res">✕</button>
    </div>
    <div class="egpt-res-body">
      Thinking with Claude 3.5 Sonnet...
    </div>
  `;

  document.getElementById('egpt-close-res').onclick = () => {
    resultBox.style.display = 'none';
  };

  setTimeout(() => {
    const body = resultBox.querySelector('.egpt-res-body');
    if (action === 'explain') {
      body.innerHTML = `<strong>Analysis:</strong> "${selection.slice(0, 40)}..." represents a key architectural concept. In short: it abstracts complexity to maximize performance.`;
    } else if (action === 'summarize') {
      body.innerHTML = `<strong>Summary:</strong> Key takeaway: ${selection.slice(0, 60)}...`;
    } else if (action === 'translate') {
      body.innerHTML = `<strong>Translation (ES):</strong> Traducido: "${selection.slice(0, 50)}..."`;
    } else {
      body.innerHTML = `<code>// Generated snippet\nconsole.log("${selection.slice(0, 20)}");</code>`;
    }
  }, 500);
}

document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection().toString().trim();
  if (selection.length > 5) {
    createToolbar();
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();
    toolbar.style.top = `${window.scrollY + rect.top - 42}px`;
    toolbar.style.left = `${window.scrollX + rect.left}px`;
    toolbar.style.display = 'flex';
  } else {
    if (toolbar) toolbar.style.display = 'none';
  }
});
