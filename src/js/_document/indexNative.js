(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const inputFocus = () => {
		const inputElem = $("[input-js]");

		inputElem.on("focus", (e) => {
			let curElem = $(e.target);

			curElem.parent().addClass("is-focus");
		});

		inputElem.on("blur", (e) => {
			let curElem = $(e.target),
				curElemVal = curElem.val().trim();

			if(curElemVal === "") {
				curElem.parent().removeClass("is-focus");
			}
		});
	};


	const passwordCB = () => {
		$('[password-js]').on('click', (ev) => {
			const parentNode = $(ev.currentTarget).parent();

			$(ev.currentTarget).toggleClass('is-active');

			if(parentNode.find('input[type="password"]').length) {
				parentNode.find('input').attr('type', 'text');
			} else {
				parentNode.find('input').attr('type', 'password');
			}
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initValidation();
		// ==========================================

		// callback
		inputFocus();
		passwordCB();
		// ==========================================
	};

	window.addEventListener('load', () => {
		initNative();
	}, false);
})();
