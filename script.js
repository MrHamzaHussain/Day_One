function encryptMessage() {
    var plainText = document.getElementById("plainText").value;
    var codingMechanism = document.getElementById("codingMechanism").value;
    var resultMessage = document.getElementById("resultMessage");

    if (codingMechanism === "caesar") {
        resultMessage.value = caesarCipher(plainText, 5);
    } else if (codingMechanism === "morse") {
        resultMessage.value = morseCode(plainText);
    }
}

function decryptMessage() {
    var encryptedMessage = document.getElementById("resultMessage").value;
    var codingMechanism = document.getElementById("codingMechanism").value;
    var resultMessageTextarea = document.getElementById("resultMessage");

    if (codingMechanism === "caesar") {
        var decryptedMessage = caesarDecipher(encryptedMessage, 5);
        resultMessageTextarea.value = decryptedMessage;
    } else if (codingMechanism === "morse") {
        var decryptedMessage = morseCodeDecrypt(encryptedMessage);
        resultMessageTextarea.value = decryptedMessage;
    }
}



// Caesar Cipher function
function caesarCipher(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

// Caesar Cipher decryption function
function caesarDecipher(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}


// Morse Code function
function morseCode(text) {
    const morseCodeMap = {
        'A': '1', 'B': '2', 'C': '3', 'D': '4', 'E': '5', 'F': '6', 'G': '7', 'H': '8',
        'I': '9', 'J': '10', 'K': '11', 'L': '12', 'M': '13', 'N': '14', 'O': '15', 'P': '16',
        'Q': '17', 'R': '18', 'S': '19', 'T': '20', 'U': '21', 'V': '22', 'W': '23', 'X': '24',
        'Y': '25', 'Z': '26', '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E',
        '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J', ' ': 'Hamza'
    };


    text = text.toUpperCase();


    let result = '';


    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (morseCodeMap.hasOwnProperty(char)) {
            result += morseCodeMap[char] + ' ';
        }
    }

    return result;
}


function morseCodeDecrypt(text) {

    const reverseMorseCodeMap = {
        '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G',
        '8': 'H', '9': 'I', '10': 'J', '11': 'K', '12': 'L', '13': 'M', '14': 'N', '15': 'O', '16': 'P',
        '17': 'Q', '18': 'R', '19': 'S', '20': 'T', '21': 'U', '22': 'V', '23': 'W', '24': 'X', '25': 'Y', '26': 'Z',
        'A': '0', 'B': '1', 'C': '2', 'D': '3', 'E': '4', 'F': '5', 'G': '6', 'H': '7',
        'I': '8', 'J': '9', 'Hamza': ' '
    };


    const codeSequences = text.split(' ');


    let result = '';


    for (let i = 0; i < codeSequences.length; i++) {
        const code = codeSequences[i];
        if (reverseMorseCodeMap.hasOwnProperty(code)) {
            result += reverseMorseCodeMap[code];
        }
    }

    return result;
}