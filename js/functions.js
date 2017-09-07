	var btn = document.querySelector(".btn-open");

	var popup = document.querySelector(".modal");

	var dateIn = popup.querySelector("[name = in]");

	




	btn.addEventListener("click", function (evt) {
		evt.preventDefault();
		
		if(popup.classList.contains("modal-show")){
			popup.classList.remove("modal-show");
		} else {
			popup.classList.add("modal-show");
		}

		dateIn.focus();
	});


	window.addEventListener("keydown", function (evt) {
	    if (evt.keyCode === 27) {
	      if (popup.classList.contains("modal-show")) {
	        popup.classList.remove("modal-show");
	      }
	    }
	  });