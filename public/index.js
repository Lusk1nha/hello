const container = document.querySelector('#container')

const loggedContainer = document.querySelector('.loggedContainer')
  const loginContainer = document.querySelector('.loginContainer')

const helloContainer = document.querySelector('.helloText')
const inputLogin = document.querySelector('.inputLogin')
const inputPassword = document.querySelector('.inputPassword')

const btnLogin = document.querySelector('.btnLogin')
const btnLogout = document.querySelector('.btnLogout')

let password = ''

function getUserLang() {
  userLanguage = window.navigator.language
  getUserHello(userLanguage)
  
}
getUserLang()

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


function userLogin(userLogin) {
  const textName = document.querySelector(".name")
  const logoutName = document.querySelector('.logoutName')

  textName.innerHTML = userLogin
  logoutName.innerHTML = userLogin + '!'
  
  loggedContainer.classList.remove('closed')
  loginContainer.classList.add('closed')

}

function userLogout() {
  const logoutContainer = document.querySelector('.logoutContainer')
  logoutContainer.classList.remove('closed')
  loggedContainer.classList.add('closed')

  setTimeout(() => {
    logoutContainer.classList.add('closed')
    loginContainer.classList.remove('closed')

    inputLogin.value = ''
    inputPassword.value = ''

  }, 3000)
}


function hidePassword(input) {
  let asterisc = ''

  for ( const letter of input.target.value ) {
    asterisc += "*"

  }
  
  input.target.value = ''
  input.target.value = asterisc
}

inputPassword.addEventListener('keydown', hidePassword)

btnLogin.addEventListener('click', () => {

  if ( !inputLogin.value.length && !inputPassword.value.length ) {
    inputLogin.classList.add('invalid')
    inputPassword.classList.add('invalid')

  } else if ( !inputLogin.value.length ) {
    inputLogin.classList.add('invalid')
    inputPassword.classList.remove('invalid')

  } else if ( !inputPassword.value.length ) {
    inputPassword.classList.add('invalid')
    inputLogin.classList.remove('invalid')

  } else {
    inputPassword.classList.remove('invalid')
    inputLogin.classList.remove('invalid')
    
    return userLogin(inputLogin.value)
  }
})

btnLogout.addEventListener('click', userLogout)
