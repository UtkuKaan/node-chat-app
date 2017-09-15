const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Alis',
            room: 'ACI'
        }, {
            id: '2',
            name: 'Kaycee',
            room: 'Dance'
        }, {
            id: '3',
            name: 'Alycia',
            room: 'Dance'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Utku',
            room: 'Dance'
        };
        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user by a valid ID', () => {
        var res = users.removeUser('3');
        expect(res).toEqual({id: '3', name: 'Alycia', room: 'Dance'});
        expect(users.users).toEqual([{id: '1', name: 'Alis', room: 'ACI'}, {id: '2', name: 'Kaycee', room: 'Dance'}]);
    });

    it('should not remove a user by an invalid ID', () => {
        var res = users.removeUser('4');
        expect(res).toNotExist();
        expect(users.users).toEqual([{id: '1', name: 'Alis', room: 'ACI'}, {id: '2', name: 'Kaycee', room: 'Dance'}, {id: '3', name: 'Alycia', room: 'Dance'}]);
    });

    it('should find a user by a valid ID', () => {
        var res = users.getUser('1');
        expect(res).toEqual({id: '1', name: 'Alis', room: 'ACI'});
    });

    it('should not find a user by an invalid ID', () => {
        var res = users.getUser(1);
        expect(res).toNotExist();
    });

    it('should return name(s) for dance room', () => {
        var res = users.getUserList('Dance');
        expect(res).toEqual(['Kaycee', 'Alycia']);
    });

    it('should return name(s) for ACI room', () => {
        var res = users.getUserList('ACI');
        expect(res).toEqual(['Alis']);
    });

});