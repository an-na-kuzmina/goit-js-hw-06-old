/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const minusBtn = document.querySelector('#counter').firstElementChild;
const plusBtn = document.querySelector('#counter').lastElementChild;

plusBtn.addEventListener('click', event => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

minusBtn.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});
