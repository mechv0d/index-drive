// Получаем элементы
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Функция переключения класса 'active'
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
