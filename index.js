var readLineSync = require ('readline-sync');
var news = readLineSync.question('Please enter the news that you have known ');
console.log("");
var source = readLineSync.question('Enter the source of this news ');
console.log("");

  sourceValidate();
// sourceValidate();
function sourceValidate(){
  var sources = ["FACEBOOK","WHATSAPP","TELEGRAM"]
    if (sources.indexOf(source.toUpperCase()) !== -1){
      console.log(`Don't believe things on FB, Whatsapp AND TELEGRAM`);
    }else{
      console.log(`Please enter a valid source!`)
    }
}
//   var sources = ["facebook","whatsapp","telegram"]
//  console.log(sources.indexOf('telegram'));