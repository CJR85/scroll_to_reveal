'use strict';
for (let i = 1; i <= 60; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);
}
