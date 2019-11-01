const knex = require('knex')
const users = require('./dummyUsers.json')
const properties = require('./dummyProperties.json')
const brokerages = require('./dummyBrokerages.json')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

const dummyService = {
    
    // insert users
    insertUsers() {
        users.map(user => {
            knexInstance
                .insert(user)
                .into('users')
                .then(() => { return })
        })
    },
    // insert properties
    insertProperties() {
        properties.map(property => {
            knexInstance
                .insert(property)
                .into('properties')
                .then(() => { return })
        })
    },

    // insert brokerages
    insertBrokerages() {
        brokerages.map(brokerage => {
            knexInstance
                .insert(brokerage)
                .into('brokerages')
                .then(() => { return })
        })
    },

    // empty db
    emptyDB() {
        knexInstance('brokerages').del()
        knexInstance('properties').del()
        knexInstance('users').del()
    }
}

module.exports = dummyService