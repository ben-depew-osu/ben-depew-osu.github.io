//script for resume and contact page exiting

//when the DOM content has loaded
document.addEventListener('DOMContentLoaded',function run() {
	//add fade out on link clicks to each navbar tab
	document.querySelectorAll('.tab').forEach(item => {
		item.addEventListener('click', function() {
			link = item.id;

			fadePage();
			//after 800ms switch to the new page
			setTimeout(function() {
				window.location.replace(link)
			}, 800);
		});
	});
})

//fade out the content and fade out the header of the page
function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}