		var link = document.querySelector(".write");

		var popup = document.querySelector(".form-write-us");
		var close = document.querySelector(".modal-content-close");

		var form = popup.querySelector("form");
		var login = popup.querySelector("[name=name]");
		var email = popup.querySelector("[name=email]");

		var storage = localStorage.getItem("login");
		

			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("form-write-us-show");
				if (storage) {
		        	login.value = storage;
					email.focus();
				} else {
					login.focus();
				}
			});

			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("form-write-us-show");
			});
		
			form.addEventListener("submit", function(event) {
				event.preventDefault();
			});


			form.addEventListener("submit", function(event) {
		        if (!login.value) {
		          event.preventDefault();
		        } else {
		          localStorage.setItem("login", login.value);
		        }
		      });

			window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
					if (popup.classList.contains("form-write-us-show")) {
						popup.classList.remove("form-write-us-show");
					}
				}
			});

