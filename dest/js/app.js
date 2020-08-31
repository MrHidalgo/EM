"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initValidation
 *
 * @description
 */
var initValidation = function initValidation() {

	/**
  *
  * @param form
  */
	var validationSubmitHandler = function validationSubmitHandler(form) {
		// $.ajax({
		// 	type: "POST",
		// 	url: $(form).attr('action'),
		// 	data: $(form).serialize(),
		// 	success: (response) => {
		// 		const data = $.parseJSON(response);
		//
		// 		if (data.status === 'success') {
		// 			// do something
		// 		} else {
		// 			// do something
		// 		}
		// 	}
		// });
	};

	/**
  *
  * @param error
  * @param element
  */
	var validationErrorPlacement = function validationErrorPlacement(error, element) {
		error.appendTo(element.closest('.c-form__field'));
	};

	/**
  *
  * @param element
  */
	var validationHighlight = function validationHighlight(element) {
		$(element).closest('.c-form__field').addClass('is-error');
		$(element).closest('.c-form__field').removeClass('is-done');
	};

	/**
  *
  * @param element
  */
	var validationUnhighlight = function validationUnhighlight(element) {
		$(element).closest('.c-form__field').removeClass('is-error');
		$(element).closest('.c-form__field').addClass('is-done');
	};

	/**
  * @description
  */
	$("#createAccountForm").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			full_name: 'required',
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			}
		}
	});
};

(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var inputFocus = function inputFocus() {
		var inputElem = $("[input-js]");

		inputElem.on("focus", function (e) {
			var curElem = $(e.target);

			curElem.parent().addClass("is-focus");
		});

		inputElem.on("blur", function (e) {
			var curElem = $(e.target),
			    curElemVal = curElem.val().trim();

			if (curElemVal === "") {
				curElem.parent().removeClass("is-focus");
			}
		});
	};

	var passwordCB = function passwordCB() {
		$('[password-js]').on('click', function (ev) {
			var parentNode = $(ev.currentTarget).parent();

			$(ev.currentTarget).toggleClass('is-active');

			if (parentNode.find('input[type="password"]').length) {
				parentNode.find('input').attr('type', 'text');
			} else {
				parentNode.find('input').attr('type', 'password');
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	var initNative = function initNative() {
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

	window.addEventListener('load', function () {
		initNative();
	}, false);
})();