var expect = require('expect');

var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('Alis', 'Can we meet?');
        expect(res).toBeA('object');
        expect(res).toInclude({from: 'Alis', text: 'Can we meet?'});
        expect(res.createdAt).toBeA('number');
    });
});