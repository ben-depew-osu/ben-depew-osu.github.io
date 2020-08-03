

slides = ["graduation.jpeg", "davis.jpg", "soccer.jpg", "flog.jpg", "berlin.jpg", "birks.jpg"];

captions = ["Photograph taken for my graduation from UC Davis", "Photograph of Nick and me celebrating the graduation of our friend, Christian", "Photograph of my championship winning intramural soccer team", "Photograph of Max, Keziah, and me at the music festival 'Camp Flog Gnaw'", "Photograph of me at the Berlin Wall", "Photograph of me and my graduating friends from UC Davis"];

var interval = 3000;

var scroll = setInterval(nextSlide,interval);

document.addEventListener('DOMContentLoaded',function run() {
	next = document.getElementsByClassName('right')[0];

	next.addEventListener('click', event => {
		nextSlide();
	})

	prev = document.getElementsByClassName('left')[0];

	prev.addEventListener('click', event => {
		prevSlide();
	})

	document.querySelectorAll('.tab').forEach(item => {
		item.addEventListener('click', function() {
			link = item.id;

			console.log(link);

			fadePage();

			setTimeout(function() {
				window.location.replace(link)
			}, 1000);

		});
	});

	resetScroll();
});

function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}


function resetScroll(timer) {
	clearInterval(scroll);
	scroll = setInterval(nextSlide,interval);
}

function nextSlide() {
	activeImg = document.getElementsByClassName('display')[0];


	var index = activeImg.id.slice(-1);

	index = parseInt(index) + 1;

	if (index > slides.length-1) {
		index = 0;
	}

	activeImg.src = slides[index];

	rightImg = document.getElementsByClassName('right-img')[0];

	rightIndex = index+1;

	if (rightIndex > slides.length-1) {
		rightIndex = 0;
	}

	rightImg.src = slides[rightIndex];

	leftImg = document.getElementsByClassName('left-img')[0];

	leftIndex = index-1;

	if (leftIndex < 0){
		leftIndex = slides.length-1;
	}

	leftImg.src = slides[leftIndex];

	activeImg.id = activeImg.id.slice(0,-1) + (parseInt(index))

	caption = document.getElementById("caption");

	caption.textContent = captions[index];

	resetScroll();
}

function prevSlide() {
	activeImg = document.getElementsByClassName('display')[0];

	var index = activeImg.id.slice(-1);

	index = parseInt(index) - 1;

	if (index < 0) {
		index = slides.length-1;
	}

	activeImg.src = slides[index];

	rightImg = document.getElementsByClassName('right-img')[0];

	rightIndex = index+1;

	if (rightIndex > slides.length-1) {
		rightIndex = 0;
	}

	rightImg.src = slides[rightIndex];

	leftImg = document.getElementsByClassName('left-img')[0];

	leftIndex = index-1;

	if (leftIndex < 0){
		leftIndex = slides.length-1;
	}

	leftImg.src = slides[leftIndex];

	activeImg.id = activeImg.id.slice(0,-1) + (parseInt(index))

	caption = document.getElementById("caption");

	caption.textContent = captions[index];

	resetScroll();
}

