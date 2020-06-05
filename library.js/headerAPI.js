let add_new_item = function () {
    let element = document.getElementById("cart");
    return element;
}
let add_new_header_menu = function (ahref, name) {
    let menuBar = document.getElementById("headerMenu")
    let menu = document.createElement("a")
    menu.setAttribute("class", "mr-5 hover:text-gray-900")
    menu.setAttribute("href", ahref)
    menuBar.appendChild(menu)
    menu.innerHTML = name
}
let remove_default_menu = function () {
    let x = 0;
    while (x < 4) {
        remove_header_menu()
        x++;
    }
}
let remove_header_menu = function (index = 0) {
    let menuBar = document.getElementById("headerMenu")
    menuBar.removeChild(menuBar.children[index])
}
let change_header_title = function (header_title = "Food-Service") {
    let headerTitleDOM = document.getElementById("headerTitle");
    headerTitleDOM.innerHTML = header_title
}
let assign_icon_class_to_header=function(className){
    let headerIconic=document.getElementById("")
}