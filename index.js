const color = document.getElementById('color')
const select = document.getElementById('selection')
const button = document.getElementById('button')
const colorPlaceholder = document.querySelectorAll('.color > div')
const colorPlaceholderHex = document.querySelectorAll('.color > p')

console.log(colorPlaceholder)

button.addEventListener('click', () => {

    const colorValue = color.value.slice(1, 7)
    const selectValue = select.value

    console.log(colorValue)
    console.log(selectValue)

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${selectValue}&count=5`)
        .then(resp => resp.json())
        .then(data => {
            
            const colorArray = data.colors
            colorArray.map((item, index) => {
                colorPlaceholder[index].style.backgroundColor = item.hex.value
                colorPlaceholderHex[index].textContent = item.hex.value
            })
        })
})


// colorPlaceholder.addEventListener('click', (e) => {
//     console.log(e.currentTarget.tagName)
// })

colorPlaceholder.forEach((element, e) => {
    console.log(e.currentTarget.tagName)
});