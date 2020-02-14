function DomElement(selector, heigth, width, bg, fonSize){
    this.selector = selector;
    this.heigth = heigth;
    this.width = width;
    this.bg = bg;
    this.fontSize = fonSize; 
    
}
DomElement.prototype.ride = function (item){
    
    let divElement = document.createElement('div');
    if (this.selector[0] === '.'){
        divElement.classList.add('block');
    }else if (this.selector[0] === '#') {
        divElement.id = 'block';
    }
    divElement.textContent = 'Любой текст!!!';
    document.body.appendChild(divElement);
    console.log(divElement);
    divElement.style.display = 'block';
    divElement.style.heigth = this.heigth;
    divElement.style.width = this.width;
    divElement.style.background = this.bg;
    divElement.style.fontSize = this.fontSize;
};
let domElement1 = new DomElement('.block', '130px', '130px', 'green', '18px');
let domElement2 = new DomElement('#block', '330px', '30px', 'red', '22px');

console.log(domElement1);
domElement1.ride();