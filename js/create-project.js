import { $ } from './global.js';
import { addProject } from './projects.js';

const hljsButton = $('[highlight-button]');
const codeWrapper = $('[code-wrapper]');
const select = $('[language-options]');

let codeElement = $('[code]');

hljs.highlightElement(codeElement);

hljsButton.addEventListener('click', () => {
  const language = select.value;
  const codeText = codeWrapper.innerText;

  codeWrapper.innerHTML = /* HTML */ `<code
    class="code language-${language}"
    contenteditable="true"
    aria-label="Editor de código"
  ></code>`;

  codeElement = codeWrapper.querySelector('code');
  codeElement.textContent = codeText;

  hljs.highlightElement(codeElement);
});

const inputColor = $('[inputColor]');
const codeEditorWrapper = $('[codeEditorWrapper]');

inputColor.addEventListener('input', event => {
  codeEditorWrapper.style.backgroundColor = event.target.value;
});

const form = $('[form]');

form.addEventListener('submit', event => {
  event.preventDefault();

  addProject(
    form.title.value,
    form.description.value,
    form.language.value,
    form.color.value,
    codeWrapper.innerText,
  );
  
  alert('Projeto adicionado com sucesso!');
  window.location.href = '../community.html';
});