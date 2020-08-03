//same as main and script functions to fade out page
document.addEventListener('DOMContentLoaded',function run() {
	document.querySelectorAll('.tab').forEach(item => {
		item.addEventListener('click', function() {
			link = item.id;

			fadePage();

			setTimeout(function() {
				window.location.replace(link)
			}, 1000);
		});
	});
})

function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}

//set every card to flippable
document.querySelectorAll('.card-flip').forEach(item => {
	item.addEventListener('click', event => {
		flipCard(item);
	})
})

//use this to stop multiple inputs on an "all card flip"
freezeClicks = false;

//stop clicks while we are flipping all
document.addEventListener("click",freezeClick,true);

//stop click propogation
function freezeClick(e) {
	if (freezeClicks) {
		e.stopPropagation();
		e.preventDefault();
	}
}

//flip all cards
lastCard = document.getElementsByClassName('last-card')[0];

//when the last card is flipped, flip all cards
lastCard.addEventListener('click', event => {
	//stop click propogation
	freezeClicks = true;

	//time to hide all cards / display message
	var displayTime = 3000;
	//time between individual card flips, cascading effect
	var timer = 150;
	//multiplier for cascading effect
	var i = 0;

	//for each card
	document.querySelectorAll('.card-flip').forEach(item => {
		//space card flips by timer
		setTimeout(() => {
			//flip orthogonally to page
			setTimeout(() => {
				item.style.transition = "transform 1s"
				item.style.transform = "rotateY(90deg) rotateX(90deg)";
			}, 500)
			//flip rapidly, "flutter" cards back to original state
			setTimeout(() => {
				var x = 100;
				var j = 0;
				var smallerTimer = 20;
				item.style.transition = "transform 1s";
				setTimeout(() => {
					while(x%360 != 0) {
						x += 170;
						item.style.transform = "rotateY(" + x + "deg)";
						j += 1;
						smallerTimer = 20*j
					}

				},smallerTimer)
			}, displayTime)
		}, timer)

		i += 1;
		timer = 80*i
	})

	//after display is over, reactivate all cards
	setTimeout(() => {
		activateAllCards()
	}, displayTime)

	//reset card functionality
	setTimeout(() => {
		document.querySelectorAll('.card-flip').forEach(item => {
			item.style.backgroundColor = "transparent"
			item.style.transition = "opacity 1s";
			item.style.transform = "";
			freezeClicks = false;
		})
	},displayTime+3000);
})

//hide the card to display behind text
function flipCard(item) {
	//if it is active, take off the class and make it invisible, else do the opposite
	if (item.classList.contains('active')) {
		item.classList.remove('active');
		item.style.opacity = "0";
	} else {
		item.classList.add('active');
		item.style.opacity = "100";
}
}

//reset all cards to display graphics
function activateAllCards() {
	//choose card-flip container
	document.querySelectorAll('.card-flip').forEach(item => {
		//if it is not activem make it active and make opacity full
		if (!item.classList.contains('active')) {
			item.classList.add('active');
			item.style.opacity = "100";
		}
	})
	//make sure the back side is still hidden after previous edits
	document.querySelectorAll('.card-front').forEach(item => {
		item.style.backFaceVisibility = "hidden";
	})
}

