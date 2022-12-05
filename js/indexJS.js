const menu = document.getElementsByClassName('nav-content-menu')

const setMenu = () => {
    const menuStyle = window.getComputedStyle(menu[0])
    menu[0].style.display =
        menuStyle.display === 'block' ? 'none' : 'block'
}

const setNav = () => {
    menu[0].style.display =
        eval(document.body.clientWidth) > eval(600) ? 'block' : 'none'
}

setNav()
window.addEventListener('resize', setNav)