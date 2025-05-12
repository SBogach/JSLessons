//import "form.scss";
console.log("Файл загужен");

window.onLoad = () => {
    const elements = document.getElementByClassName("container");
    console.log(elements);
    console.log("Файл загужен");
    for (let i = 0; i < elements.length; i++) {
        elements[i].backgroundColor = "blue";
    }
}