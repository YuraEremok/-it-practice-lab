//////////////////// TASK N1  //////////////////////////

let FindLongestString = (sen) => {

    var sentence = sen.split(' ');
    var longestLength = 0;
    var longestWord;
    for (var i = 0; i < sentence.length; i++) {

        if (sentence[i].length > longestLength) {
            longestLength = sentence[i].length;
            longestWord = sentence[i];
        }
    }
    alert(longestWord)
    return longestWord;

}


var enterSentence = prompt(" TASK №1. Enter a sentence and I will choose the longest word", " how to hack NASA with html ")

FindLongestString(enterSentence);


//////////////////// TASK N2  //////////////////////////

let WordReverse = (str) => {

    var arr = str.split("")

    let string = arr.reverse()

    string = arr.join("")

    alert(string);

    return string


}

let enterWord = prompt(" TASK №2. Enter your word, and I'll write it reverse", "бамбалейо")
WordReverse(enterWord);


//////////////////// TASK N3  //////////////////////////
let ChangeLetters = (str) => {

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var ret = new Array();

    for (var x = 0; x < str.length; x++) {

        for (var i = 0; i < alphabet.length; i++) {

            if (checkIfCharInString(alphabet, str[x]) == false) {
                ret[x] = str[x].toString();
                break;
            }

            if (str[x] == alphabet[i]) {
                if (alphabet[i] == "Z") {
                    ret[x] = "A";
                } else {
                    ret[x] = alphabet[i + 1];
                }
            }
        }
    }

    var output = ret.join("");

    output = capitalizeVowels(output);

    // code goes here
    return output;

}

function checkIfCharInString(motherString, char) {
    for (var i = 0; i < motherString.length; i++) {
        if (motherString[i] == char.toString()) {
            return true;
        }
    }
    return false;
}

function capitalizeVowels(str) {
    var vowel = "aeiou";
    var newStr = new Array();

    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < vowel.length; x++) {
            newStr[i] = str[i];

            if (str[i] == vowel[x]) {
                newStr[i] = vowel[x].toUpperCase();
                break;
            }
        }
    }

    var output =  newStr.join("");
    alert(output)
    return output
}

let characters = prompt(" TASK №3. Enter your characters and I'll do it right", "react")
ChangeLetters(characters)


