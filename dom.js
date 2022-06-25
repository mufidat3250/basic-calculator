let body =  document.querySelector('body')
let nam  = document.createElement('span')
let sufix = document.createElement('span')
let together = document.createElement('p')


body.style.backgroundColor = 'red';

nam.innerHTML ='hhh'

together.innerHTML = `country: Nigeria`

body.appendChild(nam)

let height = document.createElement('h2')
height.innerHTML = '46'
body.appendChild(height)
body.appendChild(together)