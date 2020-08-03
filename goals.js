document.querySelectorAll('.card-flip').forEach(item => {
	item.addEventListener('click', event => {
		flipCard(item);
	})
})

freezeClicks = false;

//stop clicks while we are flipping all
document.addEventListener("click",freezeClick,true);

function freezeClick(e) {
	if (freezeClicks) {
		e.stopPropagation();
		e.preventDefault();
	}
}

document.addEventListener('DOMContentLoaded',function run() {
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
})

function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}

//flip all cards


lastCard = document.getElementById('last-card');

lastCard.addEventListener('click', event => {
	freezeClicks = true;

	var displayTime = 3000;
	var timer = 150;
	var i = 0;
	document.querySelectorAll('.card-flip').forEach(item => {
		setTimeout(() => {
			setTimeout(() => {
				item.style.transition = "transform 1s"
				item.style.transform = "rotateY(90deg) rotateX(90deg)";
			}, 500)

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

	setTimeout(() => {
		activateAllCards()
	}, displayTime)

	setTimeout(() => {
		document.querySelectorAll('.card-flip').forEach(item => {
			item.style.backgroundColor = "transparent"
			item.style.transition = "opacity 1s";
			item.style.transform = "";
			freezeClicks = false;
		})
	},displayTime+3000);
})

function flipCard(item) {
	if (item.classList.contains('active')) {
		item.classList.remove('active');
		item.style.opacity = "0";
	} else {
		item.classList.add('active');
		item.style.opacity = "100";
}
}

function activateAllCards() {
	document.querySelectorAll('.card-flip').forEach(item => {
		console.log(item);
		console.log(item.classList);
		console.log(item.firstChild);
		console.log(item.lastChild.style);
		if (!item.classList.contains('active')) {
			item.classList.add('active');
			item.style.opacity = "100";
		}
	})
	document.querySelectorAll('.card-front').forEach(item => {
		item.style.backFaceVisibility = "hidden";
	})
}

