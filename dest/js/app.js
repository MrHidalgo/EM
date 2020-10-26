'use strict';

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
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header'),
	    bodyElement = $('body');

	if (countScroll > 10) {
		bodyElement.addClass("is-fixed");
		headerElement.addClass("header--fixed");
	} else {
		bodyElement.removeClass("is-fixed");
		headerElement.removeClass("header--fixed");
	}
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-close-js]').on('click', function (ev) {
		$.magnificPopup.close();
	});
};

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

	$("#integrationConnect").validate({
		submitHandler: function submitHandler() {
			$('[popup-js]').trigger('click');
		},
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			api_key: 'required'
		}
	});

	$("#apiName").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			api_name: 'required'
		}
	});

	$("#apiKey").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			api_key: 'required'
		}
	});

	$("#settingGeneral").validate({
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
			company_name: 'required',
			mobile_phone: 'required',
			city: 'required',
			country: 'required'
		}
	});

	$("#settingSettting").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			new_password: {
				required: true,
				minlength: 8
			},
			confirm_password: {
				required: true,
				minlength: 8,
				equalTo: "#new_password"
			}
		}
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

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

	var filterBox = function filterBox() {
		$("[filter-js] input[type='radio']").on('change', function (ev) {
			var el = $(ev.currentTarget),
			    elFilterName = el.attr('data-name');

			if (elFilterName === 'all') {
				$('[verification-box-js]').parent().fadeIn(300);
			} else {
				$('[verification-box-js]').parent().hide();
				$('[verification-box-js][data-name="' + elFilterName + '"]').parent().fadeIn(300);
			}
		});
	};

	var reportCB = function reportCB() {
		$('[show-result-js]').on('click', function (ev) {
			var reportNode = $('#report');

			if (reportNode.hasClass('is-open')) {
				reportNode.removeClass('is-open');
				$('html, body').removeClass('is-hideScroll');
			} else {
				reportNode.addClass('is-open');
				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[report-close-js]').on('click', function (ev) {
			$('#report').removeClass('is-open');
			$('html, body').removeClass('is-hideScroll');
		});

		$("[report-select-all]").on('change', function (ev) {
			var el = $(ev.currentTarget),
			    checkboxArr = $('[report-checked-js] input[type="checkbox"]');

			if (el.is(':checked')) {
				checkboxArr.prop('checked', true);
			} else {
				checkboxArr.prop('checked', false);
			}
		});

		$('[report-checked-js] input[type="checkbox"]').on('change', function (ev) {
			var el = $(ev.currentTarget),
			    selectAllCheckbox = $("[report-select-all]");

			var count = true;

			if (count === true) {
				selectAllCheckbox.prop('checked', false);
				count = false;
			}
		});
	};

	var chartCB = function chartCB() {
		var optionsBox1 = {
			chart: {
				type: "area",
				height: '100px',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			series: [{
				name: "Verified",
				data: [10, 52, 38, 45, 19]
			}],
			colors: ["#00d8a3"],
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.55,
					opacityTo: 0
				}
			},
			grid: {
				show: false
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			xaxis: {
				labels: {
					show: false
				},
				axisBorder: {
					show: false
				},
				categories: ["1", "2", "3", "4", "5"]
			}
		};
		var optionsBox2 = {
			chart: {
				type: "area",
				height: '100px',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			series: [{
				name: "Disposable",
				data: [55, 1, 84, 99, 10]
			}],
			colors: ["#878cfd"],
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.55,
					opacityTo: 0
				}
			},
			grid: {
				show: false
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			xaxis: {
				labels: {
					show: false
				},
				axisBorder: {
					show: false
				},
				categories: ["1", "2", "3", "4", "5"]
			}
		};
		var optionsBox3 = {
			chart: {
				type: "area",
				height: '100px',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			series: [{
				name: "Duplicate",
				data: [99, 55, 1, 74, 10]
			}],
			colors: ["#ffc409"],
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.55,
					opacityTo: 0
				}
			},
			grid: {
				show: false
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			xaxis: {
				labels: {
					show: false
				},
				axisBorder: {
					show: false
				},
				categories: ["1", "2", "3", "4", "5"]
			}
		};
		var optionsBox4 = {
			chart: {
				type: "area",
				height: '100px',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			series: [{
				name: "Spam-traps",
				data: [1, 30, 10, 5, 20]
			}],
			colors: ["#ff6a8f"],
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.55,
					opacityTo: 0
				}
			},
			grid: {
				show: false
			},
			yaxis: {
				labels: {
					show: false
				}
			},
			xaxis: {
				labels: {
					show: false
				},
				axisBorder: {
					show: false
				},
				categories: ["1", "2", "3", "4", "5"]
			}
		};
		var optionsBlock1 = {
			chart: {
				height: 550,
				type: 'line',
				stacked: true,
				toolbar: {
					show: false,
					autoSelected: 'zoom'
				}
			},
			colors: ['#2a77f4', '#1ccab8'],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: [2, 2],
				dashArray: [0, 3]
			},
			grid: {
				borderColor: "#45404a2e",
				padding: {
					left: 0,
					right: 0
				},
				strokeDashArray: 4
			},
			markers: {
				size: 0,
				hover: {
					size: 0
				}
			},
			series: [{
				name: 'Revenue',
				data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 200]
			}, {
				name: 'New Orders',
				data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 190]
			}],

			xaxis: {
				type: 'datetime',
				categories: ["2020-09-19T00:00:00", "2020-09-19T01:30:00", "2020-09-19T02:30:00", "2020-09-19T03:30:00", "2020-09-19T04:30:00", "2020-09-19T05:30:00", "2020-09-19T06:30:00", "2020-09-19T07:30:00", "2020-09-19T08:30:00", "2020-09-19T09:30:00", "2020-09-19T10:30:00", "2020-09-19T11:30:00"],
				axisBorder: {
					show: true,
					color: '#45404a2e'
				},
				axisTicks: {
					show: true,
					color: '#45404a2e'
				}
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				}
			},
			legend: {
				show: false,
				position: 'top',
				horizontalAlign: 'right'
			}
		};
		var optionsBlock2 = {
			series: [{
				name: 'Revenue',
				data: [31, 40, 28, 51, 42, 109, 100]
			}],
			chart: {
				height: 550,
				type: 'area',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 2
			},
			colors: ['#1eca87'],
			xaxis: {
				type: 'day',
				categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
			},
			yaxis: {
				labels: {
					formatter: function formatter(value) {
						return "$" + value + "k";
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				borderColor: "#45404a2e",
				padding: {
					left: 0,
					right: 0
				},
				strokeDashArray: 4
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				}
			}
		};
		var optionsBlock3 = {
			series: [{
				name: 'Revenue',
				data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 42, 109, 100]
			}],
			chart: {
				height: 550,
				type: 'bar',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 2
			},
			colors: ['#00b9ca'],
			xaxis: {
				type: 'day',
				categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Thu", "Fri", "Sat"]
			},
			yaxis: {
				labels: {
					formatter: function formatter(value) {
						return "$" + value + "k";
					}
				}
			},
			legend: {
				show: false
			},
			grid: {
				borderColor: "#45404a2e",
				padding: {
					left: 0,
					right: 0
				},
				strokeDashArray: 4
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				}
			}
		};

		if ($('#chartBox1').length > 0) {
			var chartBox1 = new ApexCharts(document.querySelector("#chartBox1"), optionsBox1);
			chartBox1.render();
		}
		if ($('#chartBox2').length > 0) {
			var chartBox2 = new ApexCharts(document.querySelector("#chartBox2"), optionsBox2);
			chartBox2.render();
		}
		if ($('#chartBox3').length > 0) {
			var chartBox3 = new ApexCharts(document.querySelector("#chartBox3"), optionsBox3);
			chartBox3.render();
		}
		if ($('#chartBox4').length > 0) {
			var chartBox4 = new ApexCharts(document.querySelector("#chartBox4"), optionsBox4);
			chartBox4.render();
		}
		if ($('#chartBlock1').length > 0) {
			var chartBlock1 = new ApexCharts(document.querySelector("#chartBlock1"), optionsBlock1);
			chartBlock1.render();
		}
		if ($('#chartBlock2').length > 0) {
			var chartBlock2 = new ApexCharts(document.querySelector("#chartBlock2"), optionsBlock2);
			chartBlock2.render();
		}
		if ($('#chartBlock3').length > 0) {
			var chartBlock3 = new ApexCharts(document.querySelector("#chartBlock3"), optionsBlock3);
			chartBlock3.render();
		}
	};

	var tabCB = function tabCB() {
		$('[tab-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elID = el.attr('data-id');

			$('[tab-js]').removeClass('is-active');
			el.addClass('is-active');

			$('[tab-content-js]').removeClass('is-active');
			$('[tab-content-js][data-content="' + elID + '"]').addClass('is-active');
		});
	};

	var apiBoxResult = function apiBoxResult() {
		$('[apibox-js]').on('click', function (ev) {
			$('html, body').addClass('is-hideScroll');
			$('[apibox-result-js]').addClass('is-open');
		});

		$('[apibox-back-js]').on('click', function (ev) {
			$('html, body').removeClass('is-hideScroll');
			$('[apibox-result-js]').removeClass('is-open');
		});
	};

	var settingBtn = function settingBtn() {
		$('[setting-btn-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elID = el.attr('data-id');

			$('[setting-btn-js]').removeClass('is-active');
			el.addClass('is-active');

			$('[setting-content-js]').removeClass('is-active');
			$('[setting-content-js][data-id="' + elID + '"]').addClass('is-active');
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
		initPopups();
		// ==========================================

		// callback
		bodyCB();
		inputFocus();
		passwordCB();
		sidebarCB();
		// userToggle();
		searchToggle();
		dropdownCB();
		filterBox();
		reportCB();
		chartCB();
		tabCB();
		apiBoxResult();
		settingBtn();
		// ==========================================
	};

	window.addEventListener('load', function () {
		initNative();
	}, false);
})();