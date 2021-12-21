const active = document.querySelector('.menu-item:not(.menu-item_inactive)');

active.addEventListener('click', event => {
  event.preventDefault();
});

const hljsButton = document.querySelector('[highlight-button]');
const codeWrapper = document.querySelector('[code-wrapper]');
const select = document.querySelector('[language-options]');

let codeElement = document.querySelector('[code]');

hljs.highlightElement(codeElement);

hljsButton.addEventListener('click', () => {
  const language = select.value;

  const codeText = codeWrapper.innerText;

  codeWrapper.innerHTML = `<code
    class="code language-${language}"
    contenteditable="true"
    aria-label="Editor de código"
  ></code>`;

  codeElement = codeWrapper.querySelector('code');

  codeElement.textContent = codeText;

  hljs.highlightElement(codeElement);
});

const inputColor = document.querySelector('[inputColor]');
const codeEditorWrapper = document.querySelector('[codeEditorWrapper]');

inputColor.addEventListener('input', event => {
  codeEditorWrapper.style.backgroundColor = event.target.value;
});