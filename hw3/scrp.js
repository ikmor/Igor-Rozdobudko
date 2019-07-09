
log('This. Задачи.');

class Rectangle { 
  constructor  (width, height) {
    this.width = width;
    this.height = height;
  }

  getSquare(){
      return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 2);
log(`Площать прямоугольника = ${rectangle.getSquare()}`);

class Product {
    constructor(price, discount) {
        this.discount = discount;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getPriceWithDiscount(){
        const discount = parseInt(this.discount);
        return this.price * (1 - discount / 100);
    }
}

const product = new Product(10, '15%');
log(`Цена товара = ${product.getPrice()}`);
log(`Цена товара со скидочкой = ${product.getPriceWithDiscount()}`);


class WeryHeightClass {
    constructor (height) {
        this.height = height;
    }

    makeMeAbove(howMuch){
        this.height += howMuch;
        return this.height;
    }
}

const ogmObj = new WeryHeightClass(10);
log(`Высота высот = ${ogmObj.height}`); 
log(`Высота высот после увеличения на 15 световых лет = ${ogmObj.makeMeAbove(15)} световых лет...`);


class Calculator {
    constructor (value) {
        this.value = value;
    }

    double() {
        this.value *= 2;
        return this;
    }

    increment() {
        this.value++;
        return this;
    }

    decrement() {
        this.value--;
        return this;
    }
}

const calc = new Calculator(15);

log(`15 * 2 + 1 - 1 = ${calc.double().increment().decrement().value}`); 


class ProductWithCount {
    constructor(price, count) {
        this.count = count;
        this.price = price;
    }

    getTotalPrice() {
        return this.price * this.count;
    }
}
const pr =new ProductWithCount(10, 10);
log( `Общая цена 10 продуктов по цене 10 за 1 = ${pr.getTotalPrice()}`);

class CastratedProduct {
    constructor(price, count, calcTotal) {
        this.count = count;
        this.price = price;
        this.calcTotal = calcTotal;
    }
}

log( `Недопродукт... Общая цена 10 продуктов по цене 10 за 1 = ${new CastratedProduct(10, 10, pr.getTotalPrice).calcTotal()}`);

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

log(`Задача про sizes: ${getSquare.call(sizes)}`);



let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
log(`Задача про element.height: ${getElementHeight()}`);  // undefined


log('Перебирающие методы');

let arr  = [1,2,3,5,8,9,10];

let newArr = arr.map((x, index, array) => { 
    const digit = x;
    const odd = ((x%2) === 0);
    return { digit , odd };
});

log( `Новый массив:`);
log( newArr);

arr = [12, 4, 50, 1, 0, 18, 40];
log( `Содержит ли 0 ? : ${arr.some(x => x===0)}`);

arr =['yes', 'hello', 'no', 'easycode', 'what'];

log( `Содержит ли слово длинее 3х символов ? : ${arr.some(x => x.length > 3)}`);

arr =[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

arr.sort((x, y) => x.index - y.index);

const str = arr.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.char;
}, ''); 

log(`Получилася такая строка: ${str}`);


arr = [  [14, 45],  [1],  ['a', 'c', 'd']  ] ;
arr.sort((x,y) => x.length - y.length);
log(arr);

arr = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];


arr.sort((x,y) => x.info.cores - y.info.cores);
log(arr);


let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterProducts(products, minPrice, maxPrice) {
    const correctProducts = products.filter(x => x.price >  minPrice && x.price < maxPrice);
    correctProducts.sort((x, y) => x.price - y.price);
    return correctProducts;
}

log(filterProducts(products, 15, 30));

//#region additional functions

function removeFirstElement(arr) {
    if(arr.length === 0) {
        throw new Error("Плохой юзер! не вооди плохие данные, на по ручкам");
    }
    arr.splice(0, 1);
    return arr;
}

function checkString(stringa) {
    if(stringa === undefined ||stringa === null || stringa.length === 0 ) {
        return false;
    }

    return true;
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }


function log(data) {
    console.log(data);   
}
//#endregion