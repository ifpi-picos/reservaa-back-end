const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(`postgres://btqacqcb:exDRiK2cTTAlggXRLFu09ZvWCuK3Ajsw@kesavan.db.elephantsql.com/btqacqcb`, { dialect: "postgres" })

sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel')(sequelize, DataTypes)