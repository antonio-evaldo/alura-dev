const key = 'projects';

const projects = JSON.parse(window.localStorage.getItem(key)) ?? [];

export function getProjects() {
  return [...projects];
}

export function addProject(title, description, language, color, code) {
  const project = {
    id: generateId(),
    title,
    description,
    language,
    color,
    code
  }
  projects.push(project)
  setProjects();
}

export function updateProject(project) {
  const index = projects.findIndex(p => p.id === project.id);
  projects[index] = project;

  setProjects();
}

export function removeProject(projectId) {
  projects.filter(p => p.id !== projectId);
  setProjects();
}

function setProjects() {
  window.localStorage.setItem(key, JSON.stringify(projects));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}