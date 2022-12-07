function imgSlider(target, color) {
    document.querySelector('.starbucks').src = target
    const circle = document.querySelector('.circle')
    circle.style.background = color
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle')
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}