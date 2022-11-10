let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img").addEventListener("click", () => {
    alert("点击图片")
});

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}


myButton.addEventListener("click", () => {
    setUserName()
});