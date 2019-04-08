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

var enterWord = prompt(" TASK №2. Enter your word, and I'll write it reverse", "бамбалейо")
WordReverse(enterWord);


//////////////////// TASK N2  //////////////////////////