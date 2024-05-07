function updateColors() {
	const windowHeight = window.innerHeight

	const elements = document.querySelectorAll('a, button, .btn, .tenet')

	elements.forEach((element) => {
		const rect = element.getBoundingClientRect()

		if (rect.top + rect.height / 2 < windowHeight / 2) {
			element.style.setProperty('--tenet', 'var(--lr)')
		} else {
			element.style.setProperty('--tenet', 'var(--lb)')
		}
	})
}

document.addEventListener('DOMContentLoaded', updateColors)

document.addEventListener('scroll', updateColors)
