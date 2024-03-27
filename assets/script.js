const productBtn = document.querySelectorAll('.product-btn')
const product = document.getElementById('product')

const examplesBtn = document.querySelectorAll('.examples-btn')
const examples = document.getElementById('examples')

const contactBtn = document.getElementById('contact-btn')
const contact = document.getElementById('contact')

const moreBtn = document.getElementById('more-btn')
const more = document.getElementById('more')

productBtn.forEach((button) => {
	button.addEventListener('click', function () {
		product.classList.add('visible')
	})
})

examplesBtn.forEach((button) => {
	button.addEventListener('click', function () {
		examples.classList.add('visible')
	})
})

contactBtn.addEventListener('click', function () {
	contact.classList.add('visible')
})

moreBtn.addEventListener('click', function () {
	more.classList.add('visible')
})

// adress obfuscation
document.addEventListener('DOMContentLoaded', function () {
	var mailElement = document.getElementById('mail')
	if (mailElement) {
		mailElement.innerHTML =
			'<a href="mailto:aleksander@x3b1.com"><h3>aleksander@x3b1.com</h3></a>'
	}
})

// app filter
document.addEventListener('DOMContentLoaded', function () {
	const filterInput = document.getElementById('filter')
	const topicsContainer = document.getElementById('topics')

	function filterTopics() {
		const searchTerm = filterInput.value.toLowerCase()
		const topics = topicsContainer.querySelectorAll('a')

		topics.forEach((topic) => {
			const text = topic.textContent.toLowerCase()
			if (text.includes(searchTerm)) {
				topic.style.opacity = '1'
				topic.style.display = ''
			} else {
				topic.style.opacity = '0'
				// Use a timeout to set display:none after the opacity transition ends
				setTimeout(() => {
					if (topic.style.opacity === '0') {
						// Check again to avoid hiding an element if the input changed
						topic.style.display = 'none'
					}
				}, 300) // Match the duration of the opacity transition
			}
		})
	}

	filterInput.addEventListener('input', filterTopics)
})

// timer
document.addEventListener('DOMContentLoaded', function () {
	const targetDate = new Date(new Date().getFullYear(), 3, 15)
	const timerElement = document.getElementById('timer')

	function updateTimer() {
		const now = new Date()
		const timeDifference = targetDate - now

		if (timeDifference <= 0) {
			timerElement.textContent = 'Czas minął!'
			clearInterval(timerInterval)
			return
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		)

		timerElement.textContent = `${days}d ${hours}h ${minutes}m`
	}

	updateTimer()
	const timerInterval = setInterval(updateTimer, 60000)
})
