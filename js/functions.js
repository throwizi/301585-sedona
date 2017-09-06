	var btnOpen = document.querySelector(".btn-open");

	var popup = document.querySelector(".reservation-form");

	var btnClose = document.querySelector(".modal-close");



	btnOpen.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("reservation-form-show");
	});	

	btnClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("reservation-form-show");
	});	