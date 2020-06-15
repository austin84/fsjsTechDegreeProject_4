/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const phraseDiv = document.getElementById('phrase');
    const phraseUL = phraseDiv.firstElementChild;
    const letters = this.phrase.split('');

    for (let i = 0; i < letters.length; i++) {
      const li = document.createElement('li');
      if (/^[a-z]$/.test(letters[i])) {
        li.classList.add('hide', 'letter', `${letters[i]}`);
        li.innerHTML = `${letters[i]}`;
        phraseUL.appendChild(li);
      } else if (/^\s$/.test(letters[i])) {
        li.classList.add('space');
        li.innerHTML = ' ';
        phraseUL.appendChild(li);
      }
    }
  }

  // ! Not Finished Below

  checkLetter(letter) {
    const letters = document.querySelectorAll('.letter');
    const lettersArr = Array.from(letters);

    for (let i = 0; i < lettersArr.length; i++) {
      if (letter === lettersArr[i].className) {
        this.showMatchedLetter(lettersArr[i]);
      } else {
        // ! Remove heart
      }
    }
  }

  showMatchedLetter(letter) {
    letter.classList.add('show');
    letter.classList.remove('hide');
  }
}
