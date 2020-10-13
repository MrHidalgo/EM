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
		$("[filter-js] input[type='checkbox']").on('checked', (ev) => {
			const el = $(ev.currentTarget),
				elFilterName = el.attr('data-name');

			// if(elFilterName === 'all') {
			// 	$('[verification-box-js]').fadeIn(300);
			// }
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
		bodyCB();
		inputFocus();
		passwordCB();
		sidebarCB();
		userToggle();
		searchToggle();
		dropdownCB();
		filterBox();
		// ==========================================
	};

	window.addEventListener('load', () => {
		initNative();
	}, false);
})();
