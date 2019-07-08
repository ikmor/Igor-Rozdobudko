




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