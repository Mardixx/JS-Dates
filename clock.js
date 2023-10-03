let firstDiv = document.createElement('div')
let secondDiv = document.createElement('div')
let thirdDiv = document.createElement('div')
let bigdiv = document.createElement('div')
let bigdivnumber = document.createElement('div')
let hours = document.createElement('div')
let minutes = document.createElement('div')
let seconds = document.createElement('div')
let date = new Date()

firstDiv.classList.add('clockTop')
secondDiv.classList.add('clockMiddle')
thirdDiv.classList.add('clockBottom')
bigdiv.classList.add('clock')
bigdivnumber.classList.add('digits')
hours.classList.add('numbers')
minutes.classList.add('numbers')
seconds.classList.add('seconds')

document.body.appendChild(bigdiv)
document.body.appendChild(bigdivnumber)
bigdivnumber.appendChild(hours)
bigdivnumber.appendChild(minutes)
bigdivnumber.appendChild(seconds)
document.body.appendChild(firstDiv, secondDiv, thirdDiv)

bigdiv.appendChild(firstDiv)
bigdiv.appendChild(secondDiv)
bigdiv.appendChild(thirdDiv)

firstDiv.textContent = date.getDay()
thirdDiv.textContent = date.getFullYear()



hours.textContent = date.getHours('fr-FR') + ':'
minutes.textContent = date.getMinutes('fr-FR') + ':'
seconds.textContent = date.getSeconds('fr-FR')

function clock() {
    let date = new Date()
    hours.textContent = date.getHours('fr-FR') + ':'
    minutes.textContent = date.getMinutes('fr-FR') + ':'
    seconds.textContent = ''
    seconds.textContent = date.getSeconds('fr-FR')
    if (date.getHours() < 10) {
        hours.textContent = '0' + date.getHours('fr-FR') + ':'
    }
    else if (date.getMinutes() < 10) {
        minutes.textContent = '0' + date.getMinutes('fr-FR') + ':'
    }
    else if (date.getSeconds() < 10) {
        seconds.textContent = '0' + date.getSeconds('fr-FR')
    }
    else if (date.getDate() < 10) {
       secondDiv.textContent =  '0' + date.getDate()
    }
    switch (date.getMonth()) {
        case 0:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Jan'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Jan'
            }
            break;
        case 1:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Feb'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Feb'
            }
            break;
        case 2:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Mar'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Mar'
            }
            break;
        case 3:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Apr'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Apr'
            }
            break;
        case 4:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' May'
             }
            else {
                secondDiv.textContent = date.getDate() + ' May'
            }
            break;
        case 5:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Jun'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Jun'
            }
            break;
        case 6:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Jul'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Jul'
            }
            break;
        case 7:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Aug'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Aug'
            }
            break;
        case 8:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Sep'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Sep'
            }
            break;
        case 9:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Oct'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Oct'
            }
            break;
        case 10:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Nov'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Nov'
            }
            break;
        case 11:
            if (date.getDate() < 10) {
                secondDiv.textContent =  '0' + date.getDate() + ' Dev'
             }
            else {
                secondDiv.textContent = date.getDate() + ' Dec'
            }
            break;
    }   
    switch (date.getDay()) {
        case 1:
            firstDiv.textContent = 'Mon'
            break;
        case 2:
            firstDiv.textContent = 'Tue'
            break;
        case 3:
            firstDiv.textContent = 'Wed'
            break;
        case 4:
            firstDiv.textContent = 'Thu'
            break;
        case 5:
            firstDiv.textContent = 'Fri'
            break;
        case 6:
            firstDiv.textContent = 'Sat'
            break;
        case 7:
            firstDiv.textContent = 'Sun'
            break;
    }
}

clock()

let timer = setInterval(clock, 1000)

function clock12() {
    let newDate = new Date()
        hours.textContent = newDate.getHours('en-US') + ':'
        minutes.textContent = newDate.getMinutes('en-US') + ':'
        seconds.textContent = ''
        seconds.textContent = newDate.getSeconds('en-US')
    if (newDate.getHours() > 12) {
        switch (date.getHours()) {
            case 13:
                hours.textContent = '01' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 14:
                hours.textContent = '02' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 15:
                hours.textContent = '03' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 16:
                hours.textContent = '04' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 17:
                hours.textContent = '05' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 18:
                hours.textContent = '06' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 19:
                hours.textContent = '07' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 20:
                hours.textContent = '08' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 21:
                hours.textContent = '09' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 22:
                hours.textContent = '10' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 23:
                hours.textContent = '11' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
            case 24:
                hours.textContent = '12' + ':'
                seconds.textContent = newDate.getSeconds('en-US') + ' PM'
                break;
        }

    }
    else if (newDate.getHours() < 12) {
        seconds.textContent = newDate.getSeconds('en-US') + ' AM'
    }
    else if (newDate.getHours() < 10) {
        hours.textContent = '0' + newDate.getHours('en-US') + ':'
    }
    else if (newDate.getMinutes() < 10) {
        minutes.textContent = '0' + newDate.getMinutes('en-US') + ':'
    }
    else if (newDate.getSeconds() < 10) {
        seconds.textContent = '0' + newDate.getSeconds('en-US')
    }
    else if (newDate.getDate() < 10) {
       secondDiv.textContent =  '0' + newDate.getDate()
    }
    switch (newDate.getMonth()) {
        case 0:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Jan'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Jan'
            }
            break;
        case 1:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Feb'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Feb'
            }
            break;
        case 2:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Mar'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Mar'
            }
            break;
        case 3:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Apr'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Apr'
            }
            break;
        case 4:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' May'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' May'
            }
            break;
        case 5:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Jun'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Jun'
            }
            break;
        case 6:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Jul'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Jul'
            }
            break;
        case 7:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Aug'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Aug'
            }
            break;
        case 8:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Sep'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Sep'
            }
            break;
        case 9:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Oct'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Oct'
            }
            break;
        case 10:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Nov'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Nov'
            }
            break;
        case 11:
            if (newDate.getDate() < 10) {
                secondDiv.textContent =  '0' + newDate.getDate() + ' Dev'
             }
            else {
                secondDiv.textContent = newDate.getDate() + ' Dec'
            }
            break;
    }   
    switch (newDate.getDay()) {
        case 1:
            firstDiv.textContent = 'Mon'
            break;
        case 2:
            firstDiv.textContent = 'Tue'
            break;
        case 3:
            firstDiv.textContent = 'Wed'
            break;
        case 4:
            firstDiv.textContent = 'Thu'
            break;
        case 5:
            firstDiv.textContent = 'Fri'
            break;
        case 6:
            firstDiv.textContent = 'Sat'
            break;
        case 7:
            firstDiv.textContent = 'Sun'
            break;
    }
    console.log('Done');
}
let changeClock = document.querySelector('.digits')


changeClock.addEventListener('click', () => {
    clearInterval(timer)
    clock12()
    let timer2 = setInterval(clock12, 1000)
    changeClock.classList.remove('digits')
    changeClock.classList.add('digits2')
    let changeClock2 = document.querySelector('.digits2')
    if (changeClock2) {
        changeClock2.addEventListener('click', () => {
            clearInterval(timer2)
            clock()
            setInterval(clock, 1000)
            changeClock.classList.add('digits')
            changeClock.classList.remove('digits2')
        })
    }
})

