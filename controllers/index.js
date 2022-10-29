const { restart } = require("nodemon");
const {userData} = require('../models/database')

const getData = async (req, res) => {
    
    const {params:{ id }} = req;
    const obtener = userData.find(e => e.id == id);
    const{
        firstName,
        lastName,
        maidenName,
        email,
        age,
        address,
        company
    } = obtener;

    res.send({
        status: 200,
        user:{
            fullName: `${firstName} ${lastName} ${maidenName}`,
            email,
            age,
            address,
            jobTitle:company.title
        }
            
    })
    
}

const updateData = async (req, res) => {
    
    const {params:{ id }, body: newAddress} = req;
    const obtener = userData.find(e => e.id == id);
    const user = {...obtener, address: newAddress};
    res.send({
        status: 200,
        user
    });
    
} 

const createUser = async (req, res) => {
    
    const { body:user } = req;
    await userData.push(user);

    res.send({
        status: 200,
        userData
    });
    
}

const deleteUser = async (req, res) => {
    
    const {params:{ id }} = req;
    const obtener = userData.find(e => e.id == id);
    const imprimir = userData.find(o => o.id != id);
    userData.splice(obtener,1);
    const {
        email
    } = imprimir
    res.send({
        status: 200,
        id: imprimir.id,
        email
    });
   
}

/* Crear get create-user body {
    email: dfdsagsd
}
respuesta
lista de todos los usuarios {
    {id, email}
}*/
/* delete delete-user/:id
lista de todos los usuarios {
    {id, email}
}
*/

module.exports = {
    getData,
    updateData,
    createUser,
    deleteUser
}