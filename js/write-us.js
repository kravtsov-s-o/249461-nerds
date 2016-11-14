		var link = document.querySelector(".write");
		var popup = document.querySelector(".form-write-us");
		var close = document.querySelector(".modal-content-close");
		var login = popup.querySelector("[name=name]");
		var form = popup.querySelector("form");

			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("form-write-us-show");
				login.focus();
			});

			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("form-write-us-show");
			});
		
			form.addEventListener("submit", function(event) {
				event.preventDefault();
			});

			window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
					if (popup.classList.contains("form-write-us-show")) {
						popup.classList.remove("form-write-us-show");
					}
				}
			});