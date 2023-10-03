
let dateInThePast = new Date('2004-12-09')

// Almost all ways to get time

/* console.log(today.toDateString());

console.log(dateInThePast.toISOString());

console.log(dateInThePast.toLocaleDateString());

console.log(dateInThePast.toLocaleString());

console.log(dateInThePast.toLocaleTimeString());

console.log(dateInThePast.toString());

console.log(dateInThePast.toTimeString());

console.log(dateInThePast.toUTCString());

console.log(dateInThePast.getDate()) 

console.log(dateInThePast.getDay()) 

console.log(dateInThePast.getFullYear()) 

console.log(dateInThePast.getHours())

console.log(dateInThePast.getMilliseconds()) 

console.log(dateInThePast.getMinutes()) 

console.log(dateInThePast.getMonth()) 

console.log(dateInThePast.getSeconds())  */

// Number of seconds from halloween 2002 to 1 january 1970 and minutes from halloween 2002 to christmas 1995  

/* let christmas1995 = new Date('1995-12-25')
let halloween2002 = new Date('2002-10-30') */

// 01/01/1970 is the default value for the getTime() function

/* console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')

console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c') */

// Timezones Exo 1

/* console.log(today.toLocaleString('br-BR', {timeZone: 'America/Anchorage'}));

console.log(today.toLocaleString('br-BR', {timeZone: 'Iceland'}));

console.log(today.toLocaleString('br-BR', {timeZone: 'Europe/Moscow'})); */

//Numbers of days from now to a certain date Exo 2

let today = new Date()

let bDay = new Date('December 09, 2004, 22:00:00 GMT')

/* console.log(bDay.toLocaleString('br-BR'), {timeZone: 'GMT'});

console.log((today.getTime() - bDay.getTime()) / (1000 * 60 * 60 * 24)); */

let button = document.querySelector('.addDate')

function givenTime() {

    let givenTime = new Date()

    let newTime = ''
    
    console.log(givenTime.toLocaleString('br-BR')); 

    let givenValue = newTime.innerHTML = new Date(prompt('Give me a Date Ex: October 12, 2003, 10:00:00'))

    console.log((givenTime.getTime() - givenValue.getTime()) / (1000 * 60 * 60 * 24));
}

button.addEventListener('click', () => {
    givenTime()
})

//Get date in 80000 Hours Exo 3

/* let _80000Hours = 1000 * 60 * 60 * 80000

let addedDate = new Date(today.getTime() + _80000Hours)

console.log(today.toLocaleString());

console.log(addedDate.toLocaleString('br-BR')); */

// Display date for nunmber of hours given in the future Exo 3

let input = document.querySelector('#numberInput')

function futureTime() {
    let givenHours = input.value

    let days = 1000 * 60 * 60 * givenHours

    let addedHoursDate = new Date(today.getTime() + days)

    let div = document.createElement('div')

    div.textContent = addedHoursDate

    document.body.appendChild(div)
}



input.addEventListener('keyup', (input) => {
    switch (input.keyCode) {
        case input = 16:
            break;
        case input = 20:
            break;
        case input = 8:
            break;
        case input = 13:
            break;
        default:
            futureTime()
            break;
    }

})
