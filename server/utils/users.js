class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.users.find((user) => user.id === id);
        if (!user) return undefined;
        return this.users.splice(this.users.indexOf(user), 1)[0];
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
