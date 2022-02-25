const db = require('../db/db');

class PersonDAO {
    async createPerson(firstName, lastName, email){
        const [result] = await db('person')
        .insert({
            email,
            first_name: firstName,
            last_name: lastName
        })
        .returning('*')
        
        return result;
    }
}

module.exports = new PersonDAO();