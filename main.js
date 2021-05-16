const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

//Buttons
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');

let counter = 1;
const size = 100;

slider.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
	if (counter == sliderImages.length - 10) return;
	slider.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	slider.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	slider.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	slider.style.transform = 'translateX(' + -size * counter + 'px)';
});

//Replay Button
btnReplay = document.querySelectorAll('.btn-reply');
inputReplay = document.querySelectorAll('.replay');

for (i = 0; i < btnReplay.length; i++) {
	btnReplay[i].addEventListener('click', () => {
		inputReplay[0].style.display = 'block';
	});
}
