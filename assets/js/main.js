/* ============================================================
   Общие скрипты сайта: меню, тосты, мелкие помощники
   ============================================================ */

/* ---------- Мобильное меню ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  /* ---------- Активная ссылка по имени файла ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.split('/').pop() === path) a.classList.add('active');
  });

  /* ---------- Ученик: запоминаем ФИО для тестов ---------- */
  const s = localStorage.getItem('info-student');
  const who = document.getElementById('who');
  if (s && who) who.textContent = s;

  document.querySelectorAll('input[name="student"]').forEach(i => {
    i.value = localStorage.getItem('info-student-' + i.name) || '';
    i.addEventListener('change', () =>
      localStorage.setItem('info-student-' + i.name, i.value)
    );
  });
});

/* ---------- Тосты ---------- */
function toast(msg, ms = 2200) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), ms);
}

/* ---------- Год в подвале ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
