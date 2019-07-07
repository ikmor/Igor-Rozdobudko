


log("Функции стрелки. Задачи.");

const sum =  (...params) => {
    if (!params.length) {
         return 0;
    }
  
    return params.reduce(function (prev, next) { return prev + next; });
  }
  
log(sum(1, 2, 3, 4)); // 10
log(sum()); // 0
  
log("Функции высшего порядка. Задачи.");


// function wtfFunction(args, handler) {
//     return "New value: " + handler(args);
// }

// log(wtfFunction(["my", "name", "is", "Trinity"], (args) => {

//     let result = "";

//     for(let i =0; i < args.length; i++) {
//         result += args[i][0].toUpperCase() + args[i].slice(1);
//     }

//     return result;
// }));


// let result = wtfFunction ([10, 20, 30], (args) => 
// {
//     log("asdasd");
//     for(let i =0; i < args.length; i++) {
//         args[i] = args[i] * 10;
//     }

//     return Array.prototype.join.call(args, ", ");
// } );

// log(result);



// result = wtfFunction([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}], (args) => {

//     let result = [];

//     for(let i =0; i < args.length; i++) {
//         result[i] = `${args[i]["name"]} is ${args[i]["age"]}`;
//     }

//     return Array.prototype.join.call(result, ", ");
// });
// log(result);


// result = wtfFunction(["abc", "123"], (args) => {

//     let result = [];

//     for(let i =0; i < args.length; i++) {
//         result[i] = args[i].split("").reverse().join("");
//     }

//     return Array.prototype.join.call(result, ", ");
// });
// log(result);

function joinArray(args, handler, separator = "") {
    let result = [];

    for(let i = 0; i <args.length; i++) {
        result[i] = handler(args[i]);
    }
    return "New value: " + result.join(separator);
}

log(joinArray(["my", "name", "is", "Trinity"], (args) => {
    return args[0].toUpperCase() + args.slice(1);
}));


let result = joinArray ([10, 20, 30], (args) => 
{
    return args * 10 ;
}, ", " );

log(result);

result = joinArray([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}], (args) => {
    return `${args["name"]} is ${args["age"]}`;
},", ");
log(result);


result = joinArray(["abc", "123"], (args) => {
    return args.split("").reverse().join("") ;
}, ", ");
log(result);



function myEvery(args, func) {
    if(!Array.isArray(args)) {
        throw new Error("Передан не массив");
    }

    if(typeof func !== "function") {
        throw new Error("Передана не функция");
    }

    for(let arg of args) {
        if(!func(arg)) {
            return false;
        }
    }

    return true;
}


result = myEvery([1,2,3,4], (param) => {
    return param < 5;
});

log(result);


log("Деструктурирующее присваивание.");

function arrayToObject(...arr) {

    var [a, ...b] = arr;

    return {
        first: a,
        other: b
    }
}

result = arrayToObject(1,2,3,4,5,6);
log(result);


function getInfo(company) {

    let companyName;
    

    if(company.hasOwnProperty('name')) {
        companyName = company['name'];
    } else {
        companyName = 'Unknown';
    }

    var [firstPartner, seconPartner] = company["info"]["partners"];


    return {
        Name: companyName,
        Partners: [
            firstPartner, 
            seconPartner
        ]
    }
}

const organisation = {  
    name:'Google',
    info:{  
       employees:[  
          'Vlad',
          'Olga'
       ],
       partners:[  
          'Microsoft',
          'Facebook',
          'Xing'
       ]
    }
 };
  

result = getInfo(organisation);
log(result);

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