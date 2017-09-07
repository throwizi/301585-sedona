	var btn = document.querySelector(".btn-open");

	var popup = document.querySelector(".reservation-form");

	var dateIn = popup.querySelector("[name = in]");

	




	btn.addEventListener("click", function (evt) {
		evt.preventDefault();
		
		if(popup.classList.contains("reservation-form-show")){
			popup.classList.remove("reservation-form-show");
		} else {
			popup.classList.add("reservation-form-show");
		}

		dateIn.focus();
	});


