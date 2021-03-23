const container = document.querySelector('#container')

const helloContainer = document.querySelector('.helloText')
const btnLogin = document.querySelector('.btnLogin')

function getUserLang() {
  userLanguage = window.navigator.language
  getUserHello(userLanguage)

}

async function getUserHello(userLang) {
  const ipURL = `http://ip-api.com/json/?lang=${userLang}`
  const ipResponse = await fetch(ipURL)
  const ipResult = await ipResponse.json()

  const helloURL = `https://fourtonfish.com/hellosalut/?ip=${ipResult.query}`
  const helloResponse = await fetch(helloURL)
  const helloResult = await helloResponse.json()

  helloContainer.innerHTML = helloResult.hello
  document.title = helloContainer.innerHTML
}

getUserLang()

function userLogin() {
  const loggedContainer = document.querySelector('.loggedContainer')
  const loginContainer = document.querySelector('.loginContainer')
  
  loggedContainer.classList.remove('closed')
  loginContainer.classList.add('closed')

  setTimeout(() => {
    loggedContainer.classList.add('closed')
    loginContainer.classList.remove('closed')
  }, 3000)

}

btnLogin.addEventListener('click', () => {
  const inputLogin = document.querySelector('.inputLogin')
  const inputPassword = document.querySelector('.inputPassword')
  
  if ( !inputLogin.length || !inputPassword.length ) return
  else userLogin()


})


