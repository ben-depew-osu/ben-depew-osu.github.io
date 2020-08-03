document.addEventListener('DOMContentLoaded',function run() {
	document.querySelectorAll('.tab').forEach(item => {
		item.addEventListener('click', function() {
			link = item.id;

			console.log(link);

			fadePage();

			setTimeout(function() {
				window.location.replace(link)
			}, 800);
		});
	});
})

function fadePage() {
	content = document.getElementsByClassName('content')[0];

	content.classList.toggle('fade');

	header = document.getElementsByClassName('header')[0];

	header.classList.toggle('fade');
}