'use strict'

let fsBlock = document.querySelector('.fs__block');
let bodyBlocksArr = [...fsBlock.querySelectorAll('.content__block__body')];
let blockButtonsArr = [...fsBlock.querySelectorAll('.content__btn')];

blockButtonsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		blockButtonsArr.forEach(item => {
			item.classList.remove('active');
		})
		btn.classList.add('active');
		let index = blockButtonsArr.indexOf(btn);
		bodyBlocksArr.forEach(block => {
			block.classList.add('none');
			bodyBlocksArr[index].classList.remove('none');
		})
	})
})