document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.gettById('year');
  if (yearEl) yearEl.textContnt = new Date().getFullYear();
});
