const contentRight = document.querySelector('.content__right') //** Container for dynamic user data */
const messageInput = document.querySelector('.message__input') //** Get user password message */
const passwordInput = document.querySelector('.password__input') //** Get users password length */
const submitButton = document.querySelector('.btn') //** Form submission */

const highlights = document.querySelectorAll('.highlight')
const modal = document.querySelector('.modal')

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

{/* <div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  This is an alert box.
</div> */}

// TODO ALERT BOX
const alertContainer = document.createElement('div')
const alertSpan = document.createElement('span')
const alertText = document.createElement('p')
alertSpan.className = 'closeBtn'
alertContainer.className = 'alert'
alertSpan.textContent = 'X'
alertText.textContent = 'Password successfully copied to clipboard'
alertContainer.appendChild(alertSpan)
alertContainer.appendChild(alertText)




// TODO Generate a password based on the user parameter
// *** Add an eventListener
const passwordGenerator = (mess, size) => {
    let invalid = false
    if(mess === '' || size === '') {
        invalid = true
        highlights.forEach(item => {
            item.classList.add('error')
        })
        return invalid
    }

    if (mess.length > 30) {
        invalid = true
        highlights.forEach(item => {
            highlights[0].classList.add('error')
            highlights[1].classList.remove('error')
            highlights[0].textContent = 'Message should be less than 30 character!'
        })
        return invalid
    }
    // convert size into an integer
    const passwordSize = parseInt(size)

    if (Number.isNaN(passwordSize) || (passwordSize < 8 || passwordSize > 20)) {
        invalid = true
        highlights.forEach(item => {
            if(item.classList.contains('size')){
                 highlights[0].classList.remove('error')
                 highlights[1].classList.add('error')
            }
            item.classList.add('error')
        })
        return invalid
    }

    highlights.forEach(item => {
        item.classList.remove('error')
    })

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!_@'
    const passwordString = Array(passwordSize).fill(characters).map(ch => {
        return ch[Math.floor(Math.random() * ch.length)]
    })
    
    return passwordString.join('')
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const passwordLength = passwordInput.value.trim()
    const useTextMessage = messageInput.value.trim()
    const passwordString = passwordGenerator(useTextMessage, passwordLength)
    const createdAt = new Date().toLocaleDateString()

    if(passwordString === true){
        return
    }

    spanMessage.textContent = useTextMessage
    passwordMessage.appendChild(spanMessage)

    spanPassword.textContent = passwordString
    password.appendChild(spanPassword)

    spanDate.innerText = createdAt
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

    contentRight.append(contentInfo)
})

modal.appendChild(alertContainer)

iconCopy.addEventListener('click', (event) => {
    event.preventDefault()
    const cb = navigator.clipboard
    const password = spanPassword
    cb.writeText(password.innerText).then(() => {
        modal.classList.add('open')
         setTimeout(() => {
             modal.classList.remove('open')
             modal.classList.add('close')
         }, 3000)
    })
})

alertSpan.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove('open')
    modal.classList.add('close')
})