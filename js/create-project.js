import { $, addProject } from './global.js';

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

  const project = {
    title: form.title.value,
    description: form.description.value,
    language: form.language.value,
    color: form.color.value,
    code: codeWrapper.innerText,
  }

  addProject(project);
  alert('Projeto adicionado com sucesso!');
  window.location.href = '../community.html';
});