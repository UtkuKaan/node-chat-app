var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('Alis', 'Can we meet?');
        expect(res).toBeA('object');
        expect(res).toInclude({from: 'Alis', text: 'Can we meet?'});
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let res = generateLocationMessage('Alis', 1, 2);
        expect(res).toBeA('object');
        expect(res).toInclude({from: 'Alis', url: 'https://www.google.com/maps?q=1,2'});
        expect(res.createdAt).toBeA('number');
    });
});