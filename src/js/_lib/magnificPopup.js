

/**
 * @name initPopups
 *
 * @description
 */
const initPopups = () => {

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
      beforeOpen: function() {
      	if($(window).width() > 767) {
		      this.st.mainClass = this.st.el.attr('data-effect');
	      } else {
		      this.st.mainClass = this.st.el.attr('data-effect-mobile');
	      }
      },
      close: function() {}
    }
  });

  $('[popup-close-js]').on('click', (ev) => {
  	$.magnificPopup.close();
	});
};
