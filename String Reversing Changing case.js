//https://www.codewars.com/kata/58305403aeb69a460b00019a

function swapCase(str){
    let strSwap = '';
    for (let el of str){
        if (el === el.toLowerCase()){
            strSwap += el.toUpperCase();
        } else {
            strSwap += el.toLowerCase();
        }
    }
    return strSwap;
}

function reverseStr(str){
    return str.split('').reverse().join('');
}

function reverseAndMirror(s1,s2) {
    let str1 = swapCase(s1);
    let str2 = swapCase(s2);
    return `${reverseStr(str2)}@@@${reverseStr(str1)}${str1}`;
}