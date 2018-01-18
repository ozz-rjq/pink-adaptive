;(function(){

	var navToggle = document.querySelector(".main-nav__toggle");


	navToggle.addEventListener("click", function(){
			if(navToggle.classList.contains("main-nav__toggle--open")){
				navToggle.classList.remove("main-nav__toggle--open");
				navToggle.classList.add("main-nav__toggle--close");
			} else if(navToggle.classList.contains("main-nav__toggle--close")){
				navToggle.classList.add("main-nav__toggle--open");
				navToggle.classList.remove("main-nav__toggle--close");
			}
	});
}());