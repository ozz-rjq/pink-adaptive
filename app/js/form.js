var form = document.querySelector(".form");
var modalSuccess = document.querySelector(".modal--success");
var modalFailure = document.querySelector(".modal--failure");
var submitBtn = document.querySelector(".form__submit");
var modalBtnOk = document.querySelector(".modal__btn--ok");
var modalBtnClose = document.querySelector(".modal__btn--close");


submitBtn.addEventListener("click", function(event){
	event.preventDefault();

	if(!modalSuccess.classList.contains("modal__show")){
		modalSuccess.classList.add("modal__show");
	}
});

modalBtnOk.addEventListener("click", function(event){
	event.preventDefault();

	if(modalSuccess.classList.contains("modal__show")){
		modalSuccess.classList.remove("modal__show");
	}
});

modalBtnClose.addEventListener("click", function(event){
	event.preventDefault();

	if(modalSuccess.classList.contains("modal__show")){
		modalSuccess.classList.remove("modal__show");
	}
});