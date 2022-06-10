const contentRight = document.querySelector('.content__right') //** Container for dynamic user data */
const messageInput = document.querySelector('.message__input') //** Get user password message */
const passwordInput = document.querySelector('.password__input') //** Get users password length */
const submitButton = document.querySelector('.btn') //** Form submission */

// TODO Dynamically generate a card for the users information
const contentInfo = document.createElement('div')
const message = document.createElement('div')
const passwordMessage = document.createElement('div')
const password = document.createElement('div')
const dateMessage = document.createElement('div')
const active = document.createElement('div')
const messageIcons = document.createElement('div')
const spanMessage = document.createElement('span') 
const spanPassword = document.createElement('span') 
const spanDate = document.createElement('span') 
const divCopy = document.createElement('div') 
const divDelete = document.createElement('div') 
const iconCopy = document.createElement('i')
const iconDelete = document.createElement('i')


contentInfo.className = 'content__info'
message.className = 'message'
passwordMessage.className = 'user__info'
dateMessage.className = 'user__info'
password.className = 'password'
active.className = 'active'
messageIcons.className = 'message__icons'
iconCopy.className = 'fa-solid'
iconDelete.className = 'fa-solid'


spanMessage.textContent = 'Database MySQL pass code.'
passwordMessage.appendChild(spanMessage)

spanPassword.textContent = 'Password'
active.innerText = 'Active'
password.appendChild(spanPassword)
password.appendChild(active)

spanDate.innerText = 'Date'
dateMessage.appendChild(spanDate)


iconCopy.classList.add('fa-clipboard')
iconDelete.classList.add('fa-eraser')
divDelete.classList.add('delete')

divCopy.appendChild(iconCopy)
divDelete.appendChild(iconDelete)
messageIcons.appendChild(divCopy)
messageIcons.appendChild(divDelete)


message.appendChild(passwordMessage)
message.appendChild(password)
message.appendChild(dateMessage)

contentInfo.appendChild(message)
contentInfo.appendChild(messageIcons)

console.log(contentInfo)
contentRight.appendChild(contentInfo)






