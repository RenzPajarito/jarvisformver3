let loginform = document.getElementById('loginForm');
let createnew = document.getElementById('createNew');
let signupform = document.getElementById('signupForm');
let signinnow = document.getElementById('signinNow');

createnew.onclick = function() {
	loginform.style.display = "none";
	signupform.style.display = "";
}

signinnow.onclick = function() {
	loginform.style.display = "";
	signupform.style.display = "none";
}