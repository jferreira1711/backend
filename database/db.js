import {Sequelize} from 'sequelize'

const db = new Sequelize('hospital_app', 'root', 'LibLdJOmYFOGYpQUfMjyjAtWYZYoSTRr',{
    host:'junction.proxy.rlwy.net',
    dialect: 'mysql',
    port: 54378,
    define: {
        timestamps: false
    }

})     

export default db