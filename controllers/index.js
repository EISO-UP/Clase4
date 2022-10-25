let {userData} = require('../models/database')

const getData = async (req, res) => {
    try{
        const {params:{ id }} = req;
        const obtener = userData.find(e => e.id == id);

        res,send({
            status: 200,
            user:{
                fullName: obtener.firstName.stringValue + obtener.lastName.stringValue + obtener.maidenName.stringValue,
                email: obtener.email.stringValue,
                age: obtener.age.intValue,
                adress: {
                    adress:obtener.adress.stringValue,
                    city:obtener.city.stringValue,
                    coordinates: {
                        lat: obtener.lat.intValue,
                        lng: obtener.lng.intValue
                    },
                    postalcode: obtener.postalcode.stringValue,
                    state:obtener.state.stringValue
                },
                jobTitle:obtener.jobTitle.stringValue
            }
            
        })
    }catch (error){
        res.send(error);
    }
}

const updateData = async (req, res) => {
    try{
        const {params:{ id }} = req;
        const mapeo = useState.map(id);

        const resp = await useState.map({
            firstName,
            lastName,
            maidenName,
            email,
            age,
            adress,
            city,
            lat,
            lng,
            postalcode,
            state,
            jobTitle
        })
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
} 


module.exports = {
    getData,
    updateData
}