	var btn = document.querySelector(".btn-open");

	var popup = document.querySelector(".modal");

	var form = popup.querySelector("form");

	var dateIn = popup.querySelector("[name = in]");

	var dateOut = popup.querySelector("[name = out]");


	btn.addEventListener("click", function (evt) {
		evt.preventDefault();
		
		if(popup.classList.contains("modal-hide")){
			popup.classList.remove("modal-hide");
		} else {
			popup.classList.add("modal-hide");
		}

		dateIn.focus();
	});

	form.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value) {
      evt.preventDefault();
      alert("Не забудьте ввести даты заезда и выезда!");
    	}
 	});