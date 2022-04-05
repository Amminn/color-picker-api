const color = document.getElementById('color')
const select = document.getElementById('selection')
const button = document.getElementById('button')
const colorPlaceholder = document.querySelectorAll('.color > div')
const colorPlaceholderHex = document.querySelectorAll('.color > p')

/* get color scheme button */
button.addEventListener('click', () => {

    /* get color value without # */
    const colorValue = color.value.slice(1, 7)
    const selectValue = select.value

    /* Getting the data from the API */
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectValue}&count=5`)
        .then(resp => resp.json())
        .then(data => {

            const colorArray = data.colors

            /* Printing color values and Changing background-colors */
            colorArray.map((item, index) => {
                colorPlaceholder[index].style.backgroundColor = item.hex.value
                colorPlaceholderHex[index].textContent = item.hex.value
            })
        })
})

/* Copy color value function */
colorPlaceholderHex.forEach(element => {
    element.addEventListener('click', () => {
      document.execCommand('copy')
      element.innerHTML += `<span class="copied">Copied</span>` 
    })
})
