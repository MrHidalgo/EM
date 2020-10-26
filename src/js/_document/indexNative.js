(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const bodyCB = () => {
		$('body').on('click', function (e) {
			const className = ".header__user-wrapper, [dropdown-node-js]";

			if (!$(e.target).closest(className).length) {
				$('[user-dropdown-js], [dropdown-js]').removeClass('is-open');
			}
		});
	};

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


	const sidebarCB = () => {
		$('[sidebar-btn-js]').hover(
			(ev) => {
				const el = $(ev.currentTarget),
					popperContent = el.find('.c-poppertext');

				popperContent.css({
					position: 'fixed',
					top: el[0].getBoundingClientRect().top + (popperContent.height() / 2),
					left: el[0].getBoundingClientRect().left + (el[0].getBoundingClientRect().width + 15),
					transform: 'unset'
				})
			},
			(ev) => {}
		);
	};


	const userToggle = () => {
		$('[user-js]').on('click', (ev) => {
			$(ev.currentTarget).siblings('[user-dropdown-js]').toggleClass('is-open');
		});
	};


	const searchToggle = () => {
		$('[search-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				searchNode = $('[search-node-js]');

			el.toggleClass('is-active');
			searchNode.toggleClass('is-open');

			setTimeout(() => {
				searchNode.find('input').focus();
			}, 100);
		});
	};


	const dropdownCB = () => {
		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-node-js]');

			elParent.find('[dropdown-js]').toggleClass('is-open');
		});
	};


	const filterBox = () => {
		$("[filter-js] input[type='radio']").on('change', (ev) => {
			const el = $(ev.currentTarget),
				elFilterName = el.attr('data-name');

			if(elFilterName === 'all') {
				$('[verification-box-js]').parent().fadeIn(300);
			} else {
				$('[verification-box-js]').parent().hide();
				$('[verification-box-js][data-name="' + elFilterName + '"]').parent().fadeIn(300);
			}
		});
	};


	const reportCB = () => {
		$('[show-result-js]').on('click', (ev) => {
			const reportNode = $('#report');

			if(reportNode.hasClass('is-open')) {
				reportNode.removeClass('is-open');
				$('html, body').removeClass('is-hideScroll');
			} else {
				reportNode.addClass('is-open');
				$('html, body').addClass('is-hideScroll');
			}
		});

		$('[report-close-js]').on('click', (ev) => {
			$('#report').removeClass('is-open');
			$('html, body').removeClass('is-hideScroll');
		});

		$("[report-select-all]").on('change', (ev) => {
			const el = $(ev.currentTarget),
				checkboxArr = $('[report-checked-js] input[type="checkbox"]');

			if(el.is(':checked')) {
				checkboxArr.prop('checked', true);
			} else {
				checkboxArr.prop('checked', false);
			}
		});

		$('[report-checked-js] input[type="checkbox"]').on('change', (ev) => {
			const el = $(ev.currentTarget),
				selectAllCheckbox = $("[report-select-all]");

			let count = true;

			if(count === true) {
				selectAllCheckbox.prop('checked', false);
				count = false;
			}
		});
	};


	const chartCB = () => {
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
			series: [
				{
					name: "Verified",
					data: [10, 52, 38, 45, 19]
				}
			],
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
				show: false,
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
				categories: [
					"1",
					"2",
					"3",
					"4",
					"5"
				]
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
			series: [
				{
					name: "Disposable",
					data: [55, 1, 84, 99, 10]
				}
			],
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
				show: false,
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
				categories: [
					"1",
					"2",
					"3",
					"4",
					"5"
				]
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
			series: [
				{
					name: "Duplicate",
					data: [99, 55, 1, 74, 10]
				}
			],
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
				show: false,
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
				categories: [
					"1",
					"2",
					"3",
					"4",
					"5",
				]
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
			series: [
				{
					name: "Spam-traps",
					data: [1, 30, 10, 5, 20]
				}
			],
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
				show: false,
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
				categories: [
					"1",
					"2",
					"3",
					"4",
					"5"
				]
			},
		};
		var optionsBlock1 = {
			chart: {
				height: 550,
				type: 'line',
				stacked: true,
				toolbar: {
					show: false,
					autoSelected: 'zoom'
				},
			},
			colors: ['#2a77f4', '#1ccab8',],
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
				strokeDashArray: 4,
			},
			markers: {
				size: 0,
				hover: {
					size: 0
				}
			},
			series: [{
				name: 'Revenue',
				data: [0,60,20,90,45,110,55,130,44,110,75,200]
			}, {
				name: 'New Orders',
				data: [0,45,10,75,35,94,40,115,30,105,65,190]
			}],

			xaxis: {
				type: 'datetime',
				categories: ["2020-09-19T00:00:00", "2020-09-19T01:30:00", "2020-09-19T02:30:00", "2020-09-19T03:30:00", "2020-09-19T04:30:00", "2020-09-19T05:30:00", "2020-09-19T06:30:00", "2020-09-19T07:30:00", "2020-09-19T08:30:00", "2020-09-19T09:30:00", "2020-09-19T10:30:00", "2020-09-19T11:30:00"],
				axisBorder: {
					show: true,
					color: '#45404a2e',
				},
				axisTicks: {
					show: true,
					color: '#45404a2e',
				},
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			legend: {
				show: false,
				position: 'top',
				horizontalAlign: 'right'
			},
		};
		var optionsBlock2 = {
			series: [{
				name: 'Revenue',
				data: [31, 40, 28, 51, 42, 109, 100]
			},],
			chart: {
				height: 550,
				type: 'area',
				toolbar: {
					show: false,
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			colors: ['#1eca87'],
			xaxis: {
				type: 'day',
				categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return "$" + value + "k";
					}
				},
			},
			legend: {
				show: false,
			},
			grid: {
				borderColor: "#45404a2e",
				padding: {
					left: 0,
					right: 0
				},
				strokeDashArray: 4,
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
		};
		var optionsBlock3 = {
			series: [{
				name: 'Revenue',
				data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100, 42, 109, 100]
			},],
			chart: {
				height: 550,
				type: 'bar',
				toolbar: {
					show: false,
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			colors: ['#00b9ca'],
			xaxis: {
				type: 'day',
				categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Thu", "Fri", "Sat"]
			},
			yaxis: {
				labels: {
					formatter: function (value) {
						return "$" + value + "k";
					}
				},
			},
			legend: {
				show: false,
			},
			grid: {
				borderColor: "#45404a2e",
				padding: {
					left: 0,
					right: 0
				},
				strokeDashArray: 4,
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
		};

		if($('#chartBox1').length > 0) {
			var chartBox1 = new ApexCharts(document.querySelector("#chartBox1"), optionsBox1);
			chartBox1.render();
		}
		if($('#chartBox2').length > 0) {
			var chartBox2 = new ApexCharts(document.querySelector("#chartBox2"), optionsBox2);
			chartBox2.render();
		}
		if($('#chartBox3').length > 0) {
			var chartBox3 = new ApexCharts(document.querySelector("#chartBox3"), optionsBox3);
			chartBox3.render();
		}
		if($('#chartBox4').length > 0) {
			var chartBox4 = new ApexCharts(document.querySelector("#chartBox4"), optionsBox4);
			chartBox4.render();
		}
		if($('#chartBlock1').length > 0) {
			var chartBlock1 = new ApexCharts(document.querySelector("#chartBlock1"), optionsBlock1);
			chartBlock1.render();
		}
		if($('#chartBlock2').length > 0) {
			var chartBlock2 = new ApexCharts(document.querySelector("#chartBlock2"), optionsBlock2);
			chartBlock2.render();
		}
		if($('#chartBlock3').length > 0) {
			var chartBlock3 = new ApexCharts(document.querySelector("#chartBlock3"), optionsBlock3);
			chartBlock3.render();
		}
	};


	const tabCB = () => {
		$('[tab-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elID = el.attr('data-id');

			$('[tab-js]').removeClass('is-active');
			el.addClass('is-active');

			$('[tab-content-js]').removeClass('is-active');
			$('[tab-content-js][data-content="' + elID + '"]').addClass('is-active');

		});
	};


	const apiBoxResult = () => {
		$('[apibox-js]').on('click', (ev) => {
			$('html, body').addClass('is-hideScroll');
			$('[apibox-result-js]').addClass('is-open');
		});

		$('[apibox-back-js]').on('click', (ev) => {
			$('html, body').removeClass('is-hideScroll');
			$('[apibox-result-js]').removeClass('is-open');
		});
	};


	const settingBtn = () => {
		$('[setting-btn-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
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


	const initNative = () => {
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

	window.addEventListener('load', () => {
		initNative();
	}, false);
})();
