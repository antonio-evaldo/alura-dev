import { $, projects } from './global.js';

// const template = $('template');

projects.forEach((project, key) => {
  const community = $('[community]');

  // const clone = template.content.cloneNode(true);

  // clone.querySelector('[project-title]').textContent = project.title;
  // clone.querySelector('[project-description]').textContent = project.description;
  // clone.querySelector('[code]').textContent = project.code;

  // clone.querySelector('[code]').classList.add(`language-${project.language}`);

  // clone.querySelector('[code-editor-wrapper]').style.backgroundColor = project.color;

  // community.appendChild(clone);

  const projectCardHTML = /* HTML */ `
    <div class="project-card" project-card>
      <div style="background-color: ${project.color}" class="code-editor-wrapper code-editor-wrapper_sm">
        <a href="#">
          <div class="code-editor code-editor_sm">
            <div class="mac-buttons mac-buttons_sm">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="code-wrapper" code-wrapper>
              <code code class="code code_sm language-${project.language}" aria-label="Editor de código">${project.code}</code>
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

  community.innerHTML += projectCardHTML;

  const addedCode = community.querySelectorAll('[code]')[key];
  hljs.highlightElement(addedCode);
});
