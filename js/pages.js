let wrap = document.querySelector('.wrap');

let html = document.querySelector('html');
let body = document.querySelector('body');
let sideBar = document.querySelector('.sidebar');
let navbar = document.querySelector('.navbar');
let burgerBtn = sideBar.querySelector('.burger__btn');
let navBurgerBtn = navbar.querySelector('.burger__btn');
let closeMenuBtn = sideBar.querySelector('.close__btn');
let main = document.querySelector('.main');

burgerBtn.addEventListener('click', () => {
	sideBar.classList.toggle('mini');
	main.classList.toggle('max');
});

navBurgerBtn.addEventListener('click', () => {
	sideBar.classList.add('active');
	body.classList.add('locked');
});
closeMenuBtn.addEventListener('click', () => {
	sideBar.classList.remove('active');
	body.classList.remove('locked');
	console.log('close');
})


// Create element

let setElement = (elName, elClass, elCont) => {
	let newElement = document.createElement(elName);
	newElement.classList.add(elClass);
	newElement.innerText = elCont;
	return newElement;
}


// menu and submenu lists settings

let menuLinksArr = [...document.querySelectorAll('.menu__link')];
let submenusArr = [...document.querySelectorAll('.submenu__list')];

menuLinksArr.forEach(link => {
	let linkId = link.getAttribute('linkname');
	link.addEventListener('click', () => {
		for (let i = 0; i < submenusArr.length; i++) {
			submenusArr[i].classList.remove('active');
			let submenuId = submenusArr[i].getAttribute('id');
			if (submenuId == linkId) {
				submenusArr[i].classList.add('active');
			}
		}
	})
})

//change language and page direction

console.log(window.innerWidth);

let selectBlock = document.querySelector('.languages');
let lanuagesArr = [...selectBlock.querySelectorAll('.option')];


let changeLanguageTitle = () => {
	if (window.innerWidth < 576) {
		lanuagesArr[0].label = 'En';
		lanuagesArr[1].label = 'He';
	}else {
		lanuagesArr[0].label = 'English';
		lanuagesArr[1].label = 'Hebrew';
	}
}

changeLanguageTitle();

window.addEventListener('resize', changeLanguageTitle);


selectBlock.addEventListener('change', (e) => {
	console.log(e);
	let val = e.srcElement.value;
	wrap.classList.remove('rtl');
	html.removeAttribute('dir');
	e.srcElement.attributes[0].nodeValue = '';
	
	if (val == 'true') {
		wrap.classList.add('rtl');
		e.srcElement.attributes[0].nodeValue = 'rtl'
		html.setAttribute('dir', 'rtl');
	}
})


// Show full title

let groupNameBlocksArr = [...document.querySelectorAll('.table__col.group__name, .title__block')];

let showFullTitle = () => {
	groupNameBlocksArr.forEach(block => {
		let groupInfoBlock = block.querySelector('.group__info__block');
		let groupNameBlock = groupInfoBlock.querySelector('.group__name');
		let groupInfoBlockWidth = groupInfoBlock.offsetWidth;
		let groupNameBlockWidth = groupNameBlock.scrollWidth;
		
		if (groupInfoBlockWidth < groupNameBlockWidth) {
			groupNameBlock.style.whiteSpace = 'nowrap';
			groupNameBlock.style.textOverflow = 'ellipsis';
			groupNameBlock.style.overflow = 'hidden';
			let title = groupNameBlock.innerText;
			let fullTitle = setElement('p', 'full__group__name', title);
			groupNameBlock.appendChild(fullTitle);
		}
	})
}

showFullTitle();

window.addEventListener('resize', showFullTitle)
