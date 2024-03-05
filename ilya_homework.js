function check1 (str, bracketsConfig){
    if (str.length % 2 !== 0){
        return false
    }

}
function check(str, bracketsConfig) {
    const stack = [];

    function isOpeningBracket(bracket) {
        return bracketsConfig.some(pair => pair[0] === bracket);
    }

    function isClosingBracket(bracket) {
        return bracketsConfig.some(pair => pair[1] === bracket);
    }

    function getOpeningBracket(closingBracket) {
        for (let pair of bracketsConfig) {
            if (pair[1] === closingBracket) {
                return pair[0];
            }
        }
        return null;
    }

    for (let char of str) {
        if (isOpeningBracket(char)) {
            stack.push(char);
        } else if (isClosingBracket(char)) {
            if (stack.length === 0) {
                return false; // Не было открывающей скобки для закрывающей
            }
            const lastOpened = stack.pop();
            if (getOpeningBracket(char) !== lastOpened) {
                return false; // Несоответствующая пара скобок
            }
        }
    }

    return stack.length === 0; // Если в стеке что-то осталось, значит скобки неправильно сбалансированы
}

// Примеры использования:
console.log(check('()', [['(', ')']])); // -> true
console.log(check('((()))()', [['(', ')']])); // -> true
console.log(check('())(', [['(', ')']])); // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // -> true
console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

// Дополнительные примеры:
console.log(check('||', [['|', '|']])); // -> true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // -> true
console.log(check('|(|)', [['(', ')'], ['|', '|']])); // -> false
console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // -> true

