import assert from 'assert';
import greet from '../greet.js'
describe ('The greet function',function(){
    it ('should be able to greet Bob',function(){
    

        assert.equal('Hello, Bob',greet('Bob'));
    });
});