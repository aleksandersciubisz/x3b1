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

const smallHax = document.querySelectorAll('.small-hax')

smallHax.forEach((el) => {
	el.addEventListener('mouseover', (event) => {
		const { target } = event
		let iteration = 0
		const chars = ['x', '3', 'b', '1']
		target.dataset.originalText = target.innerText // Zapisuje oryginalny tekst
		clearInterval(target.interval)
		target.interval = setInterval(() => {
			if (iteration < chars.length * 1) {
				const index = iteration % chars.length
				target.innerText = chars[index] // Wyświetla kolejne znaki
				iteration++
			} else {
				clearInterval(target.interval)
				target.innerText = target.dataset.originalText // Przywraca oryginalny tekst
			}
		}, 60) // Przerwa między zmianą znaku
	})
})
// -----------------------
const nav = document.getElementById('nav')
const menu = document.getElementById('menu')

nav.addEventListener('click', toggleMenu)

function toggleMenu() {
	nav.classList.toggle('open')
	menu.classList.toggle('show-menu')
	nav.textContent = nav.classList.contains('open') ? 'exit' : 'more'
	nav.setAttribute(
		'data-value',
		nav.classList.contains('open') ? 'exit' : 'more'
	)
}
