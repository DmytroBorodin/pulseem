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


// Create shortcard

let shortCardBlock = setElement('div', 'shortcard__block', '');
let shortCard = setElement('div', 'shortcard', '');
let shortCardOption1 = setElement('p', 'option__text', '');
let shortCardOption2 = setElement('p', 'option__text', '');
let editBtn = setElement('img', 'edit__btn', '');
editBtn.setAttribute('src', 'imgs/pencil.svg');
shortCard.append(shortCardOption1);
shortCard.append(shortCardOption2);
shortCard.append(editBtn);
shortCardBlock.append(shortCard);


// Select options

let shortCardsArr = [...document.querySelectorAll('.shortcard__add__block')];
let optionsBlock = document.querySelector('.options__block');
let selectOptionBlock = [...optionsBlock.querySelectorAll('.select__option__block')];
let optionListsArr = [...optionsBlock.querySelectorAll('.options__list')];
let options = [];

shortCardsArr.forEach(card => {
	let addBtn = card.querySelector('.add__btn');
	console.log(card.offsetTop);
	addBtn.addEventListener('click', () => {
		optionsBlock.classList.add('active');
		optionsBlock.style.top = `${card.offsetTop}px`;

		selectOptionBlock.forEach(block => {
			let arrowBtn = block.querySelector('svg');
			let index = selectOptionBlock.indexOf(block);
			arrowBtn.addEventListener('click', () => {
				block.style.boxShadow = 'none';
				let blockName = block.querySelector('.select__text');
				optionListsArr[index].classList.toggle('active');
				let listItemsArr = [...optionListsArr[index].querySelectorAll('.option__list__item ')];
				listItemsArr.forEach(li => {
					li.addEventListener('click', () => {
						let listItemTitle = li.querySelector('span').innerText;
						options.push(listItemTitle);
						console.log(options);
						optionListsArr[index].classList.remove('active');
						block.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.35)';
						block.querySelector('.select__text').innerText = listItemTitle;
						selectOptionBlock[1].classList.remove('disabled');
						if (index == 1) {
							setTimeout(() => {
								optionsBlock.classList.remove('active');

								// Update and append shortcard to block
								shortCardOption1.innerText = options[0];
								shortCardOption2.innerText = options[1];
								card.append(shortCardBlock);
								selectOptionBlock[1].classList.add('disabled');
								card.classList.add('active');
							}, 1000)
						}
					})
				})
			})
		})	
	})
}) 


