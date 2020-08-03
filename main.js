//filenames for the images to flip through
slides = ["graduation.jpeg", "davis.JPG", "soccer.JPG", "flog.JPG", "berlin.jpg", "birks.jpg"];

//captions for the images
captions = ["Photograph taken for my graduation from UC Davis", "Photograph of Nick and me celebrating the graduation of our friend, Christian", "Photograph of my championship winning intramural soccer team", "Photograph of Max, Keziah, and me at the music festival 'Camp Flog Gnaw'", "Photograph of me at the Berlin Wall", "Photograph of me and my graduating friends from UC Davis"];

//time between auto-scrolls
var interval = 3000;

//initialize autoscroll variable in global context
var scroll = setInterval(nextSlide,interval);


//on DOM load add scrolling functionality to side images
document.addEventListener('DOMContentLoaded',function run() {
	next = document.getElementsByClassName('right')[0];

	next.addEventListener('click', event => {
		nextSlide();
	})

	prev = document.getElementsByClassName('left')[0];

	prev.addEventListener('click', event => {
		prevSlide();
	})

	//page fade out function, allow for fade then switch windows
	document.querySelectorAll('.tab').forEach(item => {
		item.addEventListener('click', function() {
			link = item.id;

			fadePage();

			setTimeout(function() {
				window.location.replace(link)
			}, 1000);

		});
	});

	resetScroll();
});

//page fade out function
function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}

//reset the timer for autoscroll
function resetScroll(timer) {
	clearInterval(scroll);
	scroll = setInterval(nextSlide,interval);
}

//scroll to the next slide
function nextSlide() {
	//get the main display image
	activeImg = document.getElementsByClassName('display')[0];

	//get the index of the image on display
	var index = activeImg.id.slice(-1);

	//increment the index
	index = parseInt(index) + 1;

	//if we are outside the array length reset to zero
	if (index > slides.length-1) {
		index = 0;
	}

	//set active image to next img in list
	activeImg.src = slides[index];

	//do same process for the right side image
	rightImg = document.getElementsByClassName('right-img')[0];

	rightIndex = index+1;

	if (rightIndex > slides.length-1) {
		rightIndex = 0;
	}

	rightImg.src = slides[rightIndex];

	//do the same process for the left side image
	leftImg = document.getElementsByClassName('left-img')[0];

	leftIndex = index-1;

	if (leftIndex < 0){
		leftIndex = slides.length-1;
	}

	leftImg.src = slides[leftIndex];
	//change the id to the active image
	activeImg.id = activeImg.id.slice(0,-1) + (parseInt(index))

	//adjust the caption
	caption = document.getElementById("caption");

	caption.textContent = captions[index];

	//reset autoscroll timer
	resetScroll();
}

//opposite of next slide, go back in slideshow
function prevSlide() {
	//get active image
	activeImg = document.getElementsByClassName('display')[0];
	//get index
	var index = activeImg.id.slice(-1);
	//backtrack 1 for index
	index = parseInt(index) - 1;

	//if we are out of bounds, go to end of list
	if (index < 0) {
		index = slides.length-1;
	}

	//change source image for display box
	activeImg.src = slides[index];

	//do same process for right side image
	rightImg = document.getElementsByClassName('right-img')[0];

	rightIndex = index+1;

	if (rightIndex > slides.length-1) {
		rightIndex = 0;
	}

	rightImg.src = slides[rightIndex];

	//do same process for left side image
	leftImg = document.getElementsByClassName('left-img')[0];

	leftIndex = index-1;

	if (leftIndex < 0){
		leftIndex = slides.length-1;
	}

	leftImg.src = slides[leftIndex];

	//change the id to the active image
	activeImg.id = activeImg.id.slice(0,-1) + (parseInt(index))

	//change the caption accordingly
	caption = document.getElementById("caption");

	caption.textContent = captions[index];

	//reset autoscroll timer
	resetScroll();
}

