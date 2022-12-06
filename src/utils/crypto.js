const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => { 
    //? PlainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}


const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}