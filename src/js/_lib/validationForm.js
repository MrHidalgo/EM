

/**
 * @name initValidation
 *
 * @description
 */
const initValidation = () => {

	/**
	 *
	 * @param form
	 */
	const validationSubmitHandler = (form) => {
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
	const validationErrorPlacement = function(error, element) {
		error.appendTo(element.closest('.c-form__field'));
	};

	/**
	 *
	 * @param element
	 */
	const validationHighlight = (element) => {
		$(element).closest('.c-form__field').addClass('is-error');
		$(element).closest('.c-form__field').removeClass('is-done');
	};

	/**
	 *
	 * @param element
	 */
	const validationUnhighlight = (element) => {
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
		onkeyup: function(element) {
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

	$("#integrationConnect").validate({
		submitHandler: function() {
			$('[popup-js]').trigger('click');
		},
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			api_key: 'required',
		}
	});

	$("#apiName").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			api_name: 'required',
		}
	});

	$("#apiKey").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			api_key: 'required',
		}
	});

	$("#paymentGeneral").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			full_name: 'required',
			email: {
				required: true,
				email: true
			},
			company_name: 'required',
			mobile_phone: 'required',
			city: 'required',
			country: 'required',
		}
	});

	$("#paymentSettting").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			new_password: {
				required: true,
				minlength : 8,
			},
			confirm_password: {
				required: true,
				minlength : 8,
				equalTo : "#new_password"
			},
		}
	});
};
