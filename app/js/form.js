var form = document.querySelector(".form");

var modalSuccess = document.querySelector(".modal--success");
var modalFailure = document.querySelector(".modal--failure");

var submitBtn = document.querySelector(".form__submit");
var modalBtnOk = document.querySelector(".modal__btn--ok");
var modalBtnClose = document.querySelector(".modal__btn--close");

var nameRequire = document.querySelector("input[name=name]");
var surnameRequire = document.querySelector("input[name=surname]");
var emailRequire = document.querySelector("input[name=email]");


submitBtn.addEventListener("click", function(event){
	event.preventDefault();

	if (nameRequire.value && surnameRequire.value 
			&& emailRequire.value){
		modalSuccess.classList.add("modal__show");
	} else if (!nameRequire.value || !surnameRequire.value 
			|| !emailRequire.value){
		modalFailure.classList.add("modal__show");
	}
});

modalBtnOk.addEventListener("click", function(event){
	event.preventDefault();

	if(modalFailure.classList.contains("modal__show")){
		modalFailure.classList.remove("modal__show");
	}
});

modalBtnClose.addEventListener("click", function(event){
	event.preventDefault();

	if(modalSuccess.classList.contains("modal__show")){
		modalSuccess.classList.remove("modal__show");
	}
});