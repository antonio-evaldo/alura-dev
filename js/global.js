export const $ = document.querySelector.bind(document);

const active = $('.menu-item:not(.menu-item_inactive)');

active.addEventListener('click', event => {
  event.preventDefault();
});

const key = 'projects';

export const projects = JSON.parse(window.localStorage.getItem(key)) ?? [];

export function addProject(project) {
  projects.push(project)
  window.localStorage.setItem(key, JSON.stringify(projects));
}