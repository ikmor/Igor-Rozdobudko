
log('Task 1')
//#region 
function multiply(){

    if(arguments.length === 0) {
        return 0;
    }

    let result = 1;

    for(i = 0; i < arguments.length; i++){
        result *= arguments[i];
    }

    return result;
}

log(multiply(1,2,3,4,5));
//#endregion


log('Task 2')
//#region 
function reverseString(stringa){

    if(!checkString(stringa)) {
        return "";
    }

    return stringa.split("").reverse().join("");
}

log(reverseString("строка строк"));
//#endregion



log('Task 3')
//#region 
function getCodeStringFromText(stringa){
    
    if(!checkString(stringa)) {
        return "";
    }

    let arr = stringa.split("");
    const lastIndex = stringa.length - 1;

    for(let i = lastIndex ; i >= 0; i--) {
        arr[i] = stringa.charCodeAt(i);
        arr.splice(i +1, 0, " ")
    }

    return arr.join("");
}

log(getCodeStringFromText("строка строк"));
//#endregion



log('Task 4')
//#region 
function gameOver(namber){
    if(namber < 0 || namber > 10){
        return("не праивльный ввод, попробуйте еще разок... ");
    }
    
    const innerRandom = randomInteger(0, 10);
    
    if(namber === innerRandom){
        return "Юху! Победа!";
    }

    return `Поставив на кон всё, вы всё проиграли... \r\nВыпало число ${innerRandom}, а вы хотели ${namber}\r\nТеперь ваша душа принадлежит мне!!! Аха-ха-ха`;
}

let namber = randomInteger(0, 10);
log(gameOver(namber));
//#endregion



log('Task 5')
//#region 
function getNewRandomArray(length){
    if(namber < 0 ){
        return("Если хотите отрицательную длину - просто читайте как арабы!");
    }

    let array = [];
    
    for(i = 0 ; i < length; i++) {
        array[i] = randomInteger(0, length);
    }

    return array;
}

namber = randomInteger(0, 10);
log(getNewRandomArray(namber));
//#endregion




log('Task 6')
//#region 
function doubleArray(inputArray){
    if(inputArray.length === 0 ){
        return([0,0]);
    }

    return inputArray.concat(inputArray);
}

log(doubleArray([1,2,3]));
//#endregion


log('Task 7')
//#region 
function changeCollection(inputArrayOfArray){
    if(inputArrayOfArray.length === 0 ){
        throw new Error("Должен войти массив массивов а не что-то непонятно что");
    }

    let result = removeFirstElement(inputArrayOfArray[0]);

    for(i = 1; i < inputArrayOfArray.length; i++) {
        result = result.concat(removeFirstElement(inputArrayOfArray[i]));
    }

    return result;
}

log(changeCollection([[1,2,3], [5,6,7]]));
//#endregion



log('Task 8')
//#region 
function funcGetUsers(users, filed, value){
    if(!checkString(users)) {
        throw new Error("Что-то не так со списком пользователей");
    }

    if(!checkString(filed)) {
        throw new Error("Что-то не так с полем для поиска");
    }

    if(!checkString(value)) {
        throw new Error("Что-то не так с критерием поиска");
    }

    let findedUsers = [];

    for(i= 0; i < users.length; i++) {
        if(users[i][filed] === value){
            findedUsers.splice(findedUsers.length, 0, users[i]);
        }
    }

    return findedUsers;
}

const users = [ 
    {
        name: 'Denis', 
        age: 29, 
        gender: 'male'
    } , 
    {
        name: 'Ne Ivan', 
        age: 20, 
        gender: 'female'
    } , 
    {
        name: 'Ne Ne Ivan', 
        age: 20, 
        gender: 'female'
    } , 
    {
        name: 'Ivan, но нет', 
        age: 20, 
        gender: 'female'
    } 
    
]

log(funcGetUsers(users, "gender", "female"));
//#endregion






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