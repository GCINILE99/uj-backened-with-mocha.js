export default function longestWord(long) {
    var splitLong = long.split(" ");
    
    var longWord = 0;
    var result = "";
    
  for (var i=0; i<splitLong.length; i++) {  
      if (splitLong[i].length >= longWord) {
      longWord = splitLong[i].length;
      result = splitLong[i];
        } 
    }
    return result;
  }
  console.log(longestWord('The dog jumped over the shipyard fence')); 
  
 