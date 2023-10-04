











// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


currentIndex = 0
setReasonsAnimate(currentIndex)

currentIndex2 = 0
setReasonsAnimateTwo(currentIndex2)

currentIndex3 = 0
setReasonsAnimateThree(currentIndex3)



document.addEventListener('DOMContentLoaded', function () {
	// Смена слов в первом блоке
	let firstSection = document.querySelector('.first_section .title .swiper')

	if (firstSection) {
		new Swiper('.first_section .title', {
			loop: true,
			speed: 500,
			spaceBetween: 12,
			slidesPerView: 1,
			direction: 'vertical',
			allowTouchMove: false,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
		})
	}
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews')



	// Смена слов в нижнем блоке
	let bottomSection = document.querySelector('.bottom_section .title .swiper')


	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.review')),
				resize: swiper => {
					let reviews = swiper.el.querySelectorAll('.review')

					reviews.forEach(el => el.style.height = 'auto')

					setHeight(reviews)
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})

	if (bottomSection) {
		new Swiper('.bottom_section .title', {
			loop: true,
			speed: 500,
			spaceBetween: 12,
			slidesPerView: 1,
			direction: 'vertical',
			allowTouchMove: false,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
		})
	}


	// Карусель отзывов



	// First section animation
	$('.first_section .image').addClass('animating')


	// Reasons animation
	currentIndex = 0

	setReasonsAnimate(currentIndex)



	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				$('header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('.mob_menu').removeClass('show')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				}, 1000)
			})
		})
	}


	// Моб. меню
	$('header .mob_menu_btn, .mob_menu .close_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('.mob_menu').toggleClass('show')
	})


	// Анимация чисел
	countUpLikes()
})


window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})




// Reasons animation
function setReasonsAnimate(index) {

	$('.reasons .items .item').removeClass('animating')
	$('.reasons .items .item').eq(index).addClass('animating')

	setTimeout(() => {
		(currentIndex + 1) == $('.reasons .items .item').length
			? currentIndex = 0
			: currentIndex++

		setReasonsAnimate(currentIndex)
	}, 2000)
	
}

// Reasons animation
function setReasonsAnimateTwo(index) {
	$('.reasons__content .body-reasons__columns .body-reasons__item').removeClass('animating')
	$('.reasons__content .body-reasons__columns .body-reasons__item').eq(index).addClass('animating')
		setTimeout(() => {
				(currentIndex2 + 1) == $('.reasons__content .body-reasons__columns .body-reasons__item').length
					? currentIndex2 = 0
					: currentIndex2++

				setReasonsAnimateTwo(currentIndex2)
			}, 600)
}







function setReasonsAnimateThree(index) {
	$('.about__content-mob .about__item-mob').removeClass('animating')
	$('.about__content-mob .about__item-mob').eq(index).addClass('animating')

	setTimeout(() => {
		(currentIndex3 + 1) == $('.about__content-mob .about__item-mob').length
			? currentIndex3 = 0
			: currentIndex3++

		setReasonsAnimateThree(currentIndex3)

	}, 400)

}






  let iconMenu = document.querySelector(".icon-menu");
  if (iconMenu != null){
	let delay = 500;//задержка
	let body=document.querySelector("body");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
	});
  };
  function menu_close(){
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
  }
  
  
  
  document.querySelector(".first_section .image").classList.add("animating");
  
  
  
  $(function () {	

	var $popup = $('.js-popup');

	//popup-close
	var hideContainer = function () {
		$popup.closest(".content").find('.js-popup-box').removeClass('is-active');
	};

	//popup
	$('[data-popup-link]').on('click', function (e) {
		var $ddLink = $(e.currentTarget).data('popup-link');
		var $ddBox = $('[data-popup-box= "'+ $ddLink +'"]');
		e.stopPropagation();
		$ddBox.addClass('is-active');
	});

	//popup-close
  $('body').on('click', '.js-popup-close-btn', function () {
    hideContainer();
  });

	$('body').on('click', function (e) {
		if ($(e.target).closest($popup).length == 0 ) {
			hideContainer();
		}
	});
});


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


}



const time = 500000;
const step = 1;

function outNum(num, elem) {
  let e = document.querySelector("#out");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(999, "#out");











function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
	   change.target.classList.add('element-show');
	  }
	});
  }
  
  let options = {
	threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
	observer.observe(elm);
  }








  const swiper = new Swiper('.swiper2', {
	effect: "coverflow",
	slidesPerView:4,
    clickable:true,
	coverflowEffect: {
		rotate: 0,
		stretch: 11,
		depth:50,
		modifier: 2,
		slideShadows: false,
	  },
	pagination: {
		el: '.swiper-pagination',
        clickable:true,
	  },

	  breakpoints: {
        358: {
            slidesPerView: 'auto',
			effect: "normal",
			spaceBetween:10,
			centeredSlides: true,
			clickable:true,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth:0,
				modifier: 0,
				slideShadows: false,
			  },
        },
		768: {
			slidesPerView: 4,
			slidesPerGroup: 1,
			loop: false,
			centeredSlides: true,
			speed: 500,
			initialSlide:2,
			spaceBetween: 20,
			autoplay: {
			  delay: 3000
			},

		},

	}
  });



