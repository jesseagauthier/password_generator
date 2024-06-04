// Event Listeners
document.getElementById('generate').addEventListener('click', generatePassword)
document
	.getElementById('copy-button')
	.addEventListener('click', copyToClipboard)

// Container to output the generated password
const passwordOutputContainer = document.getElementById('password-output')
const copyButton = document.getElementById('copy-button')

function generatePassword() {
	const generatedPassword = []
	const listOfCharacters = []
	const passwordLength = parseInt(document.getElementById('length').value, 10)
	const withLowerCase = document.getElementById('include-lowercase').checked
	const withUpperCase = document.getElementById('include-uppercase').checked
	const withNumbers = document.getElementById('include-numbers').checked
	const withSymbols = document.getElementById('include-symbols').checked

	const caseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const numbers = '0123456789'
	const symbols = '~`!@#$%^&*()_-+={[}]|:;'

	if (withLowerCase) {
		listOfCharacters.push(...caseLetters)
	}
	if (withUpperCase) {
		listOfCharacters.push(...caseLetters.toUpperCase())
	}
	if (withNumbers) {
		listOfCharacters.push(...numbers)
	}
	if (withSymbols) {
		listOfCharacters.push(...symbols)
	}

	if (listOfCharacters.length === 0) {
		passwordOutputContainer.innerText =
			'Please select at least one character type.'
		copyButton.disabled = true
		return
	}

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * listOfCharacters.length)
		generatedPassword.push(listOfCharacters[randomIndex])
	}

	passwordOutputContainer.innerText = generatedPassword.join('')
	passwordOutputContainer.setAttribute('aria-live', 'polite')
	copyButton.disabled = false
}

function copyToClipboard() {
	const password = passwordOutputContainer.innerText
	navigator.clipboard.writeText(password).then(
		() => {
			alert('Password copied to clipboard!')
		},
		(err) => {
			console.error('Could not copy text: ', err)
		}
	)
}
