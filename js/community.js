import { $ } from './global.js';
import { getProjects } from './projects.js';

const projects = getProjects();

projects.forEach((project, key) => {
  const community = $('[community]');

  const projectCardHTML = (project, small = false) => /* HTML */ `
    <div class="project-card" project-card>
      <div style="background-color: ${project.color}" class="code-editor-wrapper code-editor-wrapper_card ${small && 'code-editor-wrapper_sm'}">
        <a href="#">
          <div class="code-editor code-editor_card ${small && 'code-editor_sm'}">
            <div class="mac-buttons ${small && 'mac-buttons_sm'}">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="code-wrapper" code-wrapper>
              <code code class="code ${small && 'code_sm'} language-${project.language}" aria-label="Editor de código">${project.code}</code>
            </div>

          </div>
        </a>
      </div>

      <div class="card-content">
        <a href="#">
          <h2>${project.title}</h2>
        </a>
        <p>${project.description}</p>
      </div>

      <div class="card-actions">
        <div class="actions">
          <div class="action_button">
            <i class="fas fa-comment"></i>
            <span>9</span>
          </div>
          <div class="action_button">
            <i class="fas fa-heart"></i>
            <span>9</span>
          </div>
        </div>

        <a href="#" class="author author_sm">
          <img src="assets/images/author.svg" alt="Foto do autor">
          <span>@Harry</span>
        </a>
      </div>
    </div>
  `;

  community.innerHTML += projectCardHTML(project, true);

  const addedCode = community.querySelectorAll('[code]')[key];
  hljs.highlightElement(addedCode);
});
