const ico_menu_close = document.querySelector(".ico_menu_close")
const nav_left = document.querySelector(".nav-left")
const capa = document.querySelector("#capa")
const menu_ico = document.querySelector(".menu-ico")
const span2 = document.querySelector("#span2")

const span1 = document.querySelector("#span1")
const drop_f = document.querySelector("#drop_f")
const drop_c = document.querySelector("#drop_c")
const drop_features = document.querySelector(".drop_features")

const drop_company = document.querySelector(".drop_company")
const check_features = document.querySelector("#check-features")
const check_company = document.querySelector("#check-company")
ico_menu_close.addEventListener("click", () => {
    capa.classList.remove("capa")
    menu_ico.style.display = "block"
    nav_left.classList.remove("show_nav")
    nav_left.classList.add("quit_nav")


})

menu_ico.addEventListener("click", () => {
    capa.classList.add("capa")
    menu_ico.style.display = "none"

    nav_left.classList.add("show_nav")
    nav_left.classList.remove("quit_nav")
})



check_features.addEventListener("change",()=>{
    if (check_features.checked) {
        check_company.checked=false
        span1.classList.add("arrow_up")
        span2.classList.remove("arrow_up")

        drop_features.classList.add("show_features")
        drop_company.classList.remove("show_company")



} else{
    span1.classList.remove("arrow_up")
    drop_features.classList.remove("show_features")
}
})

check_company.addEventListener("change",()=>{
    if (check_company.checked) {
        check_features.checked=false
  span1.classList.remove("arrow_up")
        span2.classList.add("arrow_up")
        drop_features.classList.remove("show_features")

        drop_company.classList.add("show_company")



} else{
    span2.classList.remove("arrow_up")
  
    drop_company.classList.remove("show_company")
}
})