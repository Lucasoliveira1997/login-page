const signUpButton = document.querySelector('#signUpButton')
const signInButton = document.querySelector('#signInButton')
const container = document.querySelector('#container')

signUpButton.addEventListener('click', () => {
    console.log('signUp')    
    return container.classList.add('right-panel-active')
})

signInButton.addEventListener('click', () => {
    console.log('signIn')    
    return container.classList.remove('right-panel-active')
})

