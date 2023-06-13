// slider przyciski 

const leftBtn = document.querySelector('.slick-prev')
const rightBtn = document.querySelector('.slick-next')

leftBtn.innerHTML='<i class="fa-solid fa-chevron-left"></i>'
rightBtn.innerHTML='<i class="fa-solid fa-chevron-right"></i>'

//hide burger

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger-btn')

	function hideBurger() {
		if (window.scrollY >= 10) {
			burger.style.display = 'none'
		} else {
			burger.style.display = 'block'
		}
	}
	window.addEventListener('scroll', hideBurger)
})

// handle Nav Mobile

const navMobile = document.querySelector('.nav-mobile')
const burger = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav-item')

const handleNav = () => {
	navMobile.classList.toggle('nav-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')

		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

burger.addEventListener('click', handleNav)

//logo & nav desktop

const logo = document.querySelector('.logo')
const navDesktop = document.querySelector('.nav-desktop')
let about = document.querySelector('.about')

let distance = 0

do {
	distance += about.offsetTop

	about = about.offsetParent
} while (about)

distance = distance < 0 ? 0 : distance
console.log(distance)

const handleLogoNav = () => {
	const aboveHeading = window.scrollY

	if (aboveHeading >= distance) {
		logo.classList.add('logo-active')
		// navDesktop.classList.add('color-active')
		navDesktop.style.backgroundColor = 'rgba(190, 149, 196, 0.8)'
	} else {
		logo.classList.remove('logo-active')
		navDesktop.style.backgroundColor = 'transparent'

	}
}
window.addEventListener('scroll', handleLogoNav)
console.log(window.scrollY)

// slider (skills)

// const sliderBox = document.querySelector('.slider-box')
// const leftBtn = document.querySelector('.btn-left')
// const rightBtn = document.querySelector('.btn-right')
// const carouselImages = document.querySelectorAll('.slider-img')
// const carouselWidth = 20
// const carouselSpeed = 3000

// let index = 0

// const handleCarousel = () => {
// 	index++
// 	changeImage()
// }

// let startCarousel = setInterval(handleCarousel, carouselSpeed)

// const changeImage = () => {
// 	if (index > carouselImages.length - 1) {
// 		index = 0
// 	} else if (index < 0) {
// 		index = carouselImages.length - 1
// 	}

// 	sliderBox.style.transform = `translateX(${-index * carouselWidth}rem)`
// }

// const handleRightArrow = () => {
// 	index++
// 	resetInterval()
// }

// const handleLeftArrow = () => {
// 	index--
//     resetInterval()
// }

// const resetInterval = () => {
//     changeImage()
//     clearInterval(startCarousel)
// 	startCarousel = setInterval(handleCarousel, carouselSpeed)
// }

// rightBtn.addEventListener('click', handleRightArrow)

// leftBtn.addEventListener('click', handleLeftArrow)


// footer

const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
