const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 1

let int  = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%` //this changes the inner text of html and replaces it with load variable
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}