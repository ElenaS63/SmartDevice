const accordeons = document.querySelectorAll('.accordeon-js');
const accordeonsTriggers = document.querySelectorAll('.accordeon-js__trigger');
const accordeonsContent = document.querySelectorAll('.accordeon-js__content');

accordeons.forEach((accordeon) => {
  const trigger = accordeon.querySelector('.accordeon-js__trigger');
  const content = accordeon.querySelector('.accordeon-js__content');
  trigger.classList.remove('accordeon-js__trigger--nojs');
  content.classList.remove('accordeon-js__content--nojs');

  trigger.addEventListener('click', function () {
    if (trigger.classList.contains('accordeon-js__trigger--shown')) {
      trigger.classList.remove('accordeon-js__trigger--shown');
    } else {
      accordeonsTriggers.forEach(function (accordionTrigger) {
        accordionTrigger.classList.remove('accordeon-js__trigger--shown');
      });
      trigger.classList.add('accordeon-js__trigger--shown');
    } if (content.classList.contains('accordeon-js__content--shown')) {
      content.classList.remove('accordeon-js__content--shown');
    } else {
      accordeonsContent.forEach(function (accordionContent) {
        accordionContent.classList.remove('accordeon-js__content--shown');
      });
      content.classList.add('accordeon-js__content--shown');
    }
  });
});
