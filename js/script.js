                   //////////////////// TASK N1  //////////////////////////

 let FindLongestString =(sen)=>{

     var sentence = sen.split(' ');
     var longestLength = 0;
     var longestWord;
     for (var i=0;i<sentence.length;i++) {
         if (sentence[i].length > longestLength) {
             longestLength = sentence[i].length;
             longestWord = sentence[i];
         }
     }
     alert(longestWord)
     return longestWord;

 }




 var enterWord = prompt("введите предложение и я выберу самое длинное слово", " Я пишу на Reactdddddd")

 FindLongestString(enterWord);


