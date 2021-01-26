var btn = document.querySelector(".main-heading-button");
var dynamicElements = document.getElementsByClassName("dynamic-element");
var menuItems = document.getElementsByClassName("menu-item");

btn.addEventListener('click', changeGraphicSetting);

for (var x = 0; x < menuItems.length; x++) {
    menuItems[x].addEventListener('mouseover', selectMenuItem);
    menuItems[x].addEventListener('mouseout', selectMenuItem);
};

function changeGraphicSetting() {
    for (var i = 0; i < dynamicElements.length; i++) {
        dynamicElements[i].classList.toggle("dynamic");
    };
};

function selectMenuItem() {
    this.classList.toggle("selected");
}