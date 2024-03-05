// У вас есть массив объектов, представляющих различных людей. Каждый объект содержит информацию о имени человека и его возрасте. Напишите функцию averageAge(people), которая принимает этот массив объектов и возвращает средний возраст всех людей.

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

function getMiddleAge (obj){
    const arrayAge=[]
    for (let persone of obj){
        if ('age' in persone){
            arrayAge.push(persone.age)
        }
    }
    let sumAge = arrayAge.reduce((a,b)=>a+b,0)
    return sumAge / arrayAge.length
}
//console.log(getMiddleAge(people))
///Напишите функцию countWords(str), которая принимает строку str и возвращает объект, содержащий количество каждого слова в строке. Слова в строке разделены пробелами. Игнорируйте регистр символов (то есть, "Word" и "word" считаются одним и тем же словом).
function countWords(str){
    let result ={}
    const arrayWords = str.trim().toLowerCase().split(' ')
    console.log(arrayWords)
    for (let i = 0; i < arrayWords.length; i++){
        let words = arrayWords[i]
        if (words in result){
            result[words] ++
        }else{

            result[words]=1
        }

    }
    return result
}
//console.log(countWords('hello world gfdgdrfg hello Hello WOoords ss ss ss'))

//Напишите функцию countLetters(str), которая принимает строку str и возвращает объект, содержащий количество каждой буквы в строке. Регистр букв не должен учитываться (т.е. 'A' и 'a' считаются одной и той же буквой). Пробелы и другие символы также не должны учитываться.
//
function  countLetters (str){
    let result={}
    let onlyWords = str.trim().toLowerCase().split('')
    console.log(onlyWords)
    for (let i =0; i<onlyWords.length; i ++){
        let letter = onlyWords[i]
        if (letter in result){
            result[letter] ++
        }else{
            result[letter] = 1
        }
    }
    return result
}
console.log(countLetters('hello Worldw'))
