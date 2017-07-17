(function() {
  'use strict';

  /**
   * [hasVowels -- Checks if a string contain a vowel i.e (A E I O U)]
   * @return {Boolean} [Returns true if the a 
   * String contains a vowel and false otherwise.]
   */
  Array.prototype.findNumber = function() {
    console.log(this);
    for(var i = 0; i < this.length; i++) {
      if (typeof this[i] === 'number') {
        return this[i];
        break;
      }
      return false;
    }
    // return /[aeiou]/i.test(this);
  };

})();
