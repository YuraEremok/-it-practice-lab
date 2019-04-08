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




 var enterWord = prompt("enter a sentence and I will choose the longest word", " how to hack NASA with html ")

 FindLongestString(enterWord);


                   //////////////////// TASK N2  //////////////////////////


