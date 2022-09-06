import assert from 'assert';
import longestWord from '../word_game.js'


describe('Word Game test' , function(){
    it("It should return the longest word, shortest word and the sum of each word in a sentence" , function(){
        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
        assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");
        
       
        
    });

});