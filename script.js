let sevenEl = document.getElementById('sevenEl');
let nextEl = document.querySelector('#nextEl');
let addButton = document.querySelector('.add');
let aTag = document.querySelector('a');
let plusButton = document.querySelector('.plus');
let img = document.querySelector('.img');
let minusButton = document.querySelector('.minus');
let delButton = document.querySelector('.del');


let changeColor = (el, newClass) => {
   if (el.classList.contains(newClass)) {
       el.classList.remove(newClass)
   } else{
       el.className = newClass;
   }

};

sevenEl.onclick = () => {
    changeColor(sevenEl, 'setColor');
};

nextEl.onclick = () => {
    changeColor(nextEl, 'setColor');
}

addButton.onclick = () => {
    let newImg = document.createElement('div');
    newImg.innerHTML = '<img src="https://tournavigator.pro/%D1%84%D0%BE%D1%82%D0%BE/other_1016_1000_1585068346.jpg" alt="Nice">'
    aTag.append(newImg);
}

plusButton.onclick = () => {
    img.setAttribute('width', '100%')
}

minusButton.onclick = () => {
    img.setAttribute('width', '50%')
}

delButton.onclick = () => {
    aTag.innerHTML = '';
}









