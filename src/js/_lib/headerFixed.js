

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
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
