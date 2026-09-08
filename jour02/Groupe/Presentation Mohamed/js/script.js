document.querySelectorAll('h1, h2, h3').forEach((el) => {
	setInterval(() => {
		el.style.textShadow = `0 0 ${Math.random() * 20}px #8A0303`;
	}, 300);
});

window.addEventListener('load', () => {
	const flash = document.querySelector('.flash');

	flash.style.animation = 'thunderFlash 1s ease-in-out forwards';
});

const h1 = document.querySelector('h1');

function createBloodDropFromH1() {
	const drop = document.createElement('div');
	drop.classList.add('blood-drop');

	const h1Width = h1.offsetWidth;
	drop.style.left = Math.random() * h1Width + 'px';

	drop.style.animationDuration = 1 + Math.random() * 1.5 + 's';

	h1.appendChild(drop);

	drop.addEventListener('animationend', () => {
		drop.remove();
	});
}

setInterval(createBloodDropFromH1, 1800); 
