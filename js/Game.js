/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      'it will grow on you',
      'please fasten your seat belts',
      'our door is always open',
      'in the right frame of mind',
      'low impact',
      'all that jazz',
      'put on your thinking cap',
      'the root of the matter',
      'after dark',
      'make a mountain out of a molehill',
      'engrossed in thought',
      'finish your thought',
      'two ships that pass in the night',
      'all dressed up and nowhere to go',
      'to the best of my ability',
      'one potato two potato three potato four',
      'we accept most major credit cards',
      'you scared me half to death',
      'double whammy',
      'access denied',
      'call me when you get a second',
      'take it to the next level',
      'your call cannot be completed as dialed',
      'a bargain at half the price',
      'a chip off the old block',
      'top agricultural producer in america',
      'equal footing',
      'streets ahead',
      'optimal wellness',
      'variety is the spice of life',
    ];
  }

  startGame() {
    const ranPhrase = this.getRandomPhrase();
    const phrase = new Phrase(ranPhrase);
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay();
    document.querySelector('#overlay').style.display = 'none';
  }

  getRandomPhrase() {
    const randNum = Math.floor(Math.random() * 30);
    return this.phrases[`${randNum}`];
  }

  handleInteraction() {
    e.target.disabled = true;
    this.activePhrase.checkLetter(e.target.innerHTML);
  }

  // ! Above

  removeLife() {}

  checkForWin() {}

  gameOver() {}
}
