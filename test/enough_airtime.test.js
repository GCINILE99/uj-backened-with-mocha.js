import assert from 'assert';
import enoughAirtime from '../enough_airtime.js'


describe('Enough Airtime test' , function(){
    it("It should calculate the users airtime based on their usage projection " , function(){
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20))
        assert.equal('R0.00', enoughAirtime('data,data,data', 36));
    });

});