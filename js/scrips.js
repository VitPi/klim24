//


"use strict";

//


const buttonBasket = document.querySelectorAll('.button-basket');
const buttonCity = document.querySelectorAll('.city')
const boxNav = document.querySelectorAll('.box-nav')
const purchases = document.querySelector('.list-item') // ul


function colorOnButton() {
    this.classList.add('color-but')
}

function deleteColorOnButton() {
    setTimeout(() => {
        this.classList.remove('color-but')
    }, 150)
}

buttonBasket.forEach(el => {
    el.addEventListener('click', colorOnButton)
    el.addEventListener('click', deleteColorOnButton)
    el.addEventListener('click', () => {
        const li = document.createElement('li')
        const h6 = document.createElement('h6')
        const span = document.createElement('span')
        const section = document.createElement('section')
        h6.innerHTML = el.previousElementSibling.previousElementSibling.innerHTML
        h6.className = 'item-purchase'
        li.className = 'product'
        span.className = 'close'
        section.className = 'box-purchase'
        purchases.append(li)
        li.appendChild(section)
        section.appendChild(h6)
        section.appendChild(span)

        const close = document.querySelectorAll('.close')

        close.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.closest('li').remove()
            })
        })

    })
})


buttonCity.forEach(city => {

    city.addEventListener('click', () => {
        buttonCity.forEach(city2 => {
            city2.classList.remove('city-on')
        })

        boxNav.forEach(navInd => {
            navInd.classList.add('box-nav-none')
        })

        city.classList.add('city-on')

        boxNav[city.id].classList.remove('box-nav-none')

    })

})






