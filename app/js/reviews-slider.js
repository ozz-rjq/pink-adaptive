;(function(){

	var prevSlide = document.querySelector(".reviews__btn--prev");
	var nextSlide = document.querySelector(".reviews__btn--next");

	var slides = document.querySelectorAll(".reviews__radio");

	nextSlide.addEventListener("click", function(event){
		event.preventDefault();
		setNextSlide();
	});

	prevSlide.addEventListener("click", function(event){
		event.preventDefault();
		setPrevSlide();
	});

	function setNextSlide(){
		var currentSlide = getCurrentSlide();
		var slideNumber = getSlideNumber();

		currentSlide.checked = false;

		if(slideNumber < slides.length-1){
			slides[slideNumber + 1].checked = true;
		} else if (slideNumber === slides.length - 1){
			slideNumber = 0;
			slides[slideNumber].checked = true;
		}
	}

	function setPrevSlide(){
		var currentSlide = getCurrentSlide();
		var slideNumber = getSlideNumber();

		currentSlide.checked = false;

		if(slideNumber > 0){
			slides[slideNumber - 1].checked = true;
		} else if (slideNumber === 0){
			slideNumber = slides.length - 1;
			slides[slideNumber].checked = true;
		}
	}

	function getCurrentSlide(){
		var currentSlide;

		for (var i = 0; i < slides.length; i++){
			if(slides[i].checked){
				currentSlide = slides[i];
			}
		}

		return currentSlide;
	}

	function getSlideNumber(){
		var slideNumber;

		for (var i = 0; i < slides.length; i++){
			if(slides[i].checked){
				slideNumber = i;
			}
		}

		return slideNumber;
	}

}());