const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router } = require('./routes')

const app = express();
const apiPort = process.env.API_PORT || 3003;

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));