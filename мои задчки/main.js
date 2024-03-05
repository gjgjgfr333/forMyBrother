let dataUser1 =[
    {expenses: 'расходы', money: '200', category: 'food', time: '2000-05-17'},
    {expenses: 'расходы', money: '50', category: 'food', time: '2000-12-17'},
    {expenses: 'доходы', money: '500', category: 'food', time: '2000-09-17'},
    {expenses: 'доходы', money: '851', category: 'food', time: '2000-01-17'}]


function oneMenu() {
    const inputUser = document.getElementById('inputUser').value;
    const arrayBlock = document.querySelectorAll('.one');

    arrayBlock.forEach(block => {
        block.classList.remove('one1');
    });

    const blockIndex = parseInt(inputUser) -1 ;

    if (blockIndex === 3-1){
        const block = document.getElementById('period')
        block.classList.add('one1');

    }else if (blockIndex >= 0 && blockIndex < arrayBlock.length) {
        arrayBlock[blockIndex].classList.add('one1');
    }
}
function addIncome() {
    const newEntry = {};

    const noMone = document.getElementById('noMone').value.toLowerCase();
    if (noMone === 'расходы' || noMone === 'доходы') {
        newEntry.expenses = noMone;
    } else {
        console.error('Неверное значение для "расходы/доходы"');
        return;
    }

    newEntry.money = document.getElementById('Money').value.toLowerCase();
    newEntry.category = document.getElementById('category').value.toLowerCase();

    const time = document.getElementById('time').value;
    const data = new Date(time);
    newEntry.time = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;

    dataUser1.push(newEntry);
    console.log(dataUser1);
}
let filteredData = []
function findData(dataUsers) {
    let startData =null
    let endData = null
    const firstInput = document.querySelectorAll('.startData');
    const lastInput = document.querySelectorAll('.endData');
    for (const input of firstInput) {
        if (input.value) {
            startData = input.value;
            break; 
        }
    }
    for (const input of lastInput) {
        if (input.value) {
            endData = input.value;
            break;
        }
    }
    const ol = document.getElementById('olPeriod');

    ol.innerHTML = '';

    filteredData = dataUsers.filter(data => {
        return data.time >= startData && data.time <= endData;
    });

    filteredData.forEach(filteredItem => {
        const li = document.createElement('li');
        li.textContent = `Раздел: ${filteredItem.expenses}; Деньги: ${filteredItem.money}; Категория: ${filteredItem.category}; Дата: ${filteredItem.time}`;
        ol.appendChild(li);
    });
    console.log(filteredData)
    return filteredData;
}

function getExpenseIncome(obj) {
    const exp = document.getElementById('exp'); // Заменено с exxp на exp
    exp.classList.add('one1');
    const expense = document.getElementById('expenses');
    const income = document.getElementById('income');
    let expTotal = 0;
    let incTotal = 0;
    for (let i of obj) {
        const moneyValue = Math.round(parseFloat(i.money));
        if (i.expenses === 'расходы') {
            expTotal += moneyValue;
        } else {
            incTotal += moneyValue;
        }
    }
    const noMoney = document.createElement('div');
    const Money = document.createElement('div');
    noMoney.textContent = expTotal;
    Money.textContent = incTotal;
    expense.appendChild(noMoney);
    income.appendChild(Money);
}

function findDataAndCalculate() {
    const filteredData = findData(dataUser1); // Сохраняем результат в переменной
    getExpenseIncome(filteredData); // Передаем результат в getExpenseIncome
}


