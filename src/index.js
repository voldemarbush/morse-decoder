const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let numMorse = '';
    let partString = '';
    let outString = '';
    for (let a = 0; a < (expr.length - 1); a += 10){
        numMorse = '';
        for (let b = 0; b < 9; b += 2){
            partString = expr[a + b] + expr[a + b + 1];
            if (partString != '00' && partString != '**'){
                numMorse += (partString == '10') ? '.' : '-';
            } else if (partString == '**'){
                numMorse = 'space';
            }
        }
        if (numMorse != 'space'){
            outString += MORSE_TABLE[numMorse];            
        } else outString += ' ';
    }
    return outString;
}

module.exports = {
    decode
}