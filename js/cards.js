// cards.js - функциональность для страницы банковских карт

document.addEventListener('DOMContentLoaded', function() {
  const addCardButton = document.querySelector('.btn-add-card');
  const modalOverlay = document.getElementById('addCardModal');
  const modalClose = document.querySelector('.modal-close');
  const cardForm = document.querySelector('.card-form');
  const cardNumberInput = document.getElementById('cardNumber');
  const expiryDateInput = document.getElementById('expiryDate');

  // Открытие модального окна
  addCardButton.addEventListener('click', function() {
    modalOverlay.classList.add('active');
  });

  // Закрытие модального окна через крестик
  modalClose.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
  });

  // Закрытие модального окна при клике вне его
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // Обработка отправки формы
  cardForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь будет логика добавления карты
    // Пока просто закрываем модальное окно
    modalOverlay.classList.remove('active');
    // Сброс формы
    cardForm.reset();
  });

  // Форматирование номера карты (добавление пробелов)
  cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }

    e.target.value = formattedValue;
  });

  // Форматирование даты окончания (ММ/ГГ)
  expiryDateInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length >= 2) {
      e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else {
      e.target.value = value;
    }
  });

  // Ограничение ввода только латинских букв для имени держателя
  const cardHolderInput = document.getElementById('cardHolder');
  cardHolderInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
  });

  // Ограничение ввода только цифр для CVV
  const cvvInput = document.getElementById('cvv');
  cvvInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
});
