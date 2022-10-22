const FS = require('../firebase');


const { db } = FS;
const createMovie = async (req, res) => {
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Structure of movie to be created. This doesn\'t need to have an id yet as the db will be generating it for us',
                schema: {
                    $name: 'Avatar',
                    $author: 'James Cameron',
                    time: ['20:00', '22:00'],
                    rating: 5.00
                }
        }
        #swagger.responses[200] = {
                description: 'Movie successfully obtained.',
                schema: { $ref: '#/definitions/Movie' }
        }
        #swagger.responses[500] = {
                description: 'Error.',
                schema: { $ref: '#/definitions/GenericError' }
        }
        #swagger.produces = ['application/json']
        #swagger.consumes = ['application/json']
        */
    try{
        const { body:movie } = req;
        const moviesDb = db.collection('movies')
        const {_path: {segments}} = await moviesDb.add(movie);
        const id = segments[1];
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
}

const getMovie = async (req, res) => {
    try{
        const {params:{ id }} = req;
        const moviesDb = db.collection('movies').doc(id);
        const {_fieldsProto : {time, author, name, rating }} = await moviesDb.get();
        

        res,send({
            status: 200,
            time: time.stringValue,
            author: author.stringValue,
            name: name.stringValue,
            rating: rating.stringValue
        })
    }catch (error){
        res.send(error);
    }
}

const updateMovie = async (req, res) => {
    try{
        const { body:movie } = req;
        const { id, time, author, name, rating }= movie;
        const movieDb = db.collection('movies').doc(id);
        const resp = await movieDb.update({
            name,
            time,
            rating,
            author
        })
        res.send({
            status: 200,
            id
        });
    }catch (error){
        res.send(error);
    }
}

const deleteMovie = async (req, res) => {
    try{
        const {params:{ id }} = req;
        const moviesDB = db.collection('movies').doc(id);
        await moviesDB.delete();
        res.send({
            status: 200
        });
    }catch (error){
        res.send(error);
    }
}

const getMovies = async (req, res) => {
    try{
        const moviesDb = await db.collection('movies').get();
        const resp = moviesDb.docs.map(doc => doc.data());

        res.send({
            resp
        })
    }catch (error){
        res.send(error);
    }
}

module.exports = {
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie,
    getMovies
}