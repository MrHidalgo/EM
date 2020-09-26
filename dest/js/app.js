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
	var bodyCB = function bodyCB() {
		$('body').on('click', function (e) {
			var className = ".header__user-wrapper, [dropdown-node-js]";

			if (!$(e.target).closest(className).length) {
				$('[user-dropdown-js], [dropdown-js]').removeClass('is-open');
			}
		});
	};

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

	var sidebarCB = function sidebarCB() {
		$('[sidebar-btn-js]').hover(function (ev) {
			var el = $(ev.currentTarget),
			    popperContent = el.find('.c-poppertext');

			popperContent.css({
				position: 'fixed',
				top: el[0].getBoundingClientRect().top + popperContent.height() / 2,
				left: el[0].getBoundingClientRect().left + (el[0].getBoundingClientRect().width + 15),
				transform: 'unset'
			});
		}, function (ev) {});
	};

	var userToggle = function userToggle() {
		$('[user-js]').on('click', function (ev) {
			$(ev.currentTarget).siblings('[user-dropdown-js]').toggleClass('is-open');
		});
	};

	var searchToggle = function searchToggle() {
		$('[search-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    searchNode = $('[search-node-js]');

			el.toggleClass('is-active');
			searchNode.toggleClass('is-open');

			setTimeout(function () {
				searchNode.find('input').focus();
			}, 100);
		});
	};

	var dropdownCB = function dropdownCB() {
		$('[dropdown-toggle-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('[dropdown-node-js]');

			elParent.find('[dropdown-js]').toggleClass('is-open');
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
		bodyCB();
		inputFocus();
		passwordCB();
		sidebarCB();
		userToggle();
		searchToggle();
		dropdownCB();
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	}, false);
})();