
console.log(isParent(document.querySelector('body'), document.body.children[0]));

function isParent(parent, child) {
  return parent === child.parentElement;
}

function getLinks() {
  const links = document.getElementsByTagName('a');
  let arrLinks = [];

  for (let i = 0; i < links.length; i++) {
    if (!links[i].closest('ul')) {
      arrLinks.push(links[i]);
    }
  }

  return arrLinks;
}
console.log(getLinks());


function getBeforAndAfterUl() {
  let elements = [];

  const ul = document.querySelector('ul');
  elements.push(ul.previousElementSibling);
  elements.push(ul.nextElementSibling);

  return elements;
}

console.log(getBeforAndAfterUl());

//#region inputdata
const map = ["id", "name", "email", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];
//#endregion

function getTableData() {
  let index = 1;
  return users.map((user) => {
    let newUser = {};

    Object.defineProperty(newUser, map[0], { value: index })
    Object.defineProperty(newUser, map[1], { value: user.name })
    Object.defineProperty(newUser, map[2], { value: user.email })
    Object.defineProperty(newUser, map[3], { value: user.balance })
    index++;

    return newUser;
  });
}

let tableData = getTableData();

const tableModel =
{
  id: '#',
  name: 'Name',
  email: 'Email',
  balance: 'Balance'
}


let fragment = document.createDocumentFragment();

const tableID = 'tableID';

function createTable() {
  const table = document.createElement('table');
  const header = createHeaders();

  table.appendChild(header);
  table.id = tableID;

  for (let i = 0; i < tableData.length; i++) {
    const row = getRow(i + 1, tableData[i]);
    table.appendChild(row);
  }

  return table;
}

function createHeaders() {
  const header = document.createElement('tr');

  for (var prop in tableModel) {
    const th = document.createElement('th');
    th.innerText = tableModel[prop];
    header.appendChild(th);
  }

  return header;
}

function getRow(index, user) {
  const row = document.createElement('tr');

  for (let prop in tableModel) {
    const cell = document.createElement('td');
    cell.innerText = user[prop];

    if (prop === 'balance') {
      cell.style.textAlign = "right";
    }

    row.appendChild(cell);
  }

  return row;
}

function getTotal() {
  const row = document.createElement('tr');

  for (let prop in tableModel) {
    const cell = document.createElement('td');

    cell.innerText = prop === 'balance' ?
      `Total balance: ${tableData.reduce((totalBalance, user) => totalBalance + user.balance, 0)}` :
      '';

    cell.style.textAlign = "right";
    row.appendChild(cell);
  }

  return row;
}

function fillTable() {
  const container = document.querySelector('.container');
  const table = createTable(fragment);
  const totalRow = getTotal();
  table.appendChild(totalRow);
  table.classList.add('table', 'thead-dark');
  fragment.appendChild(table);
  container.appendChild(fragment);
}

fillTable();

const btn = document.getElementById('btn-msg');

const clickhandler = e => {
  const atribute = e.currentTarget.getAttribute('data-text');
  alert(atribute);
  e.preventDefault();
};

btn.addEventListener('click', clickhandler);

const bodyClick = (e) => {
  if (e.target.id === 'btn-msg')
    return;

  let resultElement = document.getElementById("tag");
  resultElement.innerText = `Tag: ${e.target.tagName}`;
}

document.body.onclick = bodyClick;

const srtBtn = document.getElementById("srt-btn");

srtBtn.addEventListener('click', sortTable)

function sortTable(e) {
  const btn = e.currentTarget;
  let li = btn.children[0];

  var tbl = document.getElementById(tableID);
  tbl.remove();

  if (li.innerText === arrowDown) {
    tableData = tableData.sort((a, b) => b.id - a.id);
    li.innerText = arrowUp;
  } else {
    tableData = tableData.sort((a, b) => a.id - b.id);
    li.innerText = arrowDown;
  }

  fillTable();
  e.preventDefault();
}

const arrowDown = 'arrow_downward';
const arrowUp = 'arrow_upward';

