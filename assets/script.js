const contactBtn = document.getElementById('contact-btn')
const contact = document.getElementById('contact')

const moreBtn = document.getElementById('more-btn')
const more = document.getElementById('more')

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
