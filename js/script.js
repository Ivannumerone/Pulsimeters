const slider = tns({
    container: '.carousel__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
    });
/* создано чат gpt */
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все li элементы (табы) и контенты
  const tabList = document.querySelectorAll('.catalog__tab');
  const tabContents = document.querySelectorAll('.catalog__content');

  // По умолчанию активируем первый таб
  tabList[0].classList.add('active');
  tabContents[0].classList.add('active');

  // Добавляем обработчик события на каждый li элемент (таб)
  tabList.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      // Удаляем класс 'active' у всех li элементов (табов) и контента
      tabList.forEach(function (tab) {
        tab.classList.remove('catalog__tab_active');
      });

      tabContents.forEach(function (content) {
        content.classList.remove('catalog__content_active');
      });

      // Добавляем класс 'active' к выбранному li элементу (табу) и соответствующему контенту
      tab.classList.add('catalog__tab_active');
      tabContents[index].classList.add('catalog__content_active');
    });
  });
});

/* создано чат gpt */

function handleLinkClick(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке

  const listItem = this.closest('.catalog-item');
  const listElement = listItem.querySelector('.catalog-item__list');
  const mainElement = listItem.querySelector('.catalog-item__main');

  if (this.classList.contains('catalog-item__back')) {
    listElement.classList.remove('catalog-item__list_active');
    mainElement.classList.add('catalog-item__main_active');
  } else if (this.classList.contains('catalog-item__link')) {
    listElement.classList.add('catalog-item__list_active');
    mainElement.classList.remove('catalog-item__main_active');
  }
}

 /* создано чат gpt */

// Получаем ссылки с классами "catalog-item__link" и "catalog-item__back" и добавляем им обработчик события клика
const linkElements = document.querySelectorAll('.catalog-item__link, .catalog-item__back');
linkElements.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

const links = document.querySelectorAll('.catalog-item__link, .catalog-item__back');

// Добавляем обработчик события click на каждую из этих ссылок
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие перехода по ссылке
  });
});







    
    
    
    
    
    