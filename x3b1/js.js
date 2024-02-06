let interval = null
const hax = document.querySelectorAll('.hax')

hax.forEach((el) => {
	el.addEventListener('mouseover', (event) => {
		clearInterval(interval)
		let iteration = 0
		interval = setInterval(() => {
			const { target } = event
			target.innerText = target.innerText
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return target.dataset.value[index]
					}
					return String.fromCharCode(97 + Math.floor(Math.random() * 26))
				})
				.join('')
			if (iteration >= target.dataset.value.length) {
				clearInterval(interval)
			}
			iteration += 1 / 3
		}, 30)
	})
})

// -----------------------
const nav = document.getElementById('nav')
const menu = document.getElementById('mobile-menu')

nav.addEventListener('click', navToggle)

function navToggle() {
	nav.classList.toggle('open')
	menu.classList.toggle('show-menu')
}
