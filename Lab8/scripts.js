//Sloth Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.sloth>.accordion').addEventListener('click', function(){
		document.querySelector('.sloth>article').classList.toggle('show');
		document.querySelector('.sloth span').classList.toggle('rotate');
	});
});
//Elephant Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.elephant>.accordion').addEventListener('click', function(){
		document.querySelector('.elephant>article').classList.toggle('show');
		document.querySelector('.elephant span').classList.toggle('rotate');
	});
});
//Owl Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.owl>.accordion').addEventListener('click', function(){
		document.querySelector('.owl>article').classList.toggle('show');
		document.querySelector('.owl span').classList.toggle('rotate');
	});
});