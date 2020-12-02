function longestWord(sen) { 
    sen=sen.replace(/[^a-zA-Z ]/ig,'')
    words = sen.split(" ")
    longestWord = words[0]
    for (i = 0; i<words.length; i ++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]	
        }
    }
   console.log(longestWord);
  }

  longestWord(`I'm r'e'a'l'l'y so priviledged to fort-night-for become `)
