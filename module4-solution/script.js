/*
Output will be:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/
(function(){
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var index in names){
    var name = names[index].toLowerCase();
    if(name.charAt(0) == 'j')
      byeSpeaker.speak(names[index]);
    else
      helloSpeaker.speak(names[index]);
  }
})();