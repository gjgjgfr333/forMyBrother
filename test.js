let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
// console.log(numbers);
let ArrayDel =[]

function getDelitel (num) {
    for (let i = 0; i < numbers.length; i++) {
        if(num == 0){
            return 'не подъодит'
        }else if (num % numbers[i] === 0) {
            ArrayDel.push(numbers[i])
        }
    }
    return ArrayDel
}

// возраст отца и сына
function twiceAsOld (DadAge, SanAge){
    if (DadAge/2 === SanAge){
        return `Отец был старше сына на ${DadAge/2} лет`
    }else {
        const yearsToFuture = SanAge * 2 - DadAge;
        const futureSonAge = SanAge + yearsToFuture;
        return `Отец будет старше сына в два раза через ${yearsToFuture} лет, сыну уже будет ${futureSonAge}`;
    }
}
// console.log(twiceAsOld(59,22))
// возвращаем нечетные числа
const answer =[]
function neNumber (number){
    if (number % 2 === 0){
        return `Число ${number} четное, а надо нечетное`
    }
    for (let i = 0; i < number; i++){
        if (i % 2 !== 0){
            answer.push(i)
        }
    }
    return answer
}
// console.log(neNumber(151))

// Преобразуйте строку в число!
function strNamber (str){
    return Number(str)
}
// console.log(strNamber('555'))
