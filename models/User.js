const fs = require('fs');
const path = './data/users.json';

class User {
    static async getAll() {
        return JSON.parse(await fs.promises.readFile(path));
    }

    static async addUser(user) {
        const users = await this.getAll();
        users.push(user);
        await fs.promises.writeFile(path, JSON.stringify(users));
        return user;
    }

    static async getUserById(id) {
        const users = await this.getAll();
        return users.find(user => user.id === id);
    }
}

module.exports = User;
