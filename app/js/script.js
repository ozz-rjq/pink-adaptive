;(function(){

	var navToggle = document.querySelector(".main-nav__toggle");
	var navList = document.querySelector(".main-nav__list");
	var navHeader = document.querySelector(".main-nav__header");

	if(navToggle.classList.contains("main-nav__toggle--close")){
		navToggle.classList.add("main-nav__toggle--open");
		navToggle.classList.remove("main-nav__toggle--close");

		navList.classList.remove("main-nav__list--display");
		navHeader.classList.remove("main-nav__header--opened");
	}

	navToggle.addEventListener("click", function(){
		if(navToggle.classList.contains("main-nav__toggle--open")){
			navToggle.classList.remove("main-nav__toggle--open");
			navToggle.classList.add("main-nav__toggle--close");

			navList.classList.add("main-nav__list--display");
			navHeader.classList.add("main-nav__header--opened");
		} 
			else if(navToggle.classList.contains("main-nav__toggle--close")){
				navToggle.classList.add("main-nav__toggle--open");
				navToggle.classList.remove("main-nav__toggle--close");

				navList.classList.remove("main-nav__list--display");
				navHeader.classList.remove("main-nav__header--opened");
		}
	});
}());